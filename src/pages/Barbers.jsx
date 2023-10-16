import { BarberCard, Testimonials } from "../components";
import { barbers } from "../data";
const Barbers = () => {
  return (
    <>
      <section className='bg-[#fff9ea] '>
        <div className='container text-center'>
          <h2 className='heading'>Find A Barber</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input
              type='search'
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer '
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
          <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5 lg:gap-[30px] mt-[0px] lg:mt-[-38px]'>
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
