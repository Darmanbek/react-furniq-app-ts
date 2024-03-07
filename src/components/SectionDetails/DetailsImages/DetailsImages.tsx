import React, { useState } from "react";
import { Autoplay, FreeMode, Grid, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NoImage, GooglePlay } from "@/assets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./detailsImages.scss";

const DetailsImages: React.FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    console.log(thumbsSwiper);

    return (
        <div className="details-images">
            <div className="images-swiper">
                <Swiper
                    centeredSlides
                    loop
                    thumbs={{ swiper: thumbsSwiper }}
                    autoplay={{
                        disableOnInteraction: false,
                        delay: 3000,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Thumbs]}
                    className="details-banner"
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide
                            key={index}
                            className="details-banner__slide"
                        >
                            <img src={NoImage} alt="logo" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="images-swiper-2">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    modules={[Grid, Thumbs]}
                    className="images-grid"
                >
                    {[...Array(8)].map((_, index) => (
                        <SwiperSlide key={index} className="images-grid__block">
                            <img src={NoImage} alt="logo" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <div className="images-grid">
                {[...Array(8)].map((_, index) => (
                    <SwiperSlide
                        onChange={(e) => console.log(e)}
                        onClick={(e) => console.log(e)}
                        key={index}
                        className="images-grid__block"
                    >
                        <img src={NoImage} alt="logo" />
                    </SwiperSlide>
                ))}
            </div> */}
            {/* <div className="images-grid">
                <button className="images-grid">
                    <img src={NoImage} alt="1" />
                </button>
                <button className="images-grid__block">
                    <img src={NoImage} alt="2" />
                </button>
                <button className="images-grid__block">
                    <img src={NoImage} alt="3" />
                </button>
                <button className="images-grid__block">
                    <img src={NoImage} alt="4" />
                </button>
                <button className="images-grid__block">
                    <img src={NoImage} alt="5" />
                </button>
                <button className="images-grid__block">
                    <img src={NoImage} alt="6" />
                </button>
                <button className="images-grid__block">
                    <img src={NoImage} alt="7" />
                </button>
                <button className="images-grid__block">
                    <img src={NoImage} alt="8" />
                </button>
                </div>*/}
        </div>
    );
};

export default DetailsImages;
