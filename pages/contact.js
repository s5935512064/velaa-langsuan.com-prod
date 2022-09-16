import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";

const Contact = () => {
    return (
        <Layout>
            <div className="md:ml-72 relative bg-[#F7F7F7] min-h-screen ">

                <Navbar title="Contact Info" />

                <div className="px-4 pb-4 md:pb-10 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
                    <div className="w-full min-h-screen bg-white rounded-xl shadow p-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 ">

                            <div className="flex flex-col gap-3 items-center md:items-start w-full ">

                                <h1 className="font-bold">Contact Info</h1>
                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="address" className="text-sm  shrink-0">Address :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="text" name="address" id="address" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                    </div>
                                </div>

                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="addressth" className="text-sm  shrink-0">Address TH :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="text" name="addressth" id="addressth" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                    </div>
                                </div>

                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-sm  shrink-0">Phone :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="tel" name="phone" id="phone" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                    </div>
                                </div>

                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="dateOpen" className="text-sm  shrink-0">Open Time :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="text" name="dateOpen" id="dateOpen" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                    </div>
                                </div>

                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm  shrink-0">Email :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="email" name="email" id="email" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                    </div>
                                </div>

                                <div className="max-w-sm w-36 mt-2 flex justify-around gap-3 relative text-sm ">
                                    <button type="submit" className="w-full px-6 py-2 text-white bg-black rounded-3xl border border-black">Update</button>
                                </div>


                            </div>

                            <div className="flex flex-col gap-3 items-center md:items-start w-full">
                                <h1 className="font-bold ">Social Link</h1>



                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="facebook" className="text-sm  shrink-0">Facebook :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="text" name="facebook" id="facebook" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                    </div>
                                </div>

                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="line" className="text-sm  shrink-0">Line :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="text" name="line" id="line" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                    </div>
                                </div>

                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="instagram" className="text-sm  shrink-0">Instagram :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="text" name="instagram" id="instagram" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                    </div>
                                </div>


                                <div className="max-w-sm w-full flex flex-col gap-2">
                                    <label htmlFor="youtube" className="text-sm  shrink-0">Youtube :</label>
                                    <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                        <input type="text" name="youtube" id="youtube" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                    </div>
                                </div>

                                <div className="max-w-sm w-36 mt-2 flex justify-around gap-3 relative text-sm ">
                                    <button type="submit" className="w-full px-6 py-2 text-white bg-black rounded-3xl border border-black">Update</button>
                                </div>


                            </div>

                        </div>







                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default Contact