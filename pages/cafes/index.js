import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const Cafe = () => {
    return ( 
        <>
        <Navbar />
        <main>
            <h1>Coffee shops around you</h1>
            <ul>
                <Link href="/cafes/lekki">Lekki</Link>
            </ul>
        </main>
        <Footer />
        </>
     );
}
 
export default Cafe;