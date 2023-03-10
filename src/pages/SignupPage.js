import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../common/Input/Input";
import signupService from "../services/signupService";
import { addAuth } from "../../src/redux/auth/authActions";
import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(6, "The name length is not valid"),
  email: Yup.string()
    .email("Email format is wrong")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Phone number is wrong")
    .nullable(),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password length is short - it must be at leat 8 characters"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignupPage = () => {
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") || "";

  useEffect(() => {
    if (auth.auth.user) navigate(`/${redirect}`);
  }, [auth.auth, redirect]);

  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = { name, email, password, phoneNumber };
    try {
      const { data } = await signupService(userData);
      dispatch(addAuth(data));
      localStorage.setItem("authState", JSON.stringify(data));
      navigate(`/${redirect}`);
    } catch (error) {
      setError("Email already exists");
      console.log(error);
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
    <section className="max-w-lg mx-auto shadow-lg my-6 rounded-md overflow-hidden">
      <form className="px-4 py-10" onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="Phone Number"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="Password Confrim"
          type="password"
        />
        <button
          className="bg-darkGray text-white w-full rounded-md p-2 uppercase my-4 disabled:opacity-60"
          disabled={!formik.isValid}
        >
          Register
        </button>
        {error && <p className="text-red text-sm">{error}</p>}
        <p className="text-sm ">
          Already Got an Account?
          <Link to="/signin">
            <span className="underline"> Login</span>
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignupPage;
