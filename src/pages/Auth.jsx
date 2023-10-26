import { Form, Input } from "../components";
import { useState, useCallback } from "react";
import formImg from '../assets/img/Placeholder.gif'


// form data : 
  // firstName,
  //   middleName,
  //   lastName,
  //   email,
  //   password,
  //   userName,
  //   phoneNumber,


const Auth = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // consitionals for sign in 
  const [variant, setVariant] = useState('Login')

 const toggleVariant = useCallback(() => {
   setVariant((currentVariant) => {
  return currentVariant === 'Login' ? 'Register' : 'Login';
   })
  
 }, []);


  return (
    <>
      <section className='container mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center '>
        <div
          className='col-span-1  h-full 
      '>
          <img src={formImg} alt='' className='h-[550px]' />
        </div>
        <div className='col-span-1 w-[95%] px-5 h-full flex flex-col gap-5 items-center justify-start'>
          <h1 className='text-[28px] text-center leading-[18px] text-headingColor font-[500] md:text-[32px] md:leading-[24px] md:text-center lg:text-left mt-5  '>
            UniverSoul Babers
          </h1>
          <p className='text-textColor my-3 text-sm leading-3'>
            Create Account
          </p>
          {variant === "Register" && (
            <div className='flex gap-5 flex-col' >
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
                  id='email'
                  type='number'
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

          <div className='flex w-full'>
            <Input
              label='Email'
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              type='email'
              value={email}
            />
          </div>
          <div className='flex w-full'>
            <Input
              label='Password'
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type='email'
              value={password}
            />
          </div>

          <button
            onClick={() => {}}
            className='bg-black py-3 duration-150 hover:bg-slate-500 text-white rounded-md w-full mt-1'>
            {variant == "Login" ? "Login" : "Sign Up"}
          </button>

          <p className='text-neutral-500 mt'>
            {variant == "Login"
              ? "First time here?"
              : "Already have an account"}
            <span
              onClick={toggleVariant}
              className='text-black ml-2 cursor-pointer hover:underline'>
              {variant === "Login" ? "Create an account" : "Login"}
            </span>
          </p>

          {/* <Form /> */}
        </div>
      </section>
    </>
  );
}

export default Auth