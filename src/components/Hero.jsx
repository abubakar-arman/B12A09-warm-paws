// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const sliderImages = ['/slider/pet1.jpg', '/slider/pet2.jpg', '/slider/pet3.jpg', '/slider/pet4.jpg']

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
      {sliderImages.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt="" className='object-cover w-full h-full' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;