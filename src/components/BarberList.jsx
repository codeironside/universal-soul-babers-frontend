import { SectionHeader, BarberCard } from "../components";
import {barbers} from '../data' 

const BarberList = () => {
  return (
    <>
      <SectionHeader title='Featured Barbers' subTitle='Top Rated Barbers' />
      <div className='flex flex-wrap gap-5 mt-[20px] lg:mt-[55px]'>
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
