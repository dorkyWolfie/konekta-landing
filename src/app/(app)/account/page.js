'use server';
import mongoose from "mongoose";
import UsernameForm from "@/components/forms/UsernameForm";
import PageSettingsForm from "@/components/forms/pageSettingsForm";
import PageButtonsForm from "@/components/forms/pageButtonsForm";
import PageLinksForm from "@/components/forms/pageLinksForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { page } from "@/models/page";
import { user } from "@/models/user";
import { headers } from "next/headers";
import { getToken } from "next-auth/jwt";

export default async function AccountPage({ searchParams }) {
    const resolvedSearchParams = await searchParams;
    const desiredUsername = resolvedSearchParams?.desiredUsername;

    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/login");
    }

    mongoose.connect(process.env.MONGO_URI);
    const User = await user.findOne({ email: session?.user?.email }).lean();
    const accPage = await page.findOne({owner: session?.user?.email});

    if (accPage) {
        const plainPage = JSON.parse(JSON.stringify(accPage));
        return (
            <>
                <PageSettingsForm page={plainPage} user={session.user} />
                <PageButtonsForm page={plainPage} user={session.user} />

                {User.subscriptionStatus === 'pro' && (
                    <PageLinksForm page={plainPage} user={session.user} />
                )}
            </>
        )
    }

    return (
        <div>
            <UsernameForm desiredUsername={desiredUsername} />
        </div>
    );
}