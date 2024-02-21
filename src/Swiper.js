import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="swiper__inner">
          <img src="img/slider.svg" alt="Swiper" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__inner">
          <img src="img/slider.svg" alt="Swiper" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__inner">
          <img src="img/slider.svg" alt="Swiper" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
