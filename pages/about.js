import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from 'next/link';

const About = () => {
    return (
        <>
            <Navbar />
            <main className="mg-bl-2">
                <h1>About Cafe Hub</h1>
                <p>Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks</p>
                <p>Seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles that are typically steeped in hot water before being filtered out, producing a cup of coffee. It is usually served hot, although chilled or iced coffee is common. Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often used to mask the bitter taste or enhance the flavor.</p>
            </main>
            <Footer />
        </>
    );
}

export default About;