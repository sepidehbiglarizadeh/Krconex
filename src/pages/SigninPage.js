import { Link } from "react-router-dom";
import fashionImage from "../../src/assets/images/fashion.jpg";
import Input from "../common/Input/Input";

const SigninPage = () => {
  return (
    <section className="sm:flex justify-between max-w-2xl sm:h-[500px] mx-auto shadow-lg my-6 rounded-md overflow-hidden">
      <form className="px-4 sm:w-2/4 py-10">
        <Input type="email" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="bg-darkGray text-white w-full rounded-md p-2 uppercase my-4">
          sign in
        </button>
        <p className="text-sm ">
          Not registred?
          <Link to="/signup">
            <span className="underline"> Create Account</span>
          </Link>
        </p>
      </form>
      <div className="hidden sm:block">
        <img src={fashionImage} className="h-full w-full" />
      </div>
    </section>
  );
};

export default SigninPage;
