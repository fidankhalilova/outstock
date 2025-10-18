import React from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import swiper from "../../ui/swiper";

const Sponsors = () => {
  return (
    <div className="flex justify-between gap-10 items-center my-30 container mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        loop={true}
        spaceBetween={50}
        slidesPerView={5}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image1_210x100.png?v=1613719814"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image2_210x100.png?v=1613719814"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image3_210x100.png?v=1613719814"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image4_210x100.png?v=1613719815"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image5_210x100.png?v=1613719815"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image1_210x100.png?v=1613719814"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image2_210x100.png?v=1613719814"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image3_210x100.png?v=1613719814"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image4_210x100.png?v=1613719815"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_image5_210x100.png?v=1613719815"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsors;
