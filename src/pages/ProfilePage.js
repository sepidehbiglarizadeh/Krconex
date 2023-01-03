import { useSelector } from "react-redux";
import { FaEdit, FaUserAlt, FaMapMarkerAlt, FaTrashAlt } from "react-icons/fa";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const ProfilePage = () => {
  const auth = useSelector((state) => state.auth.auth);

  return (
    <section className="mx-auto p-4 max-w-2xl sm:flex gap-x-3 sm:py-14 ">
      <SideBar />
      <div className="border border-lightGray h-min rounded-md p-4 w-full">
        <Routes>
          <Route path="/user" element={<UserInfo auth={auth} />} />
          <Route path="/address" element={<Address auth={auth} />} />
        </Routes>
      </div>
    </section>
  );
};

export default ProfilePage;

const SideBar = () => {
  return (
    <div className="border border-lightGray rounded-md p-4 h-min sm:w-[55%]">
      <ul>
        <NavLink to="/profile/user">
          <li className="mb-2 border-b border-lightGray p-4 font-bold flex items-center gap-x-2">
            <FaUserAlt /> Your Information
          </li>
        </NavLink>
        <NavLink to="/profile/address">
          <li className="mb-2 border-b border-lightGray p-4 font-bold flex items-center gap-x-2">
            <FaMapMarkerAlt />
            Your Address
          </li>
        </NavLink>
        <li className="p-4 font-bold flex items-center gap-x-2 text-red">
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
        <div className="border-b border-lightGray p-4 flex justify-between items-center">
          <div>
            <p className="text-lightGray">Your Name :</p>
            <p>{auth.user.name}</p>
          </div>
          <button>
            <FaEdit />
          </button>
        </div>
        <div className="border-b border-lightGray p-4">
          <p className="text-lightGray">Your Email :</p>
          <p>{auth.user.email}</p>
        </div>
        <div className="border-b border-lightGray p-4 flex justify-between items-center">
          <div>
            <p className="text-lightGray">Your Password :</p>
            <p>********</p>
          </div>
          <button>
            <FaEdit />
          </button>
        </div>
        <div className="border-b border-lightGray p-4 flex justify-between items-center">
          <div>
            <p className="text-lightGray">Your PhoneNumber :</p>
            <p>{auth.user.phoneNumber}</p>
          </div>
          <button>
            <FaEdit />
          </button>
        </div>
      </>
    );
  }
};

const Address = ({ auth }) => {
  if (auth.user && auth.user.address !== "") {
    return (
      <>
        <div className="border-b border-lightGray p-4 flex justify-between items-center">
          <div>
            <p className="text-lightGray">Your Address :</p>
            <p>{auth.user.address}</p>
          </div>
          <button>
            <FaEdit />
          </button>
        </div>
        <div className="border-b border-lightGray p-4 flex justify-between items-center">
          <div>
            <p className="text-lightGray">Your Postal/Zip Code :</p>
            <p>{auth.user.postalCode}</p>
          </div>
          <button>
            <FaEdit />
          </button>
        </div>
      </>
    );
  } else {
    return <AddressForm />;
  }
};

const AddressForm = () => {
  return (
    <form className=" p-4">
      <div className="mb-4">
        <label className="mb-2 block">Your Address :</label>
        <textarea
          className="border border-lightGray rounded-md w-full resize-none h-32 p-4 outline-none focus:border-2 focus:border-primaryYellow"
          placeholder="Enter your address ..."
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Your Postal/Zip Code :</label>
        <input
          type="text"
          className="w-full border border-lightGray rounded-md p-3 outline-none focus:border-2 focus:border-primaryYellow"
        />
      </div>
      <button className="bg-darkGray text-white w-full rounded-md py-2">
        Add Address
      </button>
    </form>
  );
};
