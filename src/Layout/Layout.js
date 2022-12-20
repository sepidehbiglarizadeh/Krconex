import SocialBar from "../components/SocialBar/SocialBar";

const Layout = ({children}) => {
    return ( 
        <>
            <SocialBar/>
            {children}
        </>
     );
}
 
export default Layout;