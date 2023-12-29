import { SectionHeader, BarberCard } from "../components";
import {barbers} from '../data' 

const BarberList = ({ selectedBarbers }) => {
  return (
    <>
      <SectionHeader title='Featured Barbers' subTitle='Top Rated Barbers' />
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[20px] lg:mt-[55px]'>
        {selectedBarbers?.map((barber) => {
          
          return (
        <BarberCard key={barber._id} barber={barber} />
          )
        })}
      </div>
    </>
  );
};

export default BarberList;
