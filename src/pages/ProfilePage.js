import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaUserAlt, FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import deleteAccountService from "../services/deleteAccountService";
import { addAuth } from "../redux/auth/authActions";

const ProfilePage = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteAccountHandler = async () => {
    try {
      await deleteAccountService(auth.user.id);
      localStorage.removeItem("authState");
      dispatch(addAuth(false));
      navigate("/");
    } catch (error) {}
  };

  return (
    <section className="mx-auto p-4 max-w-2xl sm:flex gap-x-3 sm:py-14 ">
      <SideBar deleteAccountHandler={deleteAccountHandler} />
      <div className="border border-lightGray h-min rounded-md p-4 w-full">
        <UserInfo auth={auth} />
      </div>
    </section>
  );
};

export default ProfilePage;

const SideBar = ({ deleteAccountHandler }) => {
  return (
    <div className="border border-lightGray rounded-md p-4 h-min sm:w-[55%]">
      <ul>
        <li className="mb-2 border-b border-lightGray p-4 font-bold flex items-center gap-x-2">
          <FaUserAlt /> Your Information
        </li>
        <li
          className="p-4 font-bold flex items-center gap-x-2 text-red cursor-pointer"
          onClick={deleteAccountHandler}
        >
          <FaTrashAlt />
          Delete Account
        </li>
      </ul>
    </div>
  );
};

const UserInfo = ({ auth }) => {
  if (auth.user) {
    return (
      <>
        <div className="border-b border-lightGray p-4">
          <p className="text-lightGray">Your Name :</p>
          <p>{auth.user.name}</p>
        </div>
        <div className="border-b border-lightGray p-4">
          <p className="text-lightGray">Your Email :</p>
          <p>{auth.user.email}</p>
        </div>
        <div className="border-b border-lightGray p-4">
          <p className="text-lightGray">Your Password :</p>
          <p>********</p>
        </div>
        <div className="p-4">
          <p className="text-lightGray">Your PhoneNumber :</p>
          <p>{auth.user.phoneNumber}</p>
        </div>
      </>
    );
  }
};
