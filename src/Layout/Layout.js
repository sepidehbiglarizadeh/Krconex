import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SocialBar from "../components/SocialBar/SocialBar";

const Layout = ({children}) => {
    return ( 
        <>
            <SocialBar/>
            <Navbar/>
            {children}
            <Footer/>
        </>
     );
}
 
export default Layout;