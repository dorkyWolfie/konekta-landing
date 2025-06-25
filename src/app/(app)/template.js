// 'use server';
import "../globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import AppSidebar from "@/components/layout/appSidebar";
import { page } from "@/models/page";
import mongoose from "mongoose";
import { headers } from "next/headers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { openMenu, closeMenu } from "@/components/mobMenu";


export const metadata = {
  title: "Конекта",
  description: "1 допир, 1000 можности",
};

export default async function AppTemplate({ children, ...rest }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  mongoose.connect(process.env.MONGO_URI);
  const Page = await page.findOne({owner: session.user.email});

  return (
    <html lang="mk">
      <head>
        <meta name="robots" content="noindex,nofollow" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      </head>
      <body className="overflow-x-hidden">
        <Toaster />
        <main className="flex min-h-screen">
          <aside id="sidebar" className="bg-white min-w-60 top-0 left-0 bottom-0 md:block justify-center hidden z-20 transition-all duration-500">
            <div className="sticky top-0 p-4 pt-8 flex flex-col items-center">
              <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
                <Image src={session.user.image} width={256} height={256} alt={"avatar"} />
              </div>
              {Page && (
                <Link 
                  target="_blank"
                  href={'/' + Page.uri} 
                  className="text-center mt-4 flex gap-1 items-center justify-center hover:text-blue-500">
                  konekta.mk/{Page.uri}
                </Link>
              )}
              <div className="w-full h-0.5 bg-gray-200 mt-6"></div>
              <div className="flex items-center">
                <AppSidebar />
              </div>
            </div>
          </aside>
          <div className="grow">
            <button onClick={openMenu} className="md:hidden block absolute top-8 right-8 bg-blue-500 text-white py-2 px-3 ">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
