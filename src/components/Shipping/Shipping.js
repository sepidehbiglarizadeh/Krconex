import { FaShippingFast,FaBoxOpen,FaLock } from "react-icons/fa";

const Shipping = () => {
    return ( 
        <section className="bg-darkGray mb-2 p-4 flex flex-wrap justify-center items-center gap-x-5 gap-y-5">
            <div className="flex flex-col items-center">
                <p className="capitalize text-white text-3xl">Up to <span className="text-primaryYellow">40%</span> off</p>
                <span className="text-primaryYellow font-bold text-7xl uppercase">Sale</span>
            </div>
            <div className="text-lightGray flex items-center gap-x-2">
                <span className="text-5xl md:text-7xl"><FaShippingFast/></span>
                <p className="capitalize text-xl font-bold">free and fast shipping</p>
            </div>
            <div className="text-lightGray flex items-center gap-x-2">
                <span className="text-5xl md:text-7xl"><FaBoxOpen/></span>
                <p className="capitalize text-xl font-bold">30-days Free Return</p>
            </div>
            <div className="text-lightGray flex items-center gap-x-2">
                <span className="text-5xl md:text-7xl"><FaLock/></span>
                <p className="capitalize text-xl font-bold">100% Secure Shopping</p>
            </div>
        </section>
     );
}
 
export default Shipping;