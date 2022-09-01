import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Venders from "../components/Venders";

const HeroCarosouse = dynamic(() => import("../components/HeroCarosouse"), {
  ssr: false,
});

const PromotionCarosouse = dynamic(() => import("../components/Promotion"), {
  ssr: false,
});

const ReviewCarosouse = dynamic(() => import("../components/ReviewCard"), {
  ssr: false,
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {


  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale, scroll: false });
  };


  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Velaa Sindhorn Village Langsuan</title>
        <meta name="Description" content='Velaa Sindhorn Village Langsuan' />
        <meta name="Keywords" content='ดิโอลด์,ห้างสรรพสินค้า,theoldsiam,ลานมิ่งเมือง,ลานเฟื่องนคร,แหล่งอาหารอร่อยใจกลางกรุง,ห้างติดคลองถม,อมร,ห้างสรรพสินค้าย่านเยาวราช,ผ้าไหม,ผ้าไหมไทย,ขนมไทย ,ขนมไทยอร่อย ,ผ้าไหมสวย,เครื่องประดับ,เพชร ,ทอง,เงิน' />
        <meta name="Copyright" content='Velaa Sindhorn Village Langsuan' />

        <meta property="og:title" content='Velaa Sindhorn Village Langsuan' />
        <meta property="og:site_name" content='Velaa Sindhorn Village Langsuan' />
        <meta property="og:description" content='Velaa Sindhorn Village Langsuan' />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="domain.com" />
        <meta property="og:image" content="https://theoldsiam.co.th/images/about.jpg" />
        <meta property="og:locale" content="th_TH" />
        <meta name="author" content="Velaa Sindhorn Village Langsuan" />
        <meta name="stats-in-th" content="fdff" />


      </Head>

      <section id="navbar" className="w-full px-4 md:px-10 xxl:px-0 py-4 flex justify-center">
        <div className="max-w-7xl h-full flex justify-center items-center relative w-full ">

          <div className="relative w-52 sm:w-72 ">
            <Image
              src="/assets/VELAA_03-Black.gif"
              alt="logo"
              layout="responsive"
              width={100}
              height={30}
              objectFit="contain"
              className=""
            />
          </div>

          <div className="absolute  right-0 inline-flex">
            <div className="w-4 h-4 sm:w-6 sm:h-6 relative ">
              <Image
                src="/assets/translation.png"
                alt="flag"
                layout="fill"
                objectFit="contain"
              />

            </div>

            <select
              name="changeLocal"
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-black  bg-transparent  text-xs sm:text-sm "
            >
              <option className="mx-2" value="en">
                English
              </option>
              <option className="" value="th">
                ภาษาไทย
              </option>
            </select>
          </div>
        </div>

      </section>

      <section id="banner" className="w-full flex justify-center h-[75vh] mb-10 mt-4">
        <div className="max-w-7xl w-full h-full relative overflow-hidden">
          <HeroCarosouse />
        </div>

      </section>

      <section id="vender" className="w-full px-4 md:px-10 xxl:px-0 flex justify-center bg-[#F5F5F5] items-center py-10">
        <div className="max-w-7xl h-full flex flex-col justify-center  relative w-full gap-6">
          <Venders />

        </div>
      </section>

      <section id="promotion" className="w-full px-4 md:px-10 xxl:px-0 py-10 flex justify-center min-h-[500px]">
        <div className="max-w-7xl h-full flex flex-col justify-center items-center relative w-full gap-6">
          <div className="w-full flex justify-between">

            <div className="text-center md:text-left">
              <h1 className="font-bold text-2xl xs:text-4xl uppercase">PROMOTION & Event</h1>
              <p className="text-sm xs:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>


          </div>

          <PromotionCarosouse />
        </div>
      </section>

      <section id="gallery" className="w-full px-4 md:px-10 xxl:px-0  flex justify-center min-h-[750px] bg-[#F5F5F5]">
        <div className="grid grid-cols-2 w-full grid-rows-2">

          <div className="row-span-2 w-full h-full  relative">
            <Image
              src="/assets/gallery/18.webp"
              alt="gallery"
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>

          <div className="w-full h-full grid grid-cols-2">

            <div className="w-full relative h-full">
              <Image
                src="/assets/gallery/12.webp"
                alt="gallery"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
              />
            </div>

            <div className="w-full relative h-full">
              <Image
                src="/assets/gallery/01.webp"
                alt="gallery"
                layout="fill"
                objectFit="cover"
                objectPosition={"center"}
              />
            </div>

          </div>

          <div className="w-full relative h-full">
            <Image
              src="/assets/gallery/03.webp"
              alt="gallery"
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>

        </div>
      </section>

      <section id="contact" className="w-full px-4 md:px-10 xxl:px-0 flex justify-center min-h-[500px] h-full py-10  ">
        <div className="max-w-7xl w-full h-full  grid grid-cols-1  md:grid-cols-3 md:gap-x-6 gap-y-4">
          <div className="w-full h-full text-center flex flex-col gap-4 items-center ">
            <h1 className="font-bold text-2xl xs:text-4xl uppercase">GET IN TOUCH</h1>
            <p className="text-sm max-w-md">The 300-meter retail spaces along charismatic Langsuan Road in Sindhorn Village Project. It comprises of 27 retail shops and Villa Market. Adjacent to Lumpini Park and 600 meters from Childlom BTS Station.</p>

            <div className="hover:-translate-y-1 duration-500 cursor-pointer max-w-sm w-full h-fit  rounded-md shadow py-2 px-4 relative flex gap-6  items-center bg-white">
              <div className="w-12 h-12 rounded-md relative overflow-hidden drop-shadow bg-black flex-shrink-0 justify-center items-center flex">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48 8C32.52 8 20 20.52 20 36C20 57 48 88 48 88C48 88 76 57 76 36C76 20.52 63.48 8 48 8ZM48 46C42.48 46 38 41.52 38 36C38 30.48 42.48 26 48 26C53.52 26 58 30.48 58 36C58 41.52 53.52 46 48 46Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="p-2 ">

                <p className=" text-left text-sm">
                  87 Langsuan Road. Lumpini, Pathumwan Bangkok, Thailand 10330
                </p>
              </div>

            </div>

            <div className="hover:-translate-y-1 duration-500 cursor-pointer max-w-sm w-full h-fit  rounded-md shadow py-2 px-4 relative flex gap-6  items-center bg-white">
              <div className="w-12 h-12 rounded-md relative overflow-hidden drop-shadow bg-black flex-shrink-0 justify-center items-center flex">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.96 8C25.88 8 8 25.92 8 48C8 70.08 25.88 88 47.96 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 47.96 8ZM48 80C30.32 80 16 65.68 16 48C16 30.32 30.32 16 48 16C65.68 16 80 30.32 80 48C80 65.68 65.68 80 48 80Z"
                    fill="#FFF"
                  />
                  <path
                    d="M50 28H44V52L65 64.6L68 59.68L50 49V28Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="p-2 ">

                <p className="text-left text-sm">
                  Open daily

                </p>
                <p className="text-left text-sm">
                  07:00 AM. - 22:00 PM.

                </p>
              </div>

            </div>

            <div className="hover:-translate-y-1 duration-500 cursor-pointer max-w-sm w-full h-fit rounded-md shadow py-2 px-4 relative flex gap-6  items-center bg-white">
              <div className="w-12 h-12 rounded-md relative overflow-hidden drop-shadow bg-black flex-shrink-0 justify-center items-center flex">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.48 43.16C32.24 54.48 41.52 63.72 52.84 69.52L61.64 60.72C62.72 59.64 64.32 59.28 65.72 59.76C70.2 61.24 75.04 62.04 80 62.04C82.2 62.04 84 63.84 84 66.04V80C84 82.2 82.2 84 80 84C42.44 84 12 53.56 12 16C12 13.8 13.8 12 16 12H30C32.2 12 34 13.8 34 16C34 21 34.8 25.8 36.28 30.28C36.72 31.68 36.4 33.24 35.28 34.36L26.48 43.16Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="p-2 ">

                <p className="text-left text-sm">
                  02 253 8999
                </p>
              </div>

            </div>

            <div className="w-full  flex justify-center flex-col items-center gap-2 py-2">
              <p className=" text-sm ">More channels to follow us.</p>
              <div id="social" className="flex items-center gap-2  ">
                <Link href="https://www.instagram.com/velaalangsuan/">
                  <a target="_blank" rel="noopener noreferrer" aria-label="Instragram" className="text-black hover:text-white hover:scale-110 duration-300 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32.84 32.84"
                    >
                      <circle
                        id="Ellipse_9"
                        data-name="Ellipse 9"
                        cx="15.67"
                        cy="15.67"
                        r="15.67"
                        transform="translate(0.75 0.75)"
                        fill="white"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 32.84 32.84"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          fill="currentColor"
                          transform="translate(9 10)"
                        />
                      </svg>
                    </svg>
                  </a>
                </Link>

                <Link href="https://www.facebook.com/VelaaSindhornVillageLangsuan/">
                  <a target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-black hover:text-white hover:scale-110 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32.84 32.84"
                      className="cursor-pointer"
                    >
                      <circle
                        id="Ellipse_9"
                        data-name="Ellipse 9"
                        cx="15.67"
                        cy="15.67"
                        r="15.67"
                        transform="translate(0.75 0.75)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Path_548020"
                        data-name="Path 548020"
                        d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                        transform="translate(-71.834 -38.578)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Link>

                <Link href={"https://www.youtube.com/channel/UCTACNzlJexyjTD1s5H22Hwg"}>
                  <a

                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Youtube"
                    className="text-black hover:text-white hover:scale-110 duration-300"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32.84 32.84">
                      <circle id="Ellipse_8" data-name="Ellipse 8" cx="15.67" cy="15.67" r="15.67" transform="translate(0.75 0.75)" fill="none"
                        stroke="#000"
                        strokeWidth="1.5" />
                      <path id="Path_548019" data-name="Path 548019" d="M130.083,60.409h0c-.039,0-3.858-.028-5.015-.157-.062-.014-.138-.025-.225-.037a2.076,2.076,0,0,1-1.411-.666,3.931,3.931,0,0,1-.575-1.619,26.408,26.408,0,0,1-.157-2.637V54.066c0-1.314.157-2.649.157-2.664a3.569,3.569,0,0,1,.582-1.616,2.011,2.011,0,0,1,1.432-.674h.041c2.041-.16,5.141-.188,5.171-.188s3.134.028,5.171.184h.07a1.878,1.878,0,0,1,1.411.672,3.929,3.929,0,0,1,.586,1.618c0,.015.156,1.348.156,2.664v1.227c0,1.288-.156,2.624-.156,2.636a3.952,3.952,0,0,1-.586,1.619,2.015,2.015,0,0,1-1.433.674h-.04c-2.048.189-5.148.191-5.179.191M128.3,52.03V57.7l4.837-2.772Z" transform="translate(-113.917 -38.578)" fill="currentColor" />
                    </svg>
                  </a>
                </Link>


                <Link href="https://page.line.me/ewb3453i?openQrModal=true">
                  <a target="_blank" rel="noopener noreferrer" aria-label="line" className="text-black hover:text-white hover:scale-110 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 33.492 33.499"
                      className="cursor-pointer"
                    >
                      <path
                        id="Path_548021"
                        data-name="Path 548021"
                        d="M214.5,70.99h0a16,16,0,1,1,16-16,16.2,16.2,0,0,1-6.251,12.693,30.624,30.624,0,0,1-4.459,2.436A26.441,26.441,0,0,1,214.5,71"
                        transform="translate(-197.758 -38.248)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Path_548022"
                        data-name="Path 548022"
                        d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                        transform="translate(-197.758 -38.248)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Link>


                <a
                  href="mailto:velaalangsuan@sindhornvillage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="text-black hover:text-white hover:scale-110 duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 34.408 32.84"
                  >
                    <ellipse
                      id="Ellipse_7"
                      data-name="Ellipse 7"
                      cx="16.454"
                      cy="15.67"
                      rx="16.454"
                      ry="15.67"
                      transform="translate(0.75 0.75)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <path

                      id="Path_548016"
                      data-name="Path 548016"
                      d="M167.931,59.178a2.076,2.076,0,0,1-1.165-.358l.4-.441,3.771-4.09,1.423.969.068.023h.183l.047-.023,1.434-.975,3.761,4.084.4.431a2.175,2.175,0,0,1-1.225.377H167.94Zm-1.567-.775h0a2.434,2.434,0,0,1-.416-1.4v-4.69a2.513,2.513,0,0,1,.314-1.223l.47.326,3.714,2.536-3.683,4.013-.4.434Zm12.3,0h0l-.4-.439-3.676-4.021L178.3,51.42l.478-.326a2.4,2.4,0,0,1,.294,1.229v4.684a2.305,2.305,0,0,1-.4,1.393Zm-6.18-3.761h0l-1.41-.959a.294.294,0,0,0-.1-.064l-3.857-2.633-.507-.346a2.007,2.007,0,0,1,1.3-.486h9.136a2.149,2.149,0,0,1,1.349.486l-.511.349-5.4,3.648Z"
                      transform="translate(-155.217 -38.578)"
                      fill="currentColor"
                    />
                  </svg>
                </a>


              </div>

            </div>
          </div>

          <div className="col-span-2  w-full min-h-[450px] relative">
            <iframe title="Velaa Sindhorn Village Langsuan" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.266038936018!2d100.54276545517328!3d13.736747267120448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f20ca76b90f%3A0x958d6748e59fc5f3!2z4LmA4Lin4Lil4Liy!5e0!3m2!1sth!2sth!4v1661940273084!5m2!1sth!2sth" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </section>

      <section id="review" className="w-full px-4 md:px-10 xxl:px-0 flex justify-center items-center min-h-[350px]  bg-[#F5F5F5] py-10">
        <div className="max-w-7xl h-full flex flex-col justify-center items-center relative w-full gap-6 ">
          {/* <div className="w-full flex justify-center">
            <div className="text-center">
              <h1 className="font-bold text-2xl xs:text-4xl uppercase">REVIEW</h1>
              <p className="text-sm xs:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div> */}

          <ReviewCarosouse />



        </div>
      </section>


      <section id="footer" className="w-full px-4 md:px-10 xxl:px-0 py-4 flex justify-center items-center bg-black h-fit min-h-[64px] ">
        <div className="max-w-7xl w-full h-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-2">

          <p className="text-white text-xs  md:text-sm text-center ">© 2022 , <Link href={"https://siamsindhorn.com/"}><a target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer">Siam Sindhorn</a></Link>  Co.,Ltd. All Rights Reserved.</p>

          <div className="flex gap-4 text-white text-xs md:text-sm divide-x-2 divide-white">
            <p>Scroll To Top</p>
            <p className="pl-3">Privacy Policy</p>
            <p className="pl-3">Cookies Consent</p>
          </div>
        </div>

      </section>
    </>
  )
}
