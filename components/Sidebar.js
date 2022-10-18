import React, { useState, useEffect } from "react";
import Image from "next/image"
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const menu = [
    { name: "Overview", href: "/" }, { name: "Venders", href: "/venders" }, { name: "Header Carousel", href: "/headercarousel" }, { name: "Event", href: "/event" }, { name: "Gallery", href: "/gallery" }, { name: "Review", href: "/review" }, { name: "Contact", href: "/contact" }, { name: "Account", href: "/account" }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {

    const router = useRouter();
    const cookieToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState(null)

    const getProfile = async () => {

        try {
            const res = await axios.get(`http://localhost:4500/auth/profile`,
                { headers: { "Authorization": `Bearer ${cookieToken}` }, withCredentials: true }
            )

            let id = res.data.payload.user.id

            const result = await axios.get(`http://localhost:4500/users/${id}`,
                { headers: { "Authorization": `Bearer ${cookieToken}` }, withCredentials: true }
            )

            setUserInfo(result.data)
            setError("")

        } catch (e) {
            console.log(e)

        }
    }

    const logOut = () => {
        localStorage.removeItem("token");
        router.push("/login")
    }

    useEffect(() => {
        if (userInfo == null) {
            getProfile()
        }
    }, [])


    return (
        <>
            <div className="fixed  w-72 min-h-screen h-full bg-black left-0 p-10 flex flex-col justify-between md:translate-x-0 -translate-x-72">
                <div>

                    <div className="w-full h-16 relative">
                        <Image
                            src={"/assets/veela-logo.png"}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                            objectPosition={"center"}
                        />
                    </div>

                    <p className="mt-8 mb-2 uppercase text-[#4B4D4F] text-xs">menu</p>

                    <div className="divide-y divide-[#818384] divide-opacity-25 flex flex-col  ">

                        {menu.map((item, index) => (

                            <Link key={index} href={item.href}>

                                <button className={classNames(router.pathname === item.href ? "text-white bg-[#323435]" : "text-[#818384]", "hover:text-white hover:bg-[#323435] p-3 shadow-md rounded-lg inline-flex gap-4 font-light")}>

                                    <span className={classNames(item.name == "Overview" ? "block" : "hidden")}>
                                        <svg className="w-6 h-6 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                        </svg>
                                    </span>


                                    <span className={classNames(item.name == "Venders" ? "block" : "hidden")}>
                                        <svg className="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>

                                    <span className={classNames(item.name == "Header Carousel" ? "block" : "hidden")}>

                                        <svg className="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                                        </svg>

                                    </span>


                                    <span className={classNames(item.name == "Event" ? "block" : "hidden")}>
                                        <svg className="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>


                                    <span className={classNames(item.name == "Gallery" ? "block" : "hidden")}>
                                        <svg className="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3334 12.3333V2.33329C17.3334 1.41663 16.5834 0.666626 15.6667 0.666626H5.66669C4.75002 0.666626 4.00002 1.41663 4.00002 2.33329V12.3333C4.00002 13.25 4.75002 14 5.66669 14H15.6667C16.5834 14 17.3334 13.25 17.3334 12.3333ZM8.16669 8.99996L9.85835 11.2583L12.3334 8.16663L15.6667 12.3333H5.66669L8.16669 8.99996ZM0.666687 3.99996V15.6666C0.666687 16.5833 1.41669 17.3333 2.33335 17.3333H14V15.6666H2.33335V3.99996H0.666687Z" fill="currentColor" />
                                        </svg>

                                    </span>





                                    <span className={classNames(item.name == "Review" ? "block" : "hidden")}>
                                        <svg className="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.99163 0.666626C4.39163 0.666626 0.666626 4.39996 0.666626 8.99996C0.666626 13.6 4.39163 17.3333 8.99163 17.3333C13.6 17.3333 17.3333 13.6 17.3333 8.99996C17.3333 4.39996 13.6 0.666626 8.99163 0.666626ZM12.525 14L8.99996 11.875L5.47496 14L6.40829 9.99163L3.29996 7.29996L7.39996 6.94996L8.99996 3.16663L10.6 6.94163L14.7 7.29163L11.5916 9.98329L12.525 14Z" fill="currentColor" />
                                        </svg>

                                    </span>

                                    <span className={classNames(item.name == "Contact" ? "block" : "hidden")}>
                                        <svg className="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75" width="24" height="24" viewBox="0 0 56 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28 0C12.52 0 0 12.52 0 28C0 49 28 80 28 80C28 80 56 49 56 28C56 12.52 43.48 0 28 0ZM28 38C22.48 38 18 33.52 18 28C18 22.48 22.48 18 28 18C33.52 18 38 22.48 38 28C38 33.52 33.52 38 28 38Z" fill="currentColor" />
                                        </svg>
                                    </span>

                                    <span className={classNames(item.name == "Account" ? "block" : "hidden")}>
                                        <svg className="w-6 h-6  flex-shrink-0 group-hover:text-gray-900 transition duration-75" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,15a7,7,0,0,1-5.19-2.32,2.71,2.71,0,0,1,1.7-1,13.11,13.11,0,0,0,1.29-.28,2.32,2.32,0,0,0,.94-.34,1.17,1.17,0,0,0-.27-.7h0A3.61,3.61,0,0,1,5.15,7.49,3.18,3.18,0,0,1,8,4.07a3.18,3.18,0,0,1,2.86,3.42,3.6,3.6,0,0,1-1.32,2.88h0a1.13,1.13,0,0,0-.27.69,2.68,2.68,0,0,0,.93.31,10.81,10.81,0,0,0,1.28.23,2.63,2.63,0,0,1,1.78,1A7,7,0,0,1,8,15Z" fill="currentColor" />
                                        </svg>
                                    </span>


                                    {item.name}

                                </button>
                            </Link>

                        ))}
                    </div>

                </div>

                <div className="w-full  relative flex flex-col gap-4 ">
                    <p className=" uppercase text-[#4B4D4F] text-xs">profile</p>

                    <div className="flex gap-4 items-center mb-4" >
                        <div className="w-16 h-16  rounded-full relative overflow-hidden">
                            {userInfo && userInfo?.profileImg != '' ?
                                <Image
                                    priority
                                    src={`http://localhost:4500${userInfo.profileImg}`}
                                    alt="profile"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition={"center"} /> :
                                <Image
                                    priority
                                    src="/assets/review1.png"
                                    alt="profile"
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition={"center"} />
                            }



                        </div>

                        <div className="text-white text-sm">
                            <p>{userInfo?.firstName + " " + userInfo?.lastName.substring(0, 4).concat('...')}</p>
                            <p>{userInfo?.role ? "Admin" : "User"}</p>
                            <p className="text-xs mt-2 text-[#818384]">Edit profile</p>
                        </div>

                    </div>

                    <button onClick={logOut} className="bg-[#323435] text-white px-4 py-3 text-sm shadow-md rounded-lg flex items-center text-center gap-6">
                        <span>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1667 3.83333L11.9917 5.00833L14.1417 7.16667H5.66675V8.83333H14.1417L11.9917 10.9833L13.1667 12.1667L17.3334 8L13.1667 3.83333ZM2.33341 2.16667H9.00008V0.5H2.33341C1.41675 0.5 0.666748 1.25 0.666748 2.16667V13.8333C0.666748 14.75 1.41675 15.5 2.33341 15.5H9.00008V13.8333H2.33341V2.16667Z" fill="currentColor" />
                            </svg>

                        </span>

                        Log out

                    </button>

                </div>




            </div>
        </>
    )
}

export default Sidebar