import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { CloseMenu, OpenMenu } from '@/components/mobMenu';
import Link from 'next/link';
import Image from 'next/image';


export default async function Header () {
    return (
         <header className="bg-white shadow-sm py-3 fixed top-0 left-0 right-0 z-1">
            <div className="px-10">
                <div className="max-w-6xl md:flex hidden md:justify-between justify-center items-center gap-4 md:flex-nowrap flex-wrap mx-auto text-black font-[600] text-xs uppercase">
                    <Link href={"/"} className="max-sm:hidden"><Image src="/konekta_logo_0.webp" alt="logo" width={70} height={50} /></Link>
                    <nav className="flex items-center gap-4">
                        <Link className="hover:text-[#3b82f6]" href={"/#cenovnik"}>Ценовник</Link>
                        <Link className="hover:text-[#3b82f6]" href={"/#proizvodi"}>Производи</Link>
                        {/* <Link className="hover:text-[#3b82f6]" href={"/#recenzii"}>Рецензии</Link> */}
                        <Link className="hover:text-[#3b82f6]" href={"/#faq"}>ЧПП</Link>
                        <Link className="hover:text-[#3b82f6]" href={"/#kontakt"}>Контакт</Link>
                    </nav>
                    <nav className="flex items-center gap-4">
                        <Link className="button-2" href={"https://app.konekta.mk"}>Најава</Link>
                        <Link className="button-3" href={"https://app.konekta.mk/registracija"}>Регистрација</Link>
                    </nav>
                </div>
            </div>
            <div className="md:hidden flex items-center justify-between relative px-10">
                <Link href={"/"}><Image src="/konekta_logo_0.webp" alt="logo" width={70} height={50} /></Link>
                <button 
                    onClick={OpenMenu} 
                    className="text-[#3b82f6] py-2 px-3">
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
                <nav id="header" className="absolute top-13 left-0 right-0 flex flex-col gap-2 justify-center hidden font-[600] bg-white/60 backdrop-blur-md p-10">
                    <button 
                        onClick={CloseMenu}
                        className="absolute top-2 right-14 text-xl font-bold cursor-pointer" >
                        <FontAwesomeIcon icon={faClose} size="lg" />
                    </button>
                    <Link className="hover:text-[#3b82f6]" href={"/#proizvodi"}>Производи</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#cenovnik"}>Ценовник</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#recenzii"}>Рецензии</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/#kontakt"}>Контакт</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/privatnost"}>Политика на приватност</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/kolacinja"}>Колачиња</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/uslovi-na-koristenje"}>Услови на користење</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/upatstvo-za-koristenje"}>Упатство за користење</Link>
                    <Link className="hover:text-[#3b82f6]" href={"/reklamacija"}>Политика на поврат и рефундација</Link>
                    <Link className="button-2 w-1/4 text-center mt-2" href={"https://app.konekta.mk"}>Најава</Link>
                    <Link className="button-3 w-1/4" href={"https://app.konekta.mk/registracija"}>Регистрација</Link>
                </nav>
            </div>
        </header>
    );
}