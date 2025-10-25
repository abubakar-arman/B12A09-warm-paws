// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import pet1 from '../assets/pet1.jpg'
import pet2 from '../assets/pet2.jpg'
import pet3 from '../assets/pet3.jpg'
import pet4 from '../assets/pet4.jpg'

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{delay: 3000}}
      loop={true}
      className='lg:h-[600px]'
    >
      <SwiperSlide><img src={pet1} alt="" className='object-cover w-full h-full' /></SwiperSlide>
      <SwiperSlide><img src={pet2} alt="" className='object-cover w-full h-full' /></SwiperSlide>
      <SwiperSlide><img src={pet3} alt="" className='object-cover w-full h-full' /></SwiperSlide>
      <SwiperSlide><img src={pet4} alt="" className='object-cover w-full h-full' /></SwiperSlide>
    </Swiper>
  );
};

export default Hero;