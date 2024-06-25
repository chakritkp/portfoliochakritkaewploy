import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import ES6Certificate from "../assets/Certificate/es6.png";
import ReactCertificate from "../assets/Certificate/react.png";
import ReactHookCertificate from "../assets/Certificate/reacthook.png";
import JSD5Certificate from '../assets/Certificate/JSD5.png'
import Docker from '../assets/Certificate/docker.png'


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
      <h2 className="text-3xl text-center font-bold mb-10">Certificate</h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={JSD5Certificate} className="min-h-[180px] lg:h-[400px]" alt="JSD5Certificate" />,
        </SwiperSlide>
        <SwiperSlide>
          <img src={Docker} className="min-h-[180px] lg:h-[400px]" alt="Docker" />,
        </SwiperSlide>
        <SwiperSlide>
          <img src={ES6Certificate} className="min-h-[180px] lg:h-[400px]" alt="ES6Certigicate" />,
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactCertificate} className="min-h-[180px] lg:h-[400px]" alt="ReactCertificate" />,
        </SwiperSlide>
        <SwiperSlide>
          <img src={ReactHookCertificate} className="min-h-[180px] lg:h-[400px]" alt="ReactHookCertificate" />,
        </SwiperSlide>
      </Swiper>
        
      </div>
      
    </section>
  );
};

export default Certificate;
