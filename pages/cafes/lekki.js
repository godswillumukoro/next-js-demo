import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link';

const shops = () => {
    return (
        <>
            <Navbar />
            <main>
                <h1>Coffee Shops in Lekki</h1>
                <ul>
                    <li>Myya's Cafe</li>
                    <li>Cafe One by Sterling</li>
                    <li>Cafe Cassata</li>
                    <li>Thrive</li>
                    <li>Wave Beach</li>
                </ul>
            </main>

            <aside>
                <Link href="/cafes">Go Back...</Link>
            </aside >
            <Footer />
        </>
    );
}

export default shops;