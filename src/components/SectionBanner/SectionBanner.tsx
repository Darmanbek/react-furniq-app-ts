import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { GooglePlay } from "@/assets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sectionBanner.scss";

const SectionBanner: React.FC = () => {
    return (
        <div className="section-banner">
            <div className="container">
                <div className="banner-inner">
                    <Swiper
                        centeredSlides
                        loop
                        autoplay={{
                            disableOnInteraction: false,
                            delay: 3000,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="banner"
                    >
                        {[...Array(10)].map((_, index) => (
                            <SwiperSlide key={index} className="banner__slide">
                                <img
                                    src={GooglePlay}
                                    alt="logo"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SectionBanner;
