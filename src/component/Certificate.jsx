import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import ES6Certificate from "../assets/Certificate/es6.png";
import ReactCertificate from "../assets/Certificate/react.png";
import ReactHookCertificate from "../assets/Certificate/reacthook.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Certificate = () => {
  return (
    <section
      className="h-screen flex justify-center items-center"
      id="Certificate"
    >
      <div className="w-full">
      <h2 className="text-2xl text-center mb-10">Certificate</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={ES6Certificate} alt="ES6Certigicate" />,
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactCertificate} alt="ReactCertificate" />,
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactHookCertificate} alt="ReactHookCertificate" />,
        </SwiperSlide>
      </Swiper>
        
      </div>
      
    </section>
  );
};

export default Certificate;
