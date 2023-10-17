import formatDate from "../utils/formatDate";
const BarbersAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 '>
          About
          <span className='text-headingColor font-semibold text-[24px] leading-9 '>
            Ryan Scott
          </span>
        </h3>
        <p className='text-para  '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          atque magnam quibusdam iusto maxime cumque corporis unde voluptate
          nobis, natus ipsam perspiciatis assumenda deserunt iste labore iure
          neque aspernatur cupiditate!
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>
          Qualifications
        </h3>
        <ul className='pt-4 md:p-5 '>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
            <div
              className='
                '>
              <span className='text-headingColor text-[15px] leading-6 font-semibold '>
                {formatDate("04-04-2017")} - {formatDate("06-04-2017")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor '>
                Barber Award
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Barber Award Name
            </p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] '>
            <div
              className='
                '>
              <span className='text-headingColor text-[15px] leading-6 font-semibold '>
                {formatDate("12-04-2017")} - {formatDate("08-04-2018")}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor '>
                Barber Award
              </p>
            </div>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Barber Award Name
            </p>
          </li>
        </ul>
      </div>
      <div className='mt-'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold '>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 '>
          <li className='p-4 rounded bg-green-300 '>
            <span className='text-green-700 leading-6 font-semibold text-[15px] '>
              {formatDate("07-04-2019")} - {formatDate("07-04-2020")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Barber Title
            </p>
            <p className='text-[16px] leading-6 font-medium text-textColor '>
              Atlanta Georgia
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BarbersAbout;
