import StarIcon from '../assets/img/Star.png'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const BarberCard = ({ barber }) => {
  const { _id, images, shop_name, customers, badge, shop_address, reviews, price} = barber;
  return (
    <div className='p-3 lg:p-5 flex items-center justify-center shadow-card'>
      <div
        className='md:min-w-[300px]'
        data-aos='zoom-in'
        data-aos-duration='750'
        data-aos-delay='500'
      >
        <div className=' h-auto w-full flex items-center justify-center lg:justify-center md:justify-center'>
          <img src={images} alt={shop_name} className='w-[300px]   rounded-lg ' />
        </div>
        <h2 className='text-[18px] leading-[30px]  lg:text-[26px] lg:leading-8 text-headingColor font-[700] mt-2 '>
          {shop_name}
        </h2>
        <div className='mt-1 flex lg:mt-2 items-center justify-between'>
          <span className='bg-red-300 text-red-700 py-1 px-3 lg:py-1 lg:px-6 text-[12px] rounded leading-4 lg:text-[16px] lg:leading-7 font-semibold '>
            {badge}
          </span>
          <div className='flex items-center gap-[6px]'>
            <span
              className='flex items gap-[6px]
              text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor
              '>
              <img src={StarIcon} alt='' className='w-[20px] h-[20px] mt-1' />
              {price}
            </span>
            <span
              className='flex items gap-[6px]
              text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor
              '>
              ({price})
            </span>
          </div>
        </div>

        <div className='flex w-full mt-[12px] lg:mt-3  items-center justify-between  '>
          <div>
            <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor my-2 '>
              {customers}
            </h3>
            <p className='text-[14px] text-textColor leading-6 font-[400] '>
              At {shop_address}
            </p>
          </div>
          <Link
            to={`/barber/${_id}`}
            className='w-[45px] h-[45px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none  '>
            <BsArrowRight className='group-hover:text-white w-6 h-5' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BarberCard
