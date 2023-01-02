import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import fashionImage from "../../src/assets/images/fashion.jpg";
import Input from "../common/Input/Input";
import loginService from "../services/loginService";
import { useDispatch } from "react-redux";
import { addAuth } from "../redux/auth/authActions";
import { useState } from "react";

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
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const { data } = await loginService(values);
      setError(null);
      dispatch(addAuth(data));
      navigate("/");
    } catch (error) {
      setError("Email or Password is wrong");
    }
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
        <Input
          formik={formik}
          type="password"
          name="password"
          label="Password"
        />
        <button
          className="bg-darkGray text-white w-full rounded-md p-2 uppercase my-4 disabled:opacity-60"
          disabled={!formik.isValid}
        >
          sign in
        </button>
        {error && <p className="text-red text-sm">{error}</p>}
        <p className="text-sm ">
          Not registred?
          <Link to="/signup">
            <span className="underline"> Create Account</span>
          </Link>
        </p>
      </form>
      <div className="hidden sm:block">
        <img src={fashionImage} className="h-full w-full" alt="fashionImage" />
      </div>
    </section>
  );
};

export default SigninPage;
