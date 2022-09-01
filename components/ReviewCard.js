import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image'
import React, { useState, useEffect, useRef } from "react";

import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReviewCard = () => {
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

                modules={[Autoplay, Pagination, Navigation]}

                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}

                className="h-full w-full relative !py-5 !pb-10  "
            >
                <SwiperSlide className=" relative flex justify-center">

                    <div className="w-60 h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-center relative">

                        {/* <svg className="absolute top-10 left-14  transform -translate-x-10 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
</svg> */}

                        <div className="w-16 h-16 rounded-full bg-white -mt-16 relative overflow-hidden ">
                            <Image
                                src="/assets/review.webp"
                                alt="review"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                            />

                        </div>

                        <div className="inline-flex w-full justify-center  opacity-75 mt-4">
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>


                        <p className="text-sm opacity-75 text-center mt-2">สถานที่สวยงาม สะอาด ร้านอาหารดี คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน</p>

                        <p className="absolute bottom-2 right-5 opacity-50 text-sm italic"> Sp inggy</p>




                    </div>

                </SwiperSlide>

                <SwiperSlide className=" relative flex justify-center">

                    <div className="w-60 h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-center relative">

                        {/* <svg className="absolute top-10 left-14  transform -translate-x-10 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
</svg> */}

                        <div className="w-16 h-16 rounded-full bg-white -mt-16 relative overflow-hidden ">
                            <Image
                                src="/assets/review.webp"
                                alt="review"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                            />

                        </div>

                        <div className="inline-flex w-full justify-center  opacity-75 mt-4">
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>


                        <p className="text-sm opacity-75 text-center mt-2">สถานที่สวยงาม สะอาด ร้านอาหารดี คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน</p>

                        <p className="absolute bottom-2 right-5 opacity-50 text-sm italic"> Sp inggy</p>




                    </div>

                </SwiperSlide>

                <SwiperSlide className=" relative flex justify-center ">

                    <div className="w-60 h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-center relative">

                        {/* <svg className="absolute top-10 left-14  transform -translate-x-10 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
</svg> */}

                        <div className="w-16 h-16 rounded-full bg-white -mt-16 relative overflow-hidden ">
                            <Image
                                src="/assets/review.webp"
                                alt="review"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                            />

                        </div>

                        <div className="inline-flex w-full justify-center  opacity-75 mt-4">
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>


                        <p className="text-sm opacity-75 text-center mt-2">สถานที่สวยงาม สะอาด ร้านอาหารดี คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน</p>

                        <p className="absolute bottom-2 right-5 opacity-50 text-sm italic"> Sp inggy</p>




                    </div>

                </SwiperSlide>

                <SwiperSlide className=" relative flex justify-center">

                    <div className="w-60 h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-center relative">

                        {/* <svg className="absolute top-10 left-14  transform -translate-x-10 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
</svg> */}

                        <div className="w-16 h-16 rounded-full bg-white -mt-16 relative overflow-hidden ">
                            <Image
                                src="/assets/review.webp"
                                alt="review"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                            />

                        </div>

                        <div className="inline-flex w-full justify-center  opacity-75 mt-4">
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>


                        <p className="text-sm opacity-75 text-center mt-2">สถานที่สวยงาม สะอาด ร้านอาหารดี คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน</p>

                        <p className="absolute bottom-2 right-5 opacity-50 text-sm italic"> Sp inggy</p>




                    </div>

                </SwiperSlide>

                <SwiperSlide className=" relative flex justify-center">

                    <div className="w-60 h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-center relative">

                        {/* <svg className="absolute top-10 left-14  transform -translate-x-10 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
</svg> */}

                        <div className="w-16 h-16 rounded-full bg-white -mt-16 relative overflow-hidden ">
                            <Image
                                src="/assets/review.webp"
                                alt="review"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                            />

                        </div>

                        <div className="inline-flex w-full justify-center  opacity-75 mt-4">
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>


                        <p className="text-sm opacity-75 text-center mt-2">สถานที่สวยงาม สะอาด ร้านอาหารดี คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน</p>

                        <p className="absolute bottom-2 right-5 opacity-50 text-sm italic"> Sp inggy</p>




                    </div>

                </SwiperSlide>

                <SwiperSlide className=" relative flex justify-center">

                    <div className="w-60 h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-center relative">

                        {/* <svg className="absolute top-10 left-14  transform -translate-x-10 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
</svg> */}

                        <div className="w-16 h-16 rounded-full bg-white -mt-16 relative overflow-hidden ">
                            <Image
                                src="/assets/review.webp"
                                alt="review"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                            />

                        </div>

                        <div className="inline-flex w-full justify-center  opacity-75 mt-4">
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>


                        <p className="text-sm opacity-75 text-center mt-2">สถานที่สวยงาม สะอาด ร้านอาหารดี คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน</p>

                        <p className="absolute bottom-2 right-5 opacity-50 text-sm italic"> Sp inggy</p>




                    </div>

                </SwiperSlide>

                <SwiperSlide className=" relative flex justify-center">

                    <div className="w-60 h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-center relative">

                        {/* <svg className="absolute top-10 left-14  transform -translate-x-10 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
</svg> */}

                        <div className="w-16 h-16 rounded-full bg-white -mt-16 relative overflow-hidden ">
                            <Image
                                src="/assets/review.webp"
                                alt="review"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={"center"}
                            />

                        </div>

                        <div className="inline-flex w-full justify-center  opacity-75 mt-4">
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>


                        <p className="text-sm opacity-75 text-center mt-2">สถานที่สวยงาม สะอาด ร้านอาหารดี คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน</p>

                        <p className="absolute bottom-2 right-5 opacity-50 text-sm italic"> Sp inggy</p>




                    </div>

                </SwiperSlide>





            </Swiper>

        </>
    )
}

export default ReviewCard