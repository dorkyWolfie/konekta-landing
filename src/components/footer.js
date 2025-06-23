import Link from 'next/link'

export default async function Footer () {
    return (
        <footer className="text-center">
            <p>© 2025 <Link className="hover:text-blue-500" href={"/"}>Конекта</Link></p>
        </footer>
    );
}