
const Input = ({ id, onChange, value, label, type,  }) => {
  return (
    <div className='relative w-full'>
      <input
        type={type}
        onChange={onChange}
        value={value}
        id={id}
        className={`
      block
      rounded-md
      px-6
      pt-6
       pb-3
      w-full
      text-md
      text-black
      bg-transparent
      border
      focus:outline-none
      appearance-none
      focus:ring-0
      
      peer
      `}
        placeholder=' '
      />

      <label
        className='
      absolute
      text-md
      text-black
      bg-white
      px-2
      duration-150
      transform
      -translate-y-3
      scale-75
      top-4
      z-10
      origin-[0]
      left-6
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-placeholder-shown:bg-white
      peer-placeholder-shown:px-2
      peer-focus:scale-110
      peer-focus:-translate-y-7
      '
        htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
