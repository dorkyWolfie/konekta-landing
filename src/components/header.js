import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link'
import LogoutButton from '@/components/buttons/logoutButton';

export default async function Header () {
    const session = await getServerSession(authOptions);

    return (
        <header className="bg-white shadow-sm py-4">
            <div className="max-w-6xl flex md:justify-between justify-center items-center gap-4 md:flex-nowrap flex-wrap mx-auto px-6 text-black font-[600] text-xs uppercase">
                <Link href={"/"}>Конекта</Link>
                <nav className="flex items-center gap-4">
                    <Link className="hover:text-[#3b82f6]" href={"/#proizvodi"}>Производи</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#cenovnik"}>Ценовник</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#recenzii"}>Рецензии</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#kontakt"}>Контакт</Link>
                </nav>
                <nav className="flex items-center gap-4 ">
                    {!!session && (
                        <>
                            <Link className="hover:text-[#3b82f6]" href={"/account"}> Здраво, {session?.user?.name}</Link>
                            <LogoutButton />
                        </>
                    )}
                    {!session && (
                        <Link className="hover:text-[#3b82f6]" href={"/login"}>Најава</Link>
                    )}
                </nav>
            </div>
        </header>
    );
}