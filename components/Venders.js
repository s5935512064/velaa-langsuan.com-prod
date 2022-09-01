import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import ShopCard from "./ShopCard";


const venders = [
    { id: 1, name: "EL GAUCHO ARGENTINIAN STEAKHOUSE", shopImg: "/assets/shoplogo/06.jpg", keyword: "EL GAUCHODinnerSteakArgentinianBeefWagyuAngusWineSaladเครื่องดื่มสเต๊กเนื้อวัวไวน์สลัดสปาเก็ตตี้" },
    { id: 2, name: "Izakaya Teppen BBQ&SUSHI", shopImg: "/assets/shoplogo/08.jpg", keyword: "TeppenIzakayaJapaneseLucnhdinnerBeerPartyปิ้งย่างอาหารญี่ปุ่นเนื้อวัวซูชิเบียร์เลี้ยงฉลอง" },
    { id: 3, name: "Hoppe Coffeehouse", shopImg: "/assets/shoplogo/09.jpg", keyword: "HoppecoffeehousecoffeelunchdinnerbeveragespaghettisteakSpicySaladไก่อบฮอปป์กาแฟร้านกาแฟยำเครื่องดื่มสปาเก็ตตี้" },
    { id: 4, name: "Co limited", shopImg: "/assets/shoplogo/11.jpg", keyword: "Co-limiteddinnersteakbeefSpicyต้มแซ่บอีสานสเต๊กเนื้อวัวส้มตำก๋วยเตี๋ยว" },
    { id: 5, name: "51' Avenue", shopImg: "/assets/shoplogo/10.jpg", keyword: "Englishtea51avenueicedteahotteacultureicecreamsconejammacaroonoysterchampagneอาหารขนมชาอังกฤษไอศครีมแชมเปญ" },
    { id: 6, name: "Peace Oriental Teahouse", shopImg: "/assets/shoplogo/12.jpg", keyword: "peaceteahousejapanaesematchaHoujichaCoffeemilkteateamochibeverageชาเขียวมัทฉะเครื่องดื่มชาโฮจิฉะโมจิกาแฟ" },
    { id: 7, name: "Rongsi Pochana", shopImg: "/assets/shoplogo/13.jpg", keyword: "โรงสีโภชนาอาหารจีนอาหารทะเลซีฟู้ดสดใหม่ไทยจีนขึ้นเหลาทะเลเผาข้าวต้มกุ๊ยเบียร์วุ้นRongsiPochanaSeafoodSpicysaladBoiledriceFishChineseCuisines" },
    { id: 8, name: "Maison Saigon", shopImg: "/assets/shoplogo/15.jpg", keyword: "MaisonSaigonvietnameserestaurantfoodvietnamSaigoneseNoodleBeefHealthyPhoOrganicออกานิคหมูยอเมซงไซ่ง่อนอาหารเวียดนามเฝอเต้าหู้อาหารสุขภาพกาแฟ" },
    { id: 9, name: "The Coffee Academics", shopImg: "/assets/shoplogo/16.jpg", keyword: "TheCoffeeAcademicsCoffeeshopCroissantBreakfastWineBeveragePizzaร้านกาแฟครัวซองอาหารเช้าเครื่องดื่มขนมปังไวน์สปาเก็ตตี้พิซซ่า" },
    { id: 10, name: "Crimson Room (Jazz Bar)", shopImg: "/assets/shoplogo/17.jpg", keyword: "Crimson Roomcocktailslivejazzmusicwinesparklingchampagnehangouthiddenbarแจ๊ซบาร์ลับค็อกเทลไวน์แชมเปญดนตรีสดเบียร์" },
    { id: 11, name: "Lim  Lao Ngow x Cloud Dragon", shopImg: "/assets/shoplogo/18.jpg", keyword: "eggnoodlefishballsbraisedabalonefishwontonเย็นตาโฟบะหมี่ต้มยำก๋วยเตี๋ยวลูกชิ้นปลาหมูสะเต๊ะ" },
    { id: 12, name: "Petits Plats - French Mediterranean Cuisine", shopImg: "/assets/shoplogo/04.jpg", keyword: "frenchmediterreancuisinepetitsplatsgrillseafoodwineอาหารฝรั่งเศสซีฟู้ดไวน์เมดิเตอร์เรเนียน" },
    { id: 13, name: "Vaso", shopImg: "/assets/shoplogo/07.jpg", keyword: "VasoSpanishTapasBarContemporaryCuisineMeatSrafoodEnsaladaCrudosร้านอาหารสเปนบาร์ไวน์ทาปาสบาร์ซีฟู้ดขนมชูโร" },
    { id: 14, name: "Quickie", shopImg: "/assets/shoplogo/19.jpg", keyword: "QuickieBurgerhamburgershopBeefMilkshakefriedchickenorganicPlantbasecแฮมเบอร์เกอร์ไก่ทอดมิลเชคออกานิคเฟรนส์ฟรายเนื้อ" },
    { id: 15, name: "Shabu Baru", shopImg: "/assets/shoplogo/05.jpg", keyword: "ShabuBaruSukiyakiUdonGomadareGyunikuWagyuKaniJapaneseHotpotเนื้อวากิวชาบูสุกี้ยากี้น้ำจิ้มงาคอมบุวากิวอุด้งญี่ปุ่น" },
    { id: 16, name: "Pizza Bar by Café Eiffel", shopImg: "/assets/shoplogo/14.jpg", keyword: "CaféEiffelPizzabarParmahamSeafoodPepperoniMargheritaSmokedSalmonTruffleFriedchickenbeerlagerพิซซ่าเบียร์พามาแฮมไก่ทอดเฟรนส์ฟรายซีฟู้ดแซลมอน" },
    { id: 17, name: "Pacamara coffee", shopImg: "/assets/shoplogo/01.jpg", keyword: "pacamaracoffeshopcroissantbreakfastdrinkbeverageพาคามาร่ากาแฟร้านกาแฟครัวซองอาหารเช้าเครื่องดื่มขนมปัง" },
    { id: 18, name: "Acai Story", shopImg: "/assets/shoplogo/02.jpg", keyword: "AcaiBerryAcaistoryhealthyhomemadeSmoothieBowlกราโนลาเนยถั่วอาซาอิเบอร์รี่ผลไม้อโวคาโดสุขภาพของกินเล่น" },
    { id: 19, name: "Kamui Hokkaido Eat & To Go", shopImg: "/assets/shoplogo/03.jpg", keyword: "KamuiHokkaidojapanesefoodrestaurantTonaktsucurryRiceButadonkatsujapanesecurryทงคัตสึแกงกะหรี่เทปปันอาหารญี่ปุ่นข้าวแกงกะหรี่ญี่ปุ่นหมูทอด" },
    { id: 20, name: "Skin Lab", shopImg: "/assets/shoplogo/20.jpg", keyword: "SkinLabSkincarecreamtreatmentspa massageZelensดูแลผิวพรรณทรีตเมนต์บริการสกินแคร์ครีมบำรุง" },
    { id: 21, name: "MYKITA", shopImg: "/assets/shoplogo/21.jpg", keyword: "MykitaofficialGlassesshopsMargielaSunglassesFashionerEyeStylistreLensแว่นตากันแดดล้างแว่นตาวัดสายตาประกอบแว่นเลนส์" },
    { id: 22, name: "NIC Nail Shop", shopImg: "/assets/shoplogo/23.jpg", keyword: "NailpolishNailsNailstyleGelColorGelsalonHandnailsร้านทำเล็บมือเท้าสีเจลทาเล็บขัดเท้า" },
    { id: 23, name: "HIVE Salon", shopImg: "/assets/shoplogo/22.jpg", keyword: "hivesalonhairstyleshaircuthaircolorhairstylistundercutkoreanhairstyleร้านทำผมทำสีผมตัดผมหญิงตัดผมชายทรีตเมนต์ผมสระผมดัดผม" },
    { id: 24, name: "Apex", shopImg: "/assets/shoplogo/24.jpg", keyword: "ApexSlimbeautyFitFermSixpackVanquishEmsculptSlimmingTreatmentWeightlossลดความอ้วนลดน้ำหนักความสวยงามทรีทเม้นท์กระชับผิวกระชับสัดส่วน" },
    { id: 25, name: "Villa Market", shopImg: "/assets/shoplogo/25.jpg", keyword: "VillaMarketSupermarketfreshfruitsveggiescheesesnackskitchenwareorganicbeefhealthywineวิลล่ามาร์เก็ตซูเปอร์มาร์เก็ตผักผลไม้ของสดขนมเครื่องครัวออกานิคชีสไวน์เนื้อ" },
    { id: 26, name: "Wash garage", shopImg: "/assets/shoplogo/26.jpg", keyword: "WashGarageCarCareบริการล้างสีดูดฝุ่นเคลือบสีขจัดคราบลบลอยเคลือบแก้วซักฟอกเบาะ" },
    // { id: 27, name: "Wash garage", shopImg: "/assets/shoplogo/coming.png", keyword: "" },
    // { id: 28, name: "Wash garage", shopImg: "/assets/shoplogo/coming.png", keyword: "" }

]

