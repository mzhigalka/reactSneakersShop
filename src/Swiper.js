import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default ({ scrollTo }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="swiper__inner">
          <div className="swiper__inner-content">
            <h1>
              <span>Stan Smith</span>,
              <br /> Forever!
            </h1>
            <button onClick={scrollTo}>Купить</button>
          </div>
          <img src="img/slider.svg" alt="Swiper" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__inner">
          <div className="swiper__inner-content">
            <h1>
              <span>Stan Smith</span>,
              <br /> Forever!
            </h1>
            <button>Купить</button>
          </div>
          <img src="img/slider.svg" alt="Swiper" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper__inner">
          <div className="swiper__inner-content">
            <h1>
              <span>Stan Smith</span>,
              <br /> Forever!
            </h1>
            <button>Купить</button>
          </div>
          <img src="img/slider.svg" alt="Swiper" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
