import React, { useEffect, useState } from 'react';
import Input from './Input';
import Qualification from './Qualification';
import Experience from './Experience';
import Hours from './Hours';
import { buildApiEndpoint, getCookie, setCookie } from '../utils';
import axios from 'axios';

const BarberProfile = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhonenumber] = useState('');
  const [bio, setBio] = useState('');
  const [qualification, setQualification] = useState(false);
  const [experience, setExperience] = useState(false);
  const [hours, setHours] = useState(false);

  const user = JSON.parse(getCookie('user'));
  const token = getCookie('token');

  useEffect(() => {
    setFirstname(`${user.firstName} `);
    setLastname(`${user.lastName}`);
    setEmail(user.email);
    setBio(user.bio);
    setPhonenumber(user.phoneNumber);
  }, []);

  const userId = user._id;
  const updateProfile = async () => {
    try {
      const updateData = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        phoneNumber: phoneNumber,
        bio: bio,
      };

      const response = await axios.put(
        buildApiEndpoint(`/users/update/${userId}`),
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      setCookie('user', JSON.stringify(response.data));
    } catch (error) {
      console.log('Error updating profile', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-auto gap-5">
      <h1 className="text-headingColor font-[500] text-left leading-5">
        Profile Information
      </h1>
      <div className="flex w-[90%]">
        <Input
          label="First name"
          onChange={(e) => setFirstname(e.target.value)}
          id="firstname"
          type="text"
          value={firstname}
        />
      </div>
      <div className="flex w-[90%]">
        <Input
          label="Last name"
          onChange={(e) => setLastname(e.target.value)}
          id="lastname"
          type="text"
          value={lastname}
        />
      </div>
      <div className="flex w-[90%]">
        <Input
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          value={email}
        />
      </div>
      <div className="flex w-[90%]">
        <Input
          label="Phone number"
          onChange={(e) => setPhonenumber(e.target.value)}
          id="phoneNumber"
          type="phone"
          value={phoneNumber}
        />
      </div>
      <div className="flex w-[90%]">
        <textarea
          className="w-full px-4 py-3 border border-solid rounded-md border-slate-300 focus:outline outline-primaryColor "
          rows="6"
          placeholder="Your Bio"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        ></textarea>
      </div>
      <div className="flex w-[90%] ">
        <button
          onClick={() => setQualification(!qualification)}
          className="px-5 py-2 my-4 text-white bg-black rounded-lg "
        >
          Add Qualifications
        </button>
      </div>
      <div className="flex w-[90%]">
        {qualification && (
          <div>
            <Qualification />
          </div>
        )}
      </div>
      <div className="flex w-[90%] ">
        <button
          onClick={() => setExperience(!experience)}
          className="px-5 py-2 my-4 text-white bg-black rounded-lg "
        >
          Add Experience
        </button>
      </div>
      <div className="flex w-[90%]">
        {experience && (
          <div>
            <Experience />
          </div>
        )}
      </div>
      <div className="flex w-[90%] ">
        <button
          onClick={() => setHours(!hours)}
          className="px-5 py-2 my-4 text-white bg-black rounded-lg "
        >
          Add Working Hours
        </button>
      </div>
      <div className="flex w-[90%]">
        {hours && (
          <div>
            <Hours bb3zz />
          </div>
        )}
      </div>
      <div className="flex w-[90%] ">
        <button
          className="w-full px-5 py-2 my-4 text-white bg-black rounded-lg "
          onClick={updateProfile}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default BarberProfile;
