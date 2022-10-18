import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";
import useSWR, { mutate } from 'swr'


const url = `http://localhost:4500/contact/1`
const fetcher = (url) => axios.get(url).then((res) => res.data);



const Contact = () => {

    const { data, error } = useSWR(url, fetcher)

    const [address, setAddress] = useState("")
    const [addressTH, setAddressTH] = useState("")
    const [phone, setPhone] = useState("")
    const [openTime, setOpenTime] = useState("")
    const [email, setEmail] = useState("")
    const [facebook, setFacebook] = useState("")
    const [line, setLine] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")

    const fillData = () => {
        setAddress(data.address)
        setAddressTH(data.addressTH)
        setPhone(data.phone)
        setOpenTime(data.openTime)
        setEmail(data.email)
        setFacebook(data.facebook_link)
        setLine(data.line_link)
        setInstagram(data.instragram_link)
        setYoutube(data.youtube_link)
    }


    const handleSubmitContact = async (e) => {

        e.preventDefault()

        let formData = new FormData();
        formData.append('address', address);
        formData.append('addressTH', addressTH);
        formData.append('phone', phone);
        formData.append('openTime', openTime);
        formData.append('email', email);
        formData.append('facebook_link', facebook);
        formData.append('line_link', line);
        formData.append('instragram_link', instagram);
        formData.append('youtube_link', youtube);

        try {

            const response = await axios.patch(url, formData);

            if (response.status == 200) {
                Swal.fire({
                    title: 'Success!',
                    text: "Your information has been updated",
                    icon: 'success',

                }).then(() => {
                    mutate(url)
                })
            }

        } catch {

        }

    }

    useEffect(() => {

        if (data != undefined) {

            fillData()
        }


    }, [data])

    if (data == undefined) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                Loading...
            </div>
        )
    }



    return (
        <Layout>
            <div className="md:ml-72 relative bg-[#F7F7F7] min-h-screen ">

                <Navbar title="Contact Info" />

                <div className="px-4 pb-4 md:pb-10 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
                    <div className="w-full min-h-screen bg-white rounded-xl shadow p-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 ">

                            <div className="flex flex-col gap-2 items-center md:items-start w-full ">

                                <h1 className="font-bold">Contact Info</h1>

                                <form onSubmit={handleSubmitContact} className="flex flex-col gap-2 items-center md:items-start w-full">

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="address" className="text-sm  shrink-0">Address :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                type="text" name="address" id="address" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="addressth" className="text-sm  shrink-0">Address TH :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={addressTH}
                                                onChange={(e) => setAddressTH(e.target.value)}
                                                type="text" name="addressth" id="addressth" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-sm  shrink-0">Phone :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                type="tel" name="phone" id="phone" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="dateOpen" className="text-sm  shrink-0">Open Time :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={openTime}
                                                onChange={(e) => setOpenTime(e.target.value)}
                                                type="text" name="dateOpen" id="dateOpen" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm  shrink-0">Email :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email" name="email" id="email" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-36 mt-2 flex justify-around gap-3 relative text-sm ">
                                        <button type="submit" className="w-full px-6 py-2 text-white bg-black rounded-3xl border border-black">Update</button>
                                    </div>
                                </form>



                            </div>

                            <div className="flex flex-col gap-3\2 items-center md:items-start w-full">
                                <h1 className="font-bold ">Social Link</h1>

                                <form onSubmit={handleSubmitContact} className="flex flex-col gap-3\2 items-center md:items-start w-full">

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="facebook" className="text-sm  shrink-0">Facebook :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={facebook}
                                                onChange={(e) => setFacebook(e.target.value)}
                                                type="text" name="facebook" id="facebook" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="line" className="text-sm  shrink-0">Line :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={line}
                                                onChange={(e) => setLine(e.target.value)}
                                                type="text" name="line" id="line" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="instagram" className="text-sm  shrink-0">Instagram :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={instagram}
                                                onChange={(e) => setInstagram(e.target.value)}
                                                type="text" name="instagram" id="instagram" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>


                                    <div className="max-w-sm w-full flex flex-col gap-2">
                                        <label htmlFor="youtube" className="text-sm  shrink-0">Youtube :</label>
                                        <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                            <input
                                                defaultValue={youtube}
                                                onChange={(e) => setYoutube(e.target.value)}
                                                type="text" name="youtube" id="youtube" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                        </div>
                                    </div>

                                    <div className="max-w-sm w-36 mt-2 flex justify-around gap-3 relative text-sm ">
                                        <button type="submit" className="w-full px-6 py-2 text-white bg-black rounded-3xl border border-black">Update</button>
                                    </div>

                                </form>



                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default Contact