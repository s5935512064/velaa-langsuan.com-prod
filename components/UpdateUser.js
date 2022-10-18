import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Link from "next/link";
import Swal from 'sweetalert2'
import axios from 'axios'
import moment from "moment";

const UpdateUser = ({ data, onUpdated }) => {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState()
    const [phone, setPhone] = useState("")
    const [position, setPosition] = useState("")
    const [password, setpassword] = useState("031139")
    const [image, setImage] = useState([])
    const [imgPre, setImgPre] = useState("");
    const [imgPreFromHost, setImgPreFromHost] = useState(data.profileImg != null ? true : false);

    const [newPassword, setNewPassword] = useState('')
    const [showpass, setShowPass] = useState(false)
    const [cfNewPassword, setCFnewPassword] = useState('')
    const [showCPass, setShowCPass] = useState(false)


    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        onUpdated("success")
        setIsOpen(false)
    }

    function openModal() {

        setFName(data.firstName)
        setLName(data.lastName)
        setEmail(data.email)
        setRole(data.role)
        setPhone(data.phone)
        setPosition(data.position)
        setImgPre(data.profileImg)

        setIsOpen(true)

    }

    function deletePreImg(e) {
        e.preventDefault()
        setImgPreFromHost(false)
        setImgPre(null)
        setImage([])
    }

    const onChange = (e) => {

        e.preventDefault()
        setImgPreFromHost(false)

        for (let i = 0; i < e.target.files.length; i++) {
            setImage(image => [...image, e.target.files[i]])
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgPre(reader.result);
            });

            reader.readAsDataURL(e.target.files[i]);
        }
    };

    const onChangeGallery = (e) => {
        e.preventDefault()
        console.log(e.target.files.length)
        for (let i = 0; i < e.target.files.length; i++) {
            setGallery(image => [...image, e.target.files[i]])
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setGalleryPre(image => [...image, reader.result]);
            });
            reader.readAsDataURL(e.target.files[i]);
        }

    }

    async function handleSubmit(event) {


        event.preventDefault()


        const formData = new FormData();

        formData.append('firstName', fName);
        formData.append('lastName', lName);
        formData.append('role', role);
        formData.append('phone', phone);
        formData.append('position', position);
        if (image.length > 0) {
            image.forEach(element => {
                formData.append('image', element, element.name);
            });
        }

        Swal.fire({
            title: 'Are you absolutely sure?',
            icon: 'warning',
            input: 'password',
            inputLabel: 'Please type your password to confirm.',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            },
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm',
            inputValidator: (value) => {
                if (password != value) {
                    return 'Wrong Password , please try again '
                }
            }
        }).then(async (result) => {
            if (result.isConfirmed) {

                const updateURL = `http://localhost:4500/users/${data.id}`

                await axios.patch(updateURL, formData, { withCredentials: true })
                    .then((res) => closeModal())
                    .catch((err) => console.log(err))
            }
        })


    }



    return (
        <>
            <div className="relative">
                <button onClick={openModal} className="bg-teal-600 p-2 text-white rounded text-sm">UPDATE</button>
            </div>

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

                                <Dialog.Panel className="w-fit sm:min-w-[450px] max-w-[850px]   md:max-h-[85vh] h-full transform overflow-y-scroll rounded-2xl bg-white p-6  text-left align-middle shadow-xl transition-all relative whitespace-nowrap overflow-auto scrollbar-hide">

                                    <div className=" flex justify-end right-5 top-5 ">
                                        <button onClick={closeModal} className="z-50">
                                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                            </svg>
                                        </button>

                                    </div>


                                    <div className="flex px-5">
                                        <Dialog.Title
                                            as="h3"
                                            className=" text-2xl uppercase font-semibold  "
                                        >
                                            {data.firstName + " " + data.lastName}
                                        </Dialog.Title>
                                    </div>

                                    <form id="updateUser" onSubmit={handleSubmit} className="max-w-7xl w-full p-2 md:p-5 ">
                                        <div className="w-full h-fit grid grid-cols-1  gap-2 ">


                                            <div className="flex justify-center row-span-2">

                                                <label className="flex h-36 w-36 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide border-dashed  relative overflow-hidden">


                                                    {imgPre ? <div className="h-full  w-full relative hover:bg-gray-300 duration-300 flex justify-center">
                                                        <Image
                                                            src={imgPreFromHost ? `http://localhost:4500${imgPre}` : imgPre}
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

                                                        <span className="mt-2 text-xs leading-normal">Upload Profile</span>
                                                        <input type="file" className="hidden" onChange={onChange} />
                                                    </>}

                                                </label>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="fName" className="block text-sm shrink-0 text-gray-600 ">First Name :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setFName(e.target.value)} defaultValue={fName} type="text" name="fName" id="fName" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="lName" className="block text-sm shrink-0 text-gray-600 ">Last Name :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setLName(e.target.value)} defaultValue={lName} type="text" name="lName" id="lName" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="email" className="block text-sm shrink-0 text-gray-600 ">Email :</label>
                                                <div className="bg-gray-100 flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input disabled={true} onChange={(e) => setEmail(e.target.value)} defaultValue={email} type="text" name="email" id="email" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="role" className="block text-sm shrink-0 text-gray-600 "> Permission :</label>

                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">

                                                    <select onChange={(e) => setRole(e.target.value)}
                                                        defaultValue={role}
                                                        name="role" id="role" className=" w-full outline-none border-none  placeholder:text-sm pl-1">
                                                        <option value={true}>Admin</option>
                                                        <option value={false}>User</option>
                                                    </select>

                                                </div>
                                            </div>


                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="phone" className="block text-sm shrink-0 text-gray-600 ">Phone :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setPhone(e.target.value)} defaultValue={phone} type="tel" name="phone" id="phone" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>
                                            </div>

                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="position" className="block text-sm shrink-0 text-gray-600 ">Position :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setPosition(e.target.value)} defaultValue={position} type="text" name="position" id="position" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>
                                            </div>

                                            <p className="mt-4 font-medium">Change Password</p>
                                            {/* <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">Old Password :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setFacebook(e.target.value)} type="text" name="name" id="name" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                                </div>
                                            </div> */}
                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">New Password :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md relative">
                                                    <input onChange={(e) => setNewPassword(e.target.value)} type={showpass ? "text" : "password"} name="newpassword" id="newpassword" className="w-full outline-none border-none  placeholder:text-sm pl-1" />

                                                    <div onClick={() => setShowPass(!showpass)} className="cursor-pointer absolute right-2 opacity-25">

                                                        {!showpass ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_87_25)">
                                                                <path d="M11 4.125C6.41663 4.125 2.50246 6.97583 0.916626 11C2.50246 15.0242 6.41663 17.875 11 17.875C15.5833 17.875 19.4975 15.0242 21.0833 11C19.4975 6.97583 15.5833 4.125 11 4.125ZM11 15.5833C8.46996 15.5833 6.41663 13.53 6.41663 11C6.41663 8.47 8.46996 6.41667 11 6.41667C13.53 6.41667 15.5833 8.47 15.5833 11C15.5833 13.53 13.53 15.5833 11 15.5833ZM11 8.25C9.47829 8.25 8.24996 9.47833 8.24996 11C8.24996 12.5217 9.47829 13.75 11 13.75C12.5216 13.75 13.75 12.5217 13.75 11C13.75 9.47833 12.5216 8.25 11 8.25Z" fill="black" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_87_25">
                                                                    <rect width="22" height="22" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_87_28)">
                                                                    <path d="M11 6.41667C13.53 6.41667 15.5833 8.47 15.5833 11C15.5833 11.5958 15.4641 12.155 15.2533 12.6775L17.93 15.3542C19.3141 14.1992 20.405 12.705 21.0741 11C19.4883 6.97583 15.5741 4.125 10.9908 4.125C9.70746 4.125 8.47913 4.35417 7.34246 4.76667L9.32246 6.74667C9.84496 6.53583 10.4041 6.41667 11 6.41667ZM1.83329 3.91417L3.92329 6.00417L4.34496 6.42583C2.82329 7.60833 1.63163 9.185 0.916626 11C2.50246 15.0242 6.41663 17.875 11 17.875C12.4208 17.875 13.7775 17.6 15.015 17.105L15.4 17.49L18.0858 20.1667L19.25 19.0025L2.99746 2.75L1.83329 3.91417ZM6.90246 8.98333L8.32329 10.4042C8.27746 10.5967 8.24996 10.7983 8.24996 11C8.24996 12.5217 9.47829 13.75 11 13.75C11.2016 13.75 11.4033 13.7225 11.5958 13.6767L13.0166 15.0975C12.4025 15.4 11.7241 15.5833 11 15.5833C8.46996 15.5833 6.41663 13.53 6.41663 11C6.41663 10.2758 6.59996 9.5975 6.90246 8.98333V8.98333ZM10.8533 8.26833L13.7408 11.1558L13.7591 11.0092C13.7591 9.4875 12.5308 8.25917 11.0091 8.25917L10.8533 8.26833Z" fill="black" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_87_28">
                                                                        <rect width="22" height="22" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>

                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="max-w-sm w-full flex flex-col">
                                                <label htmlFor="name" className="block text-sm shrink-0 text-gray-600 ">Confirm New Password :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md relative">
                                                    <input onChange={(e) => setCFnewPassword(e.target.value)} type={showCPass ? "text" : "password"} name="name" id="name" className="w-full outline-none border-none  placeholder:text-sm pl-1 " />
                                                    <div onClick={() => setShowCPass(!showCPass)} className="cursor-pointer absolute right-2 opacity-25">

                                                        {!showCPass ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_87_25)">
                                                                <path d="M11 4.125C6.41663 4.125 2.50246 6.97583 0.916626 11C2.50246 15.0242 6.41663 17.875 11 17.875C15.5833 17.875 19.4975 15.0242 21.0833 11C19.4975 6.97583 15.5833 4.125 11 4.125ZM11 15.5833C8.46996 15.5833 6.41663 13.53 6.41663 11C6.41663 8.47 8.46996 6.41667 11 6.41667C13.53 6.41667 15.5833 8.47 15.5833 11C15.5833 13.53 13.53 15.5833 11 15.5833ZM11 8.25C9.47829 8.25 8.24996 9.47833 8.24996 11C8.24996 12.5217 9.47829 13.75 11 13.75C12.5216 13.75 13.75 12.5217 13.75 11C13.75 9.47833 12.5216 8.25 11 8.25Z" fill="black" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_87_25">
                                                                    <rect width="22" height="22" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                            : <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_87_28)">
                                                                    <path d="M11 6.41667C13.53 6.41667 15.5833 8.47 15.5833 11C15.5833 11.5958 15.4641 12.155 15.2533 12.6775L17.93 15.3542C19.3141 14.1992 20.405 12.705 21.0741 11C19.4883 6.97583 15.5741 4.125 10.9908 4.125C9.70746 4.125 8.47913 4.35417 7.34246 4.76667L9.32246 6.74667C9.84496 6.53583 10.4041 6.41667 11 6.41667ZM1.83329 3.91417L3.92329 6.00417L4.34496 6.42583C2.82329 7.60833 1.63163 9.185 0.916626 11C2.50246 15.0242 6.41663 17.875 11 17.875C12.4208 17.875 13.7775 17.6 15.015 17.105L15.4 17.49L18.0858 20.1667L19.25 19.0025L2.99746 2.75L1.83329 3.91417ZM6.90246 8.98333L8.32329 10.4042C8.27746 10.5967 8.24996 10.7983 8.24996 11C8.24996 12.5217 9.47829 13.75 11 13.75C11.2016 13.75 11.4033 13.7225 11.5958 13.6767L13.0166 15.0975C12.4025 15.4 11.7241 15.5833 11 15.5833C8.46996 15.5833 6.41663 13.53 6.41663 11C6.41663 10.2758 6.59996 9.5975 6.90246 8.98333V8.98333ZM10.8533 8.26833L13.7408 11.1558L13.7591 11.0092C13.7591 9.4875 12.5308 8.25917 11.0091 8.25917L10.8533 8.26833Z" fill="black" />
                                                                </g>
                                                                <defs>
                                                                    <clipPath id="clip0_87_28">
                                                                        <rect width="22" height="22" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>

                                                        }

                                                    </div>
                                                </div>
                                            </div>


                                        </div>



                                        <div className="my-4 mt-6 flex w-full justify-around gap-3 relative col-span-2">
                                            <button type="submit" className="w-full px-6 py-2 text-white bg-black shadow-md rounded-lg disabled:opacity-25 text-sm">Update User</button>

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

export default UpdateUser