const Venders = () => {

    const [postsPerPage, setPostsPerPage] = useState(12);

    const indexOfLastPost = postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const [search, setNewSearch] = useState("");

    const filtered = !search
        ? venders
        : venders.filter(
            (shop) =>
                shop.keyword.toLowerCase().includes(search.toLowerCase()) ||
                shop.name.toLowerCase().includes(search.toLowerCase())
        );

    const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

    const Loadmore = () => {
        setPostsPerPage(postsPerPage + 6);
    };


    return (
        <>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-2xl xs:text-4xl uppercase">OUR venders</h1>
                    <p className="text-sm xs:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className=" w-full max-w-md md:max-w-xs">
                    <label htmlFor="search" className="sr-only">Search </label>
                    <form methode="get" action="#" className="relative z-50">
                        <button aria-label="search" type="submit" id="searchsubmit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <input type="text"
                            value={search}
                            onChange={(e) => setNewSearch(e.target.value)}
                            name="s"
                            id="s"
                            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white/75 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
                            placeholder="Search" />
                    </form>
                </div>
            </div>


            <div className="w-full grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6  gap-x-6 gap-y-4 justify-items-center">

                {currentPosts.map((item, index) => (

                    <ShopCard key={index} data={item} />

                ))}



            </div>

            <div className="w-full flex justify-center ">
                <button
                    onClick={Loadmore}
                    className="inline-flex px-4 py-2 gap-2 load-more "
                >
                    <svg
                        width={20}
                        height={20}
                        xmlns="http://w3.org/2000/svg"
                        viewBox="0 0 341.333 341.333"
                        fill="currentColor"
                    >
                        <path d="M341.227 149.333V0l-50.133 50.133C260.267 19.2 217.707 0 170.56 0 76.267 0 .107 76.373.107 170.667s76.16 170.667 170.453 170.667c79.467 0 146.027-54.4 164.907-128h-44.373c-17.6 49.707-64.747 85.333-120.533 85.333-70.72 0-128-57.28-128-128s57.28-128 128-128c35.307 0 66.987 14.72 90.133 37.867l-68.8 68.8h149.333z" />
                    </svg>{" "}
                    LOAD MORE
                </button>
            </div>

        </>
    )
}

export default Venders