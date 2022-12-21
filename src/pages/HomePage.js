import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Shipping from "../components/Shipping/Shipping";

const HomePage = () => {
    return ( 
        <main>
            <Hero/>
            <Shipping/>
            <Gallery/>
        </main>
     );
}
 
export default HomePage;