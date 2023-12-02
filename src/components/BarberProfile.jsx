import React, {useState} from 'react'
import Input from "./Input";
import Qualification from './Qualification'
import Experience from './Experience'
import Hours from './Hours'

const BarberProfile = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [bio, setBio] = useState('')
  const [qualification, setQualification] = useState(false)
  const [experience, setExperience] = useState(false)
const [hours, setHours] = useState(false)

  return (
    <div className='flex flex-col items-center justify-start w-full h-auto gap-5'>
      <h1 className='text-headingColor font-[500] text-left leading-5'>
        Profile Information
      </h1>
      <div className='flex w-[90%]'>
        <Input
          label='Name'
          onChange={(e) => setName(e.target.value)}
          id='name'
          type='text'
          value={name}
        />
      </div>
      <div className='flex w-[90%]'>
        <Input
          label='Email'
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          type='email'
          value={email}
        />
      </div>
      <div className='flex w-[90%]'>
        <Input
          label='Phone number'
          onChange={(e) => setPhoneNumber(e.target.value)}
          id='phoneNumber'
          type='phone'
          value={phoneNumber}
        />
      </div>
      <div className='flex w-[90%]'>
        <textarea
          className='w-full px-4 py-3 border border-solid rounded-md border-slate-300 focus:outline outline-primaryColor '
          rows='6'
          placeholder='Your Bio'
          onChange={(e) => setBio(e.target.value)}></textarea>
      </div>
      <div className='flex w-[90%] '>
        <button
          onClick={() => setQualification(!qualification)}
          className='px-5 py-2 my-4 text-white bg-black rounded-lg '>
          Add Qualifications
        </button>
      </div>
      <div className='flex w-[90%]'>
        {qualification && (
          <div>
            <Qualification />
          </div>
        )}
      </div>
      <div className='flex w-[90%] '>
        <button
          onClick={() => setExperience(!experience)}
          className='px-5 py-2 my-4 text-white bg-black rounded-lg '>
          Add Experience
        </button>
      </div>
      <div className='flex w-[90%]'>
        {experience && (
          <div>
            <Experience />
          </div>
        )}
      </div>
      <div className='flex w-[90%] '>
        <button
          onClick={() => setHours(!hours)}
          className='px-5 py-2 my-4 text-white bg-black rounded-lg '>
          Add Working Hours
        </button>
      </div>
      <div className='flex w-[90%]'>
        {hours && (
          <div>
            <Hours bb3zz />
          </div>
        )}
      </div>
      <div className='flex w-[90%] '>
        <button className='w-full px-5 py-2 my-4 text-white bg-black rounded-lg '>
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default BarberProfile
