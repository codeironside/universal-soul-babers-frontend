import { SectionHeader, BarberCard } from "../components";
import {barbers} from '../data' 

const BarberList = () => {
  return (
    <>
      <SectionHeader title='Featured Barbers' subTitle='Top Rated Barbers' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[20px] lg:mt-[55px]'>
        {barbers.map((barber) => {
          
          return (
        <BarberCard key={barber.id} barber={barber} />
          )
        })}
      </div>
    </>
  );
};

export default BarberList;
