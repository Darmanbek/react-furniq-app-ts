import React, { useState } from "react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TImages } from "@/models";
import { ProductImage } from "@/widgets";
import "swiper/css";
import "swiper/css/navigation";
import "./detailsImages.scss";

interface DetailsImagesProps {
    detailsImages: TImages[];
}

const DetailsImages: React.FC<DetailsImagesProps> = ({ detailsImages }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className="details-images">
            <div className="images-swiper">
                <Swiper
                    centeredSlides
                    loop
                    spaceBetween={15}
                    thumbs={{ swiper: thumbsSwiper }}
                    autoplay={{
                        disableOnInteraction: false,
                        delay: 3000,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation, Thumbs]}
                    className="details-banner"
                >
                    { detailsImages.length > 0 ?
                    detailsImages.map((images, index) => (
                            <SwiperSlide
                                key={index}
                                className="details-banner__slide"
                            >
                                <ProductImage 
                                    image={images}
                                />
                            </SwiperSlide>
                    )) : [...Array(5)].map((_, index) => (
                        <SwiperSlide
                                key={index}
                                className="details-banner__slide"
                            >
                                <ProductImage 
                                    image={null}
                                />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            <div className="images-swiper-2">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    spaceBetween={15}
                    modules={[Thumbs]}
                    className="images-grid"
                >
                    { detailsImages.length > 0 ?
                     detailsImages.map((images, index) => (
                            <SwiperSlide
                                key={index}
                                className="images-grid__block"
                            >
                                <ProductImage 
                                image={images}
                                />
                            </SwiperSlide>
                        )) :
                        [...Array(5)].map((_, index) => (
                            <SwiperSlide
                                    key={index}
                                    className="images-grid__block"
                                >
                                    <ProductImage 
                                        image={null}
                                    />
                            </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default DetailsImages;
