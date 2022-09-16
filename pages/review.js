import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

const Review = () => {


    return (
        <Layout>
            <div className="md:ml-72 relative bg-[#F7F7F7] ">

                <Navbar title="Review Management" />
                <div className="px-4 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
                    <div className="w-full min-h-screen bg-white rounded-xl shadow p-5">


                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <div className="w-full flex justify-end">

                                        <Disclosure.Button className="bg-black text-white px-4 py-3 text-sm shadow-md rounded-lg inline-flex gap-2">
                                            <span>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.00008 0.666626C4.40008 0.666626 0.666748 4.39996 0.666748 8.99996C0.666748 13.6 4.40008 17.3333 9.00008 17.3333C13.6001 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6001 0.666626 9.00008 0.666626ZM13.1667 9.83329H9.83341V13.1666H8.16675V9.83329H4.83341V8.16663H8.16675V4.83329H9.83341V8.16663H13.1667V9.83329Z" fill="currentColor" />
                                                </svg>

                                            </span>
                                            New Review

                                        </Disclosure.Button>
                                    </div>

                                    <Disclosure.Panel className="pt-4 pb-2 ">

                                        <form className="w-full p-4 gap-4 flex-col flex items-center md:items-start ">

                                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-start">
                                                <div className="flex flex-col gap-4 justify-between">
                                                    <div className="flex flex-col gap-2">
                                                        <label className="text-sm ">Select Profile :</label>

                                                        <div className="flex flex-wrap gap-1">

                                                            <div className="w-16 h-16 rounded-full relative overflow-hidden">
                                                                <Image
                                                                    src={"/assets/review1.png"}
                                                                    alt="profile"
                                                                    layout="fill"
                                                                    objectFit="cover"
                                                                    objectPosition={"center"}
                                                                />
                                                            </div>
                                                            <div className="w-16 h-16 rounded-full relative overflow-hidden">
                                                                <Image
                                                                    src={"/assets/review1.png"}
                                                                    alt="profile"
                                                                    layout="fill"
                                                                    objectFit="cover"
                                                                    objectPosition={"center"}
                                                                />
                                                            </div>
                                                            <div className="w-16 h-16 rounded-full relative overflow-hidden">
                                                                <Image
                                                                    src={"/assets/review1.png"}
                                                                    alt="profile"
                                                                    layout="fill"
                                                                    objectFit="cover"
                                                                    objectPosition={"center"}
                                                                />
                                                            </div>
                                                        </div>



                                                    </div>

                                                    <div className="max-w-sm flex flex-col gap-2">
                                                        <label className="text-sm  shrink-0">Author by:</label>
                                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                            <input type="text" name="author" id="author" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-4 justify-between">
                                                    <div className="max-w-sm  flex flex-col  gap-2  h-full">
                                                        <label className="text-sm  shrink-0">Comment:</label>
                                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">

                                                            <textarea
                                                                className=" outline-none border-none h-[140px]  placeholder:text-sm pl-1" id="comment" type="text" name="comment" />

                                                        </div>
                                                    </div>


                                                </div>

                                                <div className="flex flex-col gap-4 justify-between">
                                                    <div className="max-w-sm  flex-col flex  gap-2">
                                                        <label className="text-sm  shrink-0">Review Date:</label>
                                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                            <input type="text" name="date" id="date" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                        </div>
                                                    </div>

                                                    <div className="flex max-w-sm flex-col gap-2">
                                                        <label className="text-sm  shrink-0">Rate:</label>
                                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                            <input type="text" name="rate" id="rate" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>






                                            <div className="max-w-sm w-36 mt-2 flex justify-around gap-3 relative">
                                                <button type="submit" className="w-full px-6 py-2 text-white bg-black rounded-3xl border border-black">Submit</button>

                                            </div>


                                        </form>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>

                        <DataTable
                            columns={columns}
                            data={data}

                        />



                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Review