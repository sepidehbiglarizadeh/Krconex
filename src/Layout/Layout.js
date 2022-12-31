import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SocialBar from "../components/SocialBar/SocialBar";

const Layout = ({ children }) => {
  const [fixed, setFixed] = useState(false);
  return (
    <div className={`${fixed ? "fixed" : ""}`}>
      <SocialBar />
      <Navbar setFixed={setFixed} />
      <main className="2xl:max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
