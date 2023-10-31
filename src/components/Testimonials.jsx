import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import {HiStar} from 'react-icons/hi'
import {testimonials} from "../data";
import SectionHeader from './SectionHeader'
import 'swiper/swiper-bundle.css'
import "swiper/css/pagination";


const Testimonials = () => {
  return (
    <>
      <SectionHeader title='Testimonials' subTitle='Our Client Reviews'/>
      <div className="mt-[10px] lg:mt-[20px]">
        <Swiper modules={{Pagination}}

                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  clickable: true
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  760: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }}
        >
          {
            testimonials.map((testimonial) => {
              const {id, name, img, review} = testimonial
              return (
                <SwiperSlide key={id}>
                  <div className='px-5 py-[30px] rounded-[13px]'>
                    <div className='flex items-center gap-[13px]'>
                      <img src={img} alt=''/>
                      <div
                        className='
                     '>
                        <h4 className='font-semibold  text-[18px] leading-[30px] text-headingColor '>
                          {name}
                        </h4>
                        <div className='flex items-center gap-[3px] '>
                          <HiStar className='text-yellowColor w-[18px] h-5 '/>
                          <HiStar className='text-yellowColor w-[18px] h-5 '/>
                          <HiStar className='text-yellowColor w-[18px] h-5 '/>
                          <HiStar className='text-yellowColor w-[18px] h-5 '/>
                          <HiStar className='text-yellowColor w-[18px] h-5 '/>
                        </div>
                      </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400] '>
                      {review}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </div>
    </>
  )
}

export default Testimonials