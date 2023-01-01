import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../common/Input/Input";

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
    .required("پسورد اجباری است")
    .min(8, "Password length is short - it must be at leat 8 characters"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignupPage = () => {
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
    <section className="max-w-lg mx-auto shadow-lg my-6 rounded-md overflow-hidden">
      <form className="px-4 py-10">
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
