import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
import "swiper/css";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
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
