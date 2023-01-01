import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import fashionImage from "../../src/assets/images/fashion.jpg";
import Input from "../common/Input/Input";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email format is wrong")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SigninPage = () => {
  const onSubmit = () => {
    console.log("form submited");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <section className="sm:flex justify-between max-w-2xl sm:h-[500px] mx-auto shadow-lg my-6 rounded-md overflow-hidden">
      <form className="px-4 sm:w-2/4 py-10" onSubmit={formik.handleSubmit}>
        <Input formik={formik} type="email" name="email" label="Email" />
        <Input formik={formik} type="password" name="password" label="Password" />
        <button className="bg-darkGray text-white w-full rounded-md p-2 uppercase my-4 disabled:opacity-60" disabled={!formik.isValid}>
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
        <img src={fashionImage} className="h-full w-full" alt="fashionImage"/>
      </div>
    </section>
  );
};

export default SigninPage;
