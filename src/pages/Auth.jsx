import { Form, Input } from "../components";
import { useState } from "react";


const Auth = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  return (
    <>
      <section className='container mx-auto h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center '>
        <div
          className='col-span-2  h-full
      '>
          <img src='' alt='' />
        </div>
        <div className='col-span-1  h-full flex flex-col gap-6 '>
          <Input
            label='Username'
            onChange={(e) => setName(e.target.value)}
            id='name'
            type='text'
            value={name}
          />
          <Input
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            type='text'
            value={email}
          />
          {/* <Form /> */}
        </div>
      </section>
    </>
  );
}

export default Auth