'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFileLines, faAddressCard } from "@fortawesome/free-regular-svg-icons";
import LogoutButton from "@/components/buttons/logoutButton";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const path = usePathname();

  return (
    <nav className="inline-flex mx-auto items-start flex-col mt-8 gap-6">
      <Link href={'/account'} 
      className={"flex gap-4 items-center cursor-pointer hover:text-blue-500" 
        + (path === '/account' ? 'text-blue-500 font-bold items-center' : '')} >
        <FontAwesomeIcon 
          icon={faFileLines} 
          className="w-6 h-6" />
        <span>Профил</span>
      </Link>
      <Link href={'/analytics'} 
        className={"flex gap-4 items-center cursor-pointer hover:text-blue-500" 
        + (path === '/analytics' ? 'text-blue-500 font-bold items-center' : '')}>
        <FontAwesomeIcon 
          icon={faChartLine} 
          className="w-6 h-6" />
        <span>Аналитика</span>
      </Link>
      <LogoutButton 
        iconLeft={true}
        className={"flex gap-4 items-center cursor-pointer hover:text-blue-500"}
        iconClasses={'w-6 h-6'}
      />
      <div className="absolute top-88 left-4 w-52 h-0.5 bg-gray-200 mt-6"></div>
      <Link href={'/login'} className="flex items-center gap-2 text-xs uppercase text-gray-600 pt-7 cursor-pointer hover:text-blue-500">
        <FontAwesomeIcon 
          icon={faArrowLeft}
          className={"w-3 h-3"} />
        <span>Назад кон почетна</span>
      </Link>
      <Link href={'/'} className="flex items-center gap-2 text-xs uppercase text-gray-600 cursor-pointer hover:text-blue-500">
        <FontAwesomeIcon 
          icon={faAddressCard}
          className={"w-3 h-3"} />
        <span>конекта.мк</span>
      </Link>
    </nav>
  )
}