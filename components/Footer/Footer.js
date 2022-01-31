import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "../../node_modules/swiper/swiper.min.css";
import "swiper/css/bundle";

import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

import Image from "next/image";

import slide1 from "../../public/images/slider/1.png";
import slide2 from "../../public/images/slider/2.png";
import slide3 from "../../public/images/slider/3.png";
import slide4 from "../../public/images/slider/4.png";
import slide5 from "../../public/images/slider/5.png";

function Footer() {

  return (
    <div className="footer flex flex-col lg:flex-row items-center">
      <div className="bg-[#0065DB] w-full lg:w-1/4 text-center py-8 text-xl rounded-tr-xl z-10 hover:cursor-pointer transition-all duration-300">
        <h3 className="font-bold text-white uppercase">More than 100 brands</h3>
      </div>
      <div className="w-full lg:w-3/4 px-4">
        <Swiper
          slidesPerView={5}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
          autoHeight="off"
          loop={true}
          rewind={true}
          height={80}
          breakpoints={{
            0: {
              slidesPerView:1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20
            }

          }}
        >
          <SwiperSlide>
            <Image src={slide1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide5} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Footer;
