import avatar from "../assets/img/avatar-icon.png";
import { MdVerified } from "react-icons/md";
import { Fragment, useState, useEffect } from "react";
import {
  buildApiEndpoint,
  classNames,
  deleteAllCookies,
  getCookie,
} from "../utils";
import {
  BarberProfile,
  BarberBookings,
  BarberShop,
  BarberStore,
} from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useImage } from "../context/ImageContext";

const Profile = () => {
  const [tab, setTab] = useState("profile");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const { imageUrl } = useImage();

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(buildApiEndpoint("/users/one"), {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          const userData = response.data;
          setUser(userData.user);
          console.log("user", response.data);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      fetchUserDetails();
    }
  }, []);

  function logout() {
    deleteAllCookies();
    navigate("/login");
  }

  return (
    <section className="container grid grid-cols-1 gap-3 mx-auto md:grid-cols-3 lg:grid-cols-3">
      <div className="col-span-1 h-[450px] flex items-center justify-center flex-col ">
        <div className="w-[150px] h-[150px] rounded-full mb-3  ">
          <img
            src={imageUrl}
            alt={`Image${user.firstName} ${user.lastName}`}
            className="block rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <p className="leading-5 text-textColor">
            {user.firstName} {user.lastName}
          </p>
          <div className="flex items-center justify-center gap-1">
            <p>{user.role}</p>
            <MdVerified />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 w-full mt-12">
          <button
            className="bg-black rounded-lg p-3 text-white my-3 w-[90%]"
            onClick={logout}
          >
            Logout
          </button>
          <button className="bg-red-500 rounded-lg p-3 text-white my-0 w-[90%]">
            Delete Account
          </button>
        </div>
      </div>

      {/* Profile Tab  */}
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <div className=" border-b border-solid border-[#0066ff34]  ">
          <button
            onClick={() => {
              setTab("profile");
            }}
            className={` ${
              tab === "profile" && "border-b border-solid border-primaryColor"
            }  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
          >
            My Profile
          </button>
          <button
            onClick={() => {
              setTab("bookings");
            }}
            className={`
              ${
                tab === "bookings" &&
                "border-b border-solid border-primaryColor"
              }
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
          >
            Bookings
          </button>
          <button
            onClick={() => {
              setTab("shop");
            }}
            className={`
              ${tab === "shop" && "border-b border-solid border-primaryColor"}
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
          >
            Shop(s)
          </button>
          <button
            onClick={() => {
              setTab("store");
            }}
            className={`
              ${tab === "store" && "border-b border-solid border-primaryColor"}
              py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
          >
            My Store
          </button>
        </div>
        {/* Tab conditional rendering  */}
        <div className="mt-[50px] ">
          {tab === "profile" && <BarberProfile user={user} />}
          {tab === "bookings" && <BarberBookings />}
          {tab === "shop" && <BarberShop />}
          {tab === "store" && <BarberStore />}
        </div>
      </div>
    </section>
  );
};

export default Profile;
