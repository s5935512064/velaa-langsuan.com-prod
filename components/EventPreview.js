import Link from "next/link";
import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

const EventPreview = ({ assets }) => {

    let [isOpen, setIsOpen] = useState(false)
    const [device, setDevice] = useState(assets.event_device)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {



        console.log({ assets, device })
    })



    return (
        <>
            <button
                onClick={openModal}
                className="hover:scale-110 duration-300" > <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor" />
                </svg>
            </button>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">

                        <div className="flex min-h-full items-center justify-center p-10 text-center">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                {device == "mobile" ?

                                    <Dialog.Panel className="transform  p-4 text-left align-middle transition-all max-w-md w-full  h-[55vh] sm:h-[65vh] lg:h-[80vh] relative ">

                                        {/* bg-[url('/assets/king2565/15027983_02.jpg')] lg:bg-[url('/assets/king2565/RAMABG.jpg')] bg-no-repeat bg-cover bg-top */}


                                        <Image
                                            src={`http://localhost:4500${assets.event_background}`}
                                            alt="background"
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition={"top"}
                                        />

                                        <div className="absolute bottom-0 h-1/2 bg-gradient-to-t from-white z-0 w-full left-0" />


                                        <div className=" absolute -top-7 -right-1">
                                            <button onClick={closeModal} className="z-50 border-none outline-none">
                                                <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                                </svg>
                                            </button>

                                        </div>

                                        <div className="w-full h-full relative">
                                            {/* <span className="sr-only border-img">class-border</span> */}

                                            {/* <div className="w-24 h-24 bg-[url('/assets/king2565/R10Sign.png')] bg-contain bg-no-repeat bg-right absolute top-0 right-0 lg:hidden" /> */}

                                            <div className="w-full h-full relative grid grid-cols-1 grid-rows-3  gap-3 ">

                                                {/* <div className="bg-[url('/assets/king2565/R10.png')] bg-no-repeat bg-contain  bg-center flex items-center justify-center h-full relative row-span-2 opacity-0">
                                                </div> */}

                                                <div className="h-full w-full relative justify-center grid grid-cols-1 justify-items-center  items-end gap-3  row-start-3 ">

                                                    {/* <div className="w-full max-h-[250px] h-full relative bg-[url('/assets/king2565/R10Sign.png')] bg-no-repeat bg-center bg-contain hidden lg:block  translate-y-8 xxl:translate-y-16 ">
                                                </div> */}


                                                    <div className="w-full h-full relative scale-110 -translate-y-6">
                                                        <Image
                                                            priority
                                                            src={`http://localhost:4500${assets.event_text}`}
                                                            alt="text"
                                                            layout="fill"
                                                            objectFit="contain"
                                                            objectPosition={"center"}

                                                        />
                                                    </div>

                                                </div>


                                            </div>
                                        </div>

                                    </Dialog.Panel> : <Dialog.Panel className="transform  p-4 text-left align-middle transition-all max-w-7xl w-full h-[80vh] relative ">

                                        <Image
                                            src={`http://localhost:4500${assets.event_background}`}
                                            alt="background"
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition={"top"}
                                        />


                                        <div className="absolute bottom-0 h-1/2 bg-gradient-to-t from-white z-0 w-full left-0" />



                                        <div className=" absolute -top-7 -right-1">
                                            <button onClick={closeModal} className="z-50 border-none outline-none">
                                                <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                                                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                                </svg>
                                            </button>

                                        </div>

                                        <div className="w-full h-full relative">
                                            {/* <span className="sr-only border-img">class-border</span> */}

                                            {/* <div className="w-24 h-24 bg-[url('/assets/king2565/R10Sign.png')] bg-contain bg-no-repeat bg-right absolute top-0 right-0 lg:hidden" /> */}

                                            <div className="w-full h-full relative grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-1 gap-3 mt-4 lg:mt-0">

                                                <div className="bg-[url('/assets/king2565/R10.png')] bg-no-repeat bg-contain  bg-center flex items-center justify-center h-full relative row-span-2 opacity-0">
                                                </div>

                                                <div className="h-full w-full relative justify-center grid grid-cols-1 justify-items-center lg:grid-rows-2 items-end gap-3 lg:-translate-x-8 ">

                                                    {/* <div className="w-full max-h-[250px] h-full relative bg-[url('/assets/king2565/R10Sign.png')] bg-no-repeat bg-center bg-contain hidden lg:block  translate-y-8 xxl:translate-y-16 ">
                                                </div> */}

                                                    <div className="w-full h-full relative scale-90 hidden lg:block translate-y-44 ">
                                                        <Image
                                                            priority
                                                            src="/assets/king2565/TEXT_Velaa.png"
                                                            alt="text"
                                                            layout="fill"
                                                            objectFit="contain"
                                                            objectPosition={"right"}

                                                        />
                                                    </div>

                                                    <div className="w-full h-full relative scale-110 -translate-y-6 lg:hidden">
                                                        <Image
                                                            priority
                                                            src="/assets/king2565/TEXT_Velaa.png"
                                                            alt="text"
                                                            layout="fill"
                                                            objectFit="contain"
                                                            objectPosition={"center"}

                                                        />
                                                    </div>

                                                </div>


                                            </div>
                                        </div>

                                    </Dialog.Panel>
                                }



                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default EventPreview;