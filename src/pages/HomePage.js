import Clearance from "../components/Clearance/Clearance";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Shipping from "../components/Shipping/Shipping";

const HomePage = () => {
    return ( 
        <main>
            <Hero/>
            <Shipping/>
            <Gallery/>
            <Clearance/>
        </main>
     );
}
 
export default HomePage;