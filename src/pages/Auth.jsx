import Input from "../components/Input";
import { useState, useCallback, useEffect } from "react";
import formImg from "../assets/img/Placeholder.gif";
import formImg2 from "../assets/img/Sign up.gif";
import Notification from "../components/Notification";
import { ImSpinner8 } from "react-icons/im";
import { buildApiEndpoint, setCookie } from "../utils"
import { useNavigate, Navigate } from "react-router-dom";


export default ({ signup = false }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // consitionals for sign in
  const [variant, setVariant] = useState(signup ? "Register" : "Login");

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState({ type: "danger", title: "Error!", desc: "" }); // {type: "success", title: "Success!", desc: "You have successfully logged in. Redirecting..."} 

  const mockErrorMsg = { ...errorMessage, desc: "" };

  const navigate = useNavigate();

  useEffect(() => {
    if (errorMessage.desc) {
      setTimeout(() => {
        setErrorMessage(mockErrorMsg);
      }, 5000);
    }
  }, [errorMessage.desc]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if (variant === "Login") {
      // handle login
      if (!email || !password) {
        setErrorMessage({ ...errorMessage, desc: "Please fill in all fields" });
      } else if (password.length < 6) {
        setErrorMessage({ ...errorMessage, desc: "Password should not be less than 6 characters" });
      } else {
        setErrorMessage(mockErrorMsg);
        setLoading(true);

        try {
          const response = await fetch(buildApiEndpoint("/users/login"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ email, password }),
            credentials: "include",
          });

          setLoading(false);

          if (response.ok) {
            // successful login
            const responseData = await response.text();
            // console.log(responseData)
            setCookie("user", responseData);

            let json = JSON.parse(responseData);
            navigate(json.role === "OWNER" ? "/owner" : "/dashboard");
          } else {
            const responseData = await response.text();
            setErrorMessage({ ...errorMessage, desc: responseData });
          }
        } catch (error) {
          setLoading(false);
          setErrorMessage({ ...errorMessage, desc: "Unable to login. Try again later" });
          console.error("Login error:", error);
        }
      }
    } else {
      // handle register
      if (!email || !password || !firstName || !lastName || !userName || !phoneNumber) {
        setErrorMessage({ ...errorMessage, desc: "Please fill in all fields" });
      } else if (password.length < 6) {
        setErrorMessage({ ...errorMessage, desc: "Password should not be less than 6 characters" });
      } else {
        setErrorMessage(mockErrorMsg);
        setLoading(true);

        try {
          const response = await fetch(buildApiEndpoint("/users/register"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ email, password, firstName, lastName, userName, phoneNumber }),
            credentials: "include",
          });

          setLoading(false);

          if (response.ok) {
            // successful login
            const responseData = await response.text();
            // console.log(responseData)
            setCookie("user", responseData);
            navigate("/dashboard");

          } else {
            const responseData = await response.text();
            setErrorMessage({ ...errorMessage, desc: responseData });
          }
        } catch (error) {
          setLoading(false);
          setErrorMessage({ ...errorMessage, desc: "Unable to create account. Try again later" });
          console.error("Login error:", error);
        }
      }
    }
  }

  const btnText = () => {
    if (loading) {
      return <ImSpinner8 className="animate-spin mx-auto" />;
    }

    return variant === "Login" ? "Login" : "Register";
  }

  return (
    <section className='container mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center '>
      {errorMessage.desc && <Notification type={errorMessage.type} title={errorMessage.title} desc={errorMessage.desc} superHandler={() => setErrorMessage(mockErrorMsg)} />}
      <div
        className='col-span-1  h-full 
      '>
        <img
          src={variant === "Login" ? formImg : formImg2}
          alt=''
          className='h-[550px] hidden lg:block md:block'
        />
      </div>
      <form method='POST'
        onSubmit={handleSubmitForm}
      >
        <div className='col-span-1 w-[95%] px-5 h-full flex flex-col gap-5 items-center justify-start'>
          <h1
            data-aos='fade-down'
            data-aos-duration='1200'
            className='text-[28px] text-center leading-[18px] text-headingColor font-[500] md:text-[32px] md:leading-[24px] md:text-center lg:text-left mt-5  '>
            UniverSoul Babers
          </h1>
          <p
            className='text-textColor my-3 text-sm leading-3'
            data-aos='fade-up'
            data-aos-duration='1300'>
            {variant === "Login"
              ? "Login To UniverSoul"
              : "Get Started With UniverSoul"}
          </p>
          {variant === "Register" && (
            <div
              className='flex gap-5 flex-col'
              data-aos='fade-right'
              data-aos-duration='1200'>
              <div className='flex items-center justify-between  w-full '>
                <div className='flex w-[45%]'>
                  <Input
                    label='First name'
                    onChange={(e) => setFirstName(e.target.value)}
                    id='firstName'
                    type='text'
                    value={firstName}
                  />
                </div>
                <div className='flex w-[45%]'>
                  <Input
                    label='Last name'
                    onChange={(e) => setLastName(e.target.value)}
                    id='lastName'
                    type='text'
                    value={lastName}
                  />
                </div>
              </div>
              <div className='flex w-full'>
                <Input
                  label='Phone number'
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id='phone'
                  type='tel'
                  value={phoneNumber}
                />
              </div>
              <div className='flex w-full'>
                <Input
                  label='Username'
                  onChange={(e) => setUserName(e.target.value)}
                  id='userName'
                  type='text'
                  value={userName}
                />
              </div>
            </div>
          )}

          <div
            className='flex w-full'
            data-aos='fade-right'
            data-aos-duration='1200'>
            <Input
              label='Email'
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              type='email'
              required={true}
              value={email}
            />
          </div>
          <div
            className='flex w-full'
            data-aos='fade-right'
            data-aos-duration='1200'>
            <Input
              label='Password'
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type='password'
              required={true}
              value={password}
            />
          </div>

          <button
            type='submit'
            data-aos='fade-up'
            data-aos-duration='1500'
            className='bg-primaryDark py-3 duration-150 hover:bg-warm-gray-500 text-white rounded-md w-full mt-1'>
            {btnText()}
          </button>

          <p
            className='text-neutral-500 mt'
            data-aos='fade-up'
            data-aos-duration='1500'>
            {variant == "Login" ? "First time here?" : "Already have an account"}
            <span
              onClick={() => navigate(variant === "Login" ? "/signup" : "/login")}
              className='text-black ml-2 cursor-pointer hover:underline'>
              {variant === "Login" ? "Create an account" : "Login"}
            </span>
          </p>

        </div>
      </form>
    </section>
  );
}