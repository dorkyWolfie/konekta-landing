import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'
import { scrollTop } from '@/components/mobMenu';

export default async function Footer () {
    return (
        <footer className="text-center">
            <p>© 2025 <Link className="hover:text-[#3b82f6]" href={"/"}>Конекта</Link></p>
        </footer>
    );
}