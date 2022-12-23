import Clearance from "../components/Clearance/Clearance";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Shipping from "../components/Shipping/Shipping";
import Subscribe from "../components/Subscribe/Subscribe";

const HomePage = () => {
    return ( 
        <main>
            <Hero/>
            <Shipping/>
            <Gallery/>
            <Clearance/>
            <Subscribe/>
        </main>
     );
}
 
export default HomePage;