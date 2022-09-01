import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const home = [
    { id: 1, src: "/assets/header/01.webp" },
    { id: 2, src: "/assets/header/02.webp" },
    { id: 3, src: "/assets/header/03.webp" },
    { id: 4, src: "/assets/header/04.webp" },
    { id: 5, src: "/assets/header/05.webp" },
    { id: 6, src: "/assets/header/06.webp" },
    { id: 7, src: "/assets/header/07.webp" },
    { id: 8, src: "/assets/header/08.webp" },
    { id: 9, src: "/assets/header/09.webp" },
    { id: 10, src: "/assets/header/10.webp" },
    { id: 11, src: "/assets/header/11.webp" },

]


const HeroCarosouse = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                effect={"fade"}
                loop={true}
                loopFillGroupWithBlank={true}
                speed={3000}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                modules={[Autoplay, EffectFade, Pagination, Navigation]}

                className="!h-full w-full relative  !pb-10"
            >

                {home.map((item, index) => (

                    <SwiperSlide key={index} className="w-full h-full relative overflow-hidden ">

                        <Image
                            src={item.src}
                            alt="hero"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                        />

                    </SwiperSlide>

                ))}


            </Swiper>
        </>
    )
}

export default HeroCarosouse