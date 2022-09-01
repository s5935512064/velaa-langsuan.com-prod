import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Promotion = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                // loopfilmdroupwithblank={true}
                speed={1500}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}

                className="!h-[28rem] w-full relative !py-5 !pb-10  "
            >
                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md ">

                    <div className="w-full h-full absolute bg-white/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">

                        <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-white text-black text-xs items-center rounded-3xl inline-flex shadow-md">

                            EXPLORE MORE

                            <i className="ml-2 ">
                                <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                                </svg>

                            </i></button>

                    </div>

                    <Image
                        src="/assets/news/1.jpg"
                        alt="typeroom"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"

                    />

                    {/* <div className="flex  justify-center flex-col px-4 bg-white  rounded-b-md bottom-0 absolute w-full h-2/6">
                        <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Diamond jewelry & Gold </span>
                        <span className="block text-gray-600 text-sm">65 units of the well-know center of jewelers selling precious gemstones, intricately crafted gold ornaments and other jewelry items.
                        </span>
                    </div> */}


                </SwiperSlide>
                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md">
                    <div className="w-full h-full absolute bg-white/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">

                        <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-white text-black text-xs items-center rounded-3xl inline-flex shadow-md">

                            EXPLORE MORE

                            <i className="ml-2 ">
                                <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                                </svg>

                            </i></button>

                    </div>



                    <Image
                        src="/assets/news/2.jpg"
                        alt="typeroom3"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />

                    {/* <div className="flex  justify-center flex-col px-4 bg-white  rounded-b-md bottom-0 absolute w-full h-2/6">
                        <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Thai Taste</span>
                        <span className="block text-gray-600 text-sm">Over 150 units This is also where visitors can find shops selling quality silk that carries the Royal Peacock seal of quality for Thai silk...
                        </span>
                    </div> */}


                </SwiperSlide>

                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md">
                    <div className="w-full h-full absolute bg-white/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">

                        <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-white text-black text-xs items-center rounded-3xl inline-flex shadow-md">

                            EXPLORE MORE

                            <i className="ml-2 ">
                                <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                                </svg>

                            </i></button>

                    </div>
                    <Image
                        priority
                        src="/assets/news/3.jpg"
                        alt="typeroom2"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />

                    {/* <div className="flex  justify-center flex-col px-4 bg-white  rounded-b-md bottom-0 absolute w-full h-2/6">
                        <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Silk & Lace</span>
                        <span className="block text-gray-600 text-sm">Over 150 units This is also where visitors can find shops selling quality silk that carries the Royal Peacock seal of quality for Thai silk...
                        </span>
                    </div> */}

                </SwiperSlide>


                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md">
                    <div className="w-full h-full absolute bg-white/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">

                        <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-white text-black text-xs items-center rounded-3xl inline-flex shadow-md">

                            EXPLORE MORE

                            <i className="ml-2 ">
                                <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                                </svg>

                            </i></button>

                    </div>
                    <Image
                        priority
                        src="/assets/news/4.jpg"
                        alt="typeroom2"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />

                    {/* <div className="flex  justify-center flex-col px-4 bg-white  rounded-b-md bottom-0 absolute w-full h-2/6">
                        <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Thai Massage & Spa</span>
                        <span className="block text-gray-600 text-sm">Over 150 units This is also where visitors can find shops selling quality silk that carries the Royal Peacock seal of quality for Thai silk...
                        </span>
                    </div> */}

                </SwiperSlide>


                <SwiperSlide className=" relative overflow-hidden rounded-md shadow-md">
                    <div className="w-full h-full absolute bg-white/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">

                        <button className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-white text-black text-xs items-center rounded-3xl inline-flex shadow-md">

                            EXPLORE MORE

                            <i className="ml-2 ">
                                <svg width="20" height="20" viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z" fill="currentColor" />
                                </svg>

                            </i></button>

                    </div>
                    <Image
                        priority
                        src="/assets/news/5.jpg"
                        alt="typeroom2"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />

                    {/* <div className="flex  justify-center flex-col px-4 bg-white  rounded-b-md bottom-0 absolute w-full h-2/6">
                        <span className="block text-lg text-[#0A3255] font-bold tracking-wide">Firearms & Equipment</span>
                        <span className="block text-gray-600 text-sm">Over 150 units This is also where visitors can find shops selling quality silk that carries the Royal Peacock seal of quality for Thai silk...
                        </span>
                    </div> */}

                </SwiperSlide>



            </Swiper>

        </>
    )
}

export default Promotion