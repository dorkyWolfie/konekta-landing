import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { openHeader } from "@/components/mobMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import LogoutButton from '@/components/buttons/logoutButton';
import Image from 'next/image';

export default async function Header () {
    const session = await getServerSession(authOptions);

    return (
         <header className="bg-white shadow-sm py-3 fixed top-0 left-0 right-0 z-1 px-10">
            <div className="max-w-6xl md:flex hidden md:justify-between justify-center items-center gap-4 md:flex-nowrap flex-wrap mx-auto text-black font-[600] text-xs uppercase">
                <Link href={"/"} className="max-sm:hidden"><Image src="/konekta_logo_0.webp" alt="logo" width={70} height={50} /></Link>
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
            <div className="md:hidden flex mx-10 items-center justify-between relative">
                <Link href={"/"}><Image src="/konekta_logo_0.webp" alt="logo" width={70} height={50} /></Link>
                <button onClick={openHeader} className=" bg-[#3b82f6] text-white py-2 px-3">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
                <nav id="header" className="absolute top-15 left-0 right-0 flex flex-col gap-4 justify-center hidden bg-white/60 backdrop-blur-md p-10">
                    <Link className="hover:text-[#3b82f6]" href={"/#proizvodi"}>Производи</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#cenovnik"}>Ценовник</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#recenzii"}>Рецензии</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#kontakt"}>Контакт</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/privatnost"}>Политика на приватност</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/kolacinja"}>Колачиња</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/uslovi-na-koristenje"}>Услови на користење</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/upatstvo-za-koristenje"}>Упатство за користење</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/reklamacija"}>Политика на поврат и рефундација</Link>
                    {!!session && (
                        <>
                            <Link className="hover:text-[#3b82f6]" href={"/account"}> Здраво, {session?.user?.name}</Link>
                            <LogoutButton className="text-left flex gap-2 items-center" />
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