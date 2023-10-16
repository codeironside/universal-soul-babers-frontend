import React from 'react'

const SectionHeader = ({title, subTitle}) => {
  return (
    <>
      <div
        className='flex items-center flex-col gap-5 justify-center my-12  '
        data-aos='fade-up'
        data-aos-duration='1200'
        data-offset='300'
        data-aos-once='false'
        >
        <h1 className='text-[36px] lg:text-[45px] md:text-[50px] font-bold text-center'>
          {title}
        </h1>
        <p className='text-center mt-[-16px] '>{subTitle}</p>
        <span className='h-[3px] w-[100px] bg-black rounded-md mt-[-10px] '></span>
      </div>
    </>
  );
}

export default SectionHeader