const Button = ({ label, iconUrl }) => {
  return (
    <button
      className='flex justify-center items-center gap-2 px-7 
      bg-black
      rounded-full
      py-4 font-montserrat text-lg leading-none
     text-white'>
      {label}
      <img src={iconUrl} alt='button' className='ml-2 rounded-full w-5 h-5 text-black ' />
    </button>
  );
};

export default Button;
