import { BarberCard, Testimonials } from "../components";
import { barbers } from "../data";
import { BallTriangle } from "react-loader-spinner";
import { BallTriangleAnim } from "./Home";
const Barbers = () => {
  return (
    <>
      <section className='bg-[#fff9ea] '>
        <div className='container text-center relative '>
          <BallTriangleAnim />
          <h2 className='heading'>Find A Barber</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto rounded-md flex items-center justify-between'>
            <input
              type='search'
              className='py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer border-3 border-slate-400'
              placeholder='Search for A Barber'
            />
            <button className='btn mt-0 rounded-r-md rounded-[0px]  '>
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {barbers.map((barber) => {
              return <BarberCard key={barber.id} barber={barber} />;
            })}
          </div>
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
    </>
  );
};

export default Barbers;
