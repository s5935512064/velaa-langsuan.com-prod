import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Link from "next/link";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';
import axios from "axios";
import Swal from "sweetalert2";

const CreateEvent = ({ onCreated }) => {

    var currentDate = moment().format("YYYY-MM-DD");

    const [value, setValue] = useState(new Date(currentDate));

    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState(new Date(currentDate))
    const [endDate, setEndDate] = useState(new Date(currentDate))
    const [banner, setBanner] = useState([])
    const [backgound, setBackground] = useState([])
    const [border, setBorder] = useState([])
    const [textEvent, setTextEvent] = useState([])
    const [device, setDivice] = useState("desktop")

    const [galleryPre, setGalleryPre] = useState([
        { title: "", image: null }
    ])


    // const [nameTH, setNameTH] = useState('');
    // const [image, setImage] = useState([])
    // const [imgPre, setImgPre] = useState(null);
    // const [gallery, setGallery] = useState([])
    // const [detail, setDetail] = useState('');
    // const [detailTH, setDetailTH] = useState('');
    // const [phone, setPhone] = useState('');
    // const [facebook, setFacebook] = useState('');
    // const [line, setLine] = useState('');
    // const [instragram, setInstragram] = useState('');
    // const [type, setType] = useState('');


    let [isOpen, setIsOpen] = useState(false)

    const handleChange = (newValue) => {
        setValue(newValue);
        // getTable(moment(newValue).format('YYYY-MM-DD'))

    };

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        // console.log(data)
        // setImgPre(null)
        // setImage([])
        setBorder([])
        setTextEvent([])
        setBackground([])
        setBanner([])
        setGalleryPre([])
        // setGallery([])

        setIsOpen(true)
    }

    function deletePreImg(e) {

        e.preventDefault()
        setTimeout(() => {
            setImgPre(null)

        }, 500)

        setImage([])
    }


    function deleteGalImg(e, title, id) {

        e.preventDefault()

        if (title == "banner") setBanner([])
        else if (title == "background") setBackground([])
        else if (title == "border") setBorder([])
        else if (title == "text") setTextEvent([])

        setGalleryPre([
            ...galleryPre.slice(0, id),
            ...galleryPre.slice(id + 1, galleryPre.length)
        ]);


    }


    const onChange = (e) => {
        e.preventDefault()
        console.log(e.target.files.length)
        for (let i = 0; i < e.target.files.length; i++) {
            setImage(image => [...image, e.target.files[i]])
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgPre(reader.result);
            });

            reader.readAsDataURL(e.target.files[i]);
        }
    };

    const onChangeGallery = (e, type) => {

        e.preventDefault()

        for (let i = 0; i < e.target.files.length; i++) {
            if (type == "banner") setBanner(e.target.files[i])
            else if (type == "background") setBackground(e.target.files[i])
            else if (type == "border") setBorder(e.target.files[i])
            else if (type == "text") setTextEvent(e.target.files[i])


            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const temp = {
                    title: type,
                    image: reader.result
                }
                setGalleryPre(galleryPre => [...galleryPre, temp]);
            });

            reader.readAsDataURL(e.target.files[i]);
        }

    }


    async function handleSubmit(event) {

        event.preventDefault()

        let formData = new FormData();
        formData.append('name', name);
        formData.append('startDate', moment(startDate).format("ll"));
        formData.append('endDate', moment(endDate).format("ll"));

        formData.append('banner', banner, banner.name);
        formData.append('background', backgound, backgound.name);
        formData.append('border', border, border.name);
        formData.append('textEvent', textEvent, textEvent.name);
        formData.append('device', device);


        let createEvent = `http://localhost:4500/events`

        try {

            let timeprogress = 0

            const response = await axios.post(createEvent, formData, {
                onUploadProgress: function (ProgressEvent) {
                    timeprogress = ProgressEvent.total
                }
            })


            Swal.fire({
                title: 'Please Wait !',
                allowEscapeKey: false,
                allowOutsideClick: false,
                timer: timeprogress / 1000,
                didOpen: () => {
                    Swal.showLoading()
                }
            }).then((result) => {

                if (response.status == 201) {

                    Swal.fire({
                        title: 'Finished!',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false
                    }).then(() => {
                        document.getElementById("createEventForm").reset();
                        setGalleryPre([])
                        setBanner([])
                        setBackground([])
                        setBorder([])
                        setTextEvent([])
                        onCreated("success")
                    })
                }
            })


        } catch (error) {

            Swal.fire({
                title: error.response.data.message,
                text: "Please select your images. ",
                icon: 'error',
                didOpen: () => {
                    Swal.hideLoading()
                }
            })


        }


    }

    return (
        <>
            <button onClick={openModal} className="flex-shrink-0 bg-black text-white px-4 py-3 text-sm shadow-md rounded-lg inline-flex gap-2 justify-center">
                <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00008 0.666626C4.40008 0.666626 0.666748 4.39996 0.666748 8.99996C0.666748 13.6 4.40008 17.3333 9.00008 17.3333C13.6001 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6001 0.666626 9.00008 0.666626ZM13.1667 9.83329H9.83341V13.1666H8.16675V9.83329H4.83341V8.16663H8.16675V4.83329H9.83341V8.16663H13.1667V9.83329Z" fill="currentColor" />
                    </svg>

                </span>
                New Event
            </button>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={openModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center relative">

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <Dialog.Panel className="w-full max-w-[850px]  md:max-h-[85vh] h-full transform overflow-y-scroll rounded-2xl bg-white p-6 md:p-10 text-left align-middle shadow-xl transition-all relative whitespace-nowrap overflow-auto scrollbar-hide">

                                    <div className="absolute  flex justify-end right-5 top-5">
                                        <button onClick={closeModal} className="z-50">
                                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                            </svg>
                                        </button>

                                    </div>


                                    <div className="flex px-5">

                                        <Dialog.Title
                                            as="h3"
                                            className=" text-2xl uppercase font-bold   "
                                        >
                                            New Event
                                        </Dialog.Title>
                                    </div>

                                    <form id="createEventForm" onSubmit={handleSubmit} className=" w-full p-2 md:p-5 ">
                                        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-2">

                                            {/* <div className="flex justify-center row-span-2">

                                                <label className="flex h-36 w-36 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide border-dashed  relative overflow-hidden">


                                                    {imgPre ? <div className="h-full  w-full relative hover:bg-gray-300 duration-300 flex justify-center">
                                                        <Image
                                                            src={imgPre}
                                                            alt="logo"
                                                            layout="fill"
                                                            objectFit="contain"
                                                            className=""
                                                        />

                                                        <div className="absolute bottom-2">
                                                            <button onClick={deletePreImg} className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                                                <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                    <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                    </div> : <>
                                                        <svg className="-translate-x-1" width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.875 4.16666V0.291664H6.45833V4.16666H10.3333V6.75H6.45833V10.625H3.875V6.75H0V4.16666H3.875ZM7.75 11.9167V8.04166H11.625V4.16666H20.6667L23.0304 6.75H27.125C28.5458 6.75 29.7083 7.9125 29.7083 9.33333V24.8333C29.7083 26.2542 28.5458 27.4167 27.125 27.4167H6.45833C5.0375 27.4167 3.875 26.2542 3.875 24.8333V11.9167H7.75ZM16.7917 23.5417C20.3567 23.5417 23.25 20.6483 23.25 17.0833C23.25 13.5183 20.3567 10.625 16.7917 10.625C13.2267 10.625 10.3333 13.5183 10.3333 17.0833C10.3333 20.6483 13.2267 23.5417 16.7917 23.5417ZM12.6583 17.0833C12.6583 19.3696 14.5054 21.2167 16.7917 21.2167C19.0779 21.2167 20.925 19.3696 20.925 17.0833C20.925 14.7971 19.0779 12.95 16.7917 12.95C14.5054 12.95 12.6583 14.7971 12.6583 17.0833Z" fill="black" />
                                                        </svg>

                                                        <span className="mt-2 text-xs leading-normal">Upload Logo</span>
                                                        <input type="file" className="hidden" onChange={onChange} />
                                                    </>}

                                                </label>
                                            </div> */}

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">Name :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">Device :</label>
                                                <div className=" flex items-center py-[7px] px-3 border border-gray-300 rounded-md">
                                                    <select onChange={(e) => setDivice(e.target.value)} name="device" id="device" className=" w-full outline-none border-none  placeholder:text-sm pl-1">
                                                        <option value="desktop">Desktop</option>
                                                        <option value="mobile">Mobile</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* 
                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="detail" className="block text-sm shrink-0 text-gray-600 ">Detail : </label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <textarea onChange={(e) => setDetail(e.target.value)} type="text" name="detail" id="detail" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="detail" className="block text-sm shrink-0 text-gray-600 ">Detail TH : </label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <textarea onChange={(e) => setDetailTH(e.target.value)} type="text" name="detail" id="detail" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>


                                            </div> */}

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">Start :</label>
                                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                                    <Stack spacing={4}>
                                                        <DesktopDatePicker
                                                            mask='__/__/____'
                                                            inputFormat="DD/MM/YYYY"
                                                            value={startDate}
                                                            onChange={(newValue) => setStartDate(newValue)}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </Stack>
                                                </LocalizationProvider>
                                                {/* <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                </div> */}
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">End :</label>
                                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                                    <Stack spacing={4}>
                                                        <DesktopDatePicker
                                                            mask='__/__/____'
                                                            inputFormat="DD/MM/YYYY"
                                                            value={endDate}
                                                            onChange={(newValue) => setEndDate(newValue)}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />
                                                    </Stack>
                                                </LocalizationProvider>
                                            </div>

                                        </div>

                                        <section className="py-4 w-full h-full flex flex-col col-span-2 overflow-hidden">
                                            <div className="px-4 rounded-md border-dashed border  py-12 flex gap-4 justify-center items-center flex-wrap">

                                                <label className="bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-sm rounded-sm px-3 py-2 w-40 h-full  flex justify-center items-center cursor-pointer">
                                                    <input onChange={(e) => onChangeGallery(e, "banner")} id="hidden-input" type="file" className="hidden" />

                                                    <span className="">
                                                        Upload Full Picture
                                                    </span>

                                                </label>

                                                <label className="bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-sm rounded-sm px-3 py-2 w-40 h-full  flex justify-center items-center cursor-pointer">
                                                    <input onChange={(e) => onChangeGallery(e, "background")} id="hidden-input" type="file" className="hidden" />
                                                    <span className="">
                                                        Upload Backgroud
                                                    </span>
                                                </label>


                                                <label className="bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-sm rounded-sm px-3 py-2 w-40 h-full  flex justify-center items-center cursor-pointer">
                                                    <input onChange={(e) => onChangeGallery(e, "text")} id="hidden-input" type="file" className="hidden" />

                                                    <span className="">
                                                        Upload Text
                                                    </span>
                                                </label>


                                                <label className="bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-sm rounded-sm px-3 py-2 w-40 h-full  flex justify-center items-center cursor-pointer">
                                                    <input onChange={(e) => onChangeGallery(e, "border")} id="hidden-input" type="file" className="hidden" />
                                                    <span className="">
                                                        Upload Border
                                                    </span>
                                                </label>

                                            </div>

                                            <h1 className="pt-4 pb-3 font-medium sm:text-lg text-gray-900">
                                                To Upload
                                            </h1>

                                            <ul id="gallery" className="relative gap-4 grid grid-cols-2 md:grid-cols-4 justify-items-center w-full ">
                                                {galleryPre.length > 0 ? <>
                                                    {galleryPre.map((item, index) => (
                                                        <li key={index} className="overflow-hidden w-36 h-36 relative flex justify-center h duration-300 border cursor-pointer">
                                                            <Image
                                                                src={item.image}
                                                                alt="logo"
                                                                layout="fill"
                                                                objectFit="contain"
                                                                className="scale-75"
                                                            />

                                                            <div className="absolute bottom-2 ">
                                                                <button onClick={(e) => deleteGalImg(e, item.title, index)} className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                                                    <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                                        <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                                                    </svg>
                                                                </button>
                                                            </div>

                                                        </li>
                                                    ))}
                                                </>
                                                    : <li id="empty" className="col-span-4 h-full w-full text-center flex flex-col  justify-center items-center">
                                                        <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                                        <span className="text-small text-gray-500">No files selected</span>
                                                    </li>


                                                }

                                            </ul>


                                        </section>

                                        <div className="my-4 flex w-full justify-around gap-3 relative col-span-2">
                                            <button type="submit" className="w-fit px-6 py-2 text-white bg-black shadow-md rounded-lg disabled:opacity-25 text-sm">CREATE NEW EVENT</button>

                                        </div>

                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default CreateEvent