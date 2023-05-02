import Link from "next/link";
const Navbar = () => {
    return ( 
        <nav className="flex column">
            <p className="logo">Cafe Hub</p>

            <ul className="flex gap-2 navbar">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/cafes">Cafes</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;