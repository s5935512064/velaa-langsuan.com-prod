import React, { useEffect, useState } from 'react'
import Image from "next/image"

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center bg-[url('/assets/08.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-black/50 px-4 md:px-8 xxl:px-0">
                <div className="h-fit max-w-xl w-full bg-white   rounded-2xl shadow-md flex flex-col items-center py-10 px-5 ">
                    <div className="h-24 w-32 relative ">
                        <Image
                            src={"/assets/VELAA_03-Black.gif"}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                            objectPosition={"center"}
                        />

                    </div>

                    <h1 className="mt-4 text-xl font-bold uppercase text-center">Content Management System</h1>
                    <h1 className="text-center text-sm sm:text-base" >ระบบจัดการข้อมูลเว็บไซต์ @เวลาสินธรหลังสวน</h1>

                    <form className="max-w-sm w-full p-5 gap-4 flex-col flex ">
                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-3xl">
                            <svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_60_22)">
                                    <path d="M48 48C56.84 48 64 40.84 64 32C64 23.16 56.84 16 48 16C39.16 16 32 23.16 32 32C32 40.84 39.16 48 48 48ZM48 56C37.32 56 16 61.36 16 72V80H80V72C80 61.36 58.68 56 48 56Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_60_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" placeholder="Username" className="w-full outline-none border-none  placeholder:text-sm pl-1 " required />
                        </div>

                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-3xl">
                            <svg width="20" height="20" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_61_25)">
                                    <path d="M72 32H68V24C68 12.96 59.04 4 48 4C36.96 4 28 12.96 28 24V32H24C19.6 32 16 35.6 16 40V80C16 84.4 19.6 88 24 88H72C76.4 88 80 84.4 80 80V40C80 35.6 76.4 32 72 32ZM48 68C43.6 68 40 64.4 40 60C40 55.6 43.6 52 48 52C52.4 52 56 55.6 56 60C56 64.4 52.4 68 48 68ZM60.4 32H35.6V24C35.6 17.16 41.16 11.6 48 11.6C54.84 11.6 60.4 17.16 60.4 24V32Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_61_25">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />

                        </div>


                        <div>
                            <div className="text-sm text-slate-700 ml-2">
                                <input id="remember" type="checkbox" className="mr-2" />
                                <label htmlFor="remember">
                                    remember me
                                </label>
                            </div>
                        </div>



                        <div className="mt-2 flex w-full justify-around gap-3 relative">
                            <button type="submit" className="w-full px-6 py-2 text-white bg-black rounded-3xl border border-black">Login</button>
                            {/* <button type="submit" className="hover:bg-black hover:text-white duration-300 w-fit px-6 py-2 text-black bg-transparent border border-black rounded ">Sign up</button> */}
                        </div>

                        <p className="text-center text-sm text-slate-700 hover:text-black cursor-pointer">forgot your password ?</p>

                    </form>

                </div>


                <p className="text-center absolute bottom-10 text-white uppercase text-sm">development by IT Siam Sindhorn</p>

            </div>
        </>
    )
}

export default Signin