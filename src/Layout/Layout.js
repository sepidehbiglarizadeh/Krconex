import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import SocialBar from "../components/SocialBar/SocialBar";
import { addAuth } from "../redux/auth/authActions";

const Layout = ({ children }) => {
  const [fixed, setFixed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("authState")) || false;
    dispatch(addAuth(data));
  }, []);

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
