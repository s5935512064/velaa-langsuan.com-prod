import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

const uploadURL = `http://localhost:4500/gallery`


const UploadGallery = ({ onUpload }) => {

    const [status, setStatus] = useState(true)
    const [category, setCategory] = useState("")
    const [gallery, setGallery] = useState([])
    const [galleryPre, setGalleryPre] = useState([])
    const [uploadPercentage, setUploadPercentage] = useState(0);


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {

        setCategory("")
        setGalleryPre([])
        setGallery([])

        setIsOpen(true)
    }

    function deleteGalImg(id) {

        setGalleryPre([
            ...galleryPre.slice(0, id),
            ...galleryPre.slice(id + 1, galleryPre.length)
        ]);

        setGallery([
            ...gallery.slice(0, id),
            ...gallery.slice(id + 1, gallery.length)
        ]);

    }

    const onChangeGallery = (e) => {

        e.preventDefault()

        for (let i = 0; i < e.target.files.length; i++) {
            setGallery(gallery => [...gallery, e.target.files[i]])

            const reader = new FileReader();

            reader.addEventListener("load", () => {
                setGalleryPre(gallery => [...gallery, reader.result]);
            });

            reader.readAsDataURL(e.target.files[i]);
        }

    }

    async function handleSubmit(event) {

        event.preventDefault()

        let formData = new FormData();

        formData.append('status', status);
        formData.append('category', category);

        gallery.forEach(element => {
            formData.append('image', element, element.name);
        });


        try {
            const response = await axios.post(uploadURL, formData, {

                onUploadProgress: function (ProgressEvent) {

                    Swal.fire({
                        title: 'Please Wait !',
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        timer: ProgressEvent.loaded / 1000,
                        didOpen: () => {
                            Swal.showLoading()
                        }
                    }).then((result) => {
                        if (result.isDismissed) {
                            Swal.fire({
                                title: 'Finished!',
                                icon: 'success',
                                timer: 2000,
                                showConfirmButton: false
                            }).then(() => {

                                document.getElementById("upload-gallery").reset();
                                setGalleryPre([])
                                setGallery([])

                                onUpload("success")
                            })
                        }
                    })

                }
            })

            // if (response.status == 200) {

            // }

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
                Upload Gallery
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

                                <Dialog.Panel className="w-fit max-w-[850px]  md:max-h-[85vh] h-full transform overflow-y-scroll rounded-2xl bg-white p-6 md:p-10 text-left align-middle shadow-xl transition-all relative  overflow-auto scrollbar-hide">

                                    <div className="absolute  flex justify-end right-5 top-5">
                                        <button onClick={closeModal} className="z-50">
                                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 18 18">
                                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                            </svg>
                                        </button>

                                    </div>

                                    <div className="flex px-2">

                                        <Dialog.Title
                                            as="h3"
                                            className=" text-2xl uppercase font-bold   "
                                        >
                                            Gallery
                                        </Dialog.Title>
                                    </div>


                                    <form id="upload-gallery" onSubmit={handleSubmit} className="max-w-7xl w-full p-2 md:p-5 relative">


                                        <p className="text-sm text-gray-400 font-light">รูปที่ใช้ควรมีขนาดความกว้างที่ 1920 px นามสกุลที่อนุญาตคือ (*png , *jpg ,* webp)</p>


                                        <section className="py-4 w-full h-full flex flex-col col-span-2 overflow-hidden">

                                            <div className="px-4 rounded-md border-dashed border  py-12 flex flex-col justify-center items-center">

                                                {/* <p className="mb-3  text-gray-900 flex flex-wrap justify-center text-xs leading-normal uppercase">
                                                    <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                                                </p> */}

                                                <label>

                                                    <input onChange={onChangeGallery} id="hidden-input" type="file" multiple className="hidden" />

                                                    <span className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-sm">
                                                        Upload Photo
                                                    </span>

                                                </label>

                                            </div>

                                            <div className="flex flex-col">
                                                <label htmlFor="fName" className="block text-sm shrink-0 text-gray-600 ">Category :</label>
                                                <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                    <input onChange={(e) => setCategory(e.target.value)} type="text" name="category" id="category" className="w-full outline-none border-none  placeholder:text-sm pl-1" />
                                                </div>
                                            </div>


                                            <h1 className="pt-4 pb-3 font-medium sm:text-lg text-gray-900">
                                                To Upload
                                            </h1>

                                            <ul id="gallery" className="relative gap-4 grid grid-cols-2 md:grid-cols-4 justify-items-center w-full ">
                                                {galleryPre.length > 0 ? <>
                                                    {galleryPre.map((item, index) => (
                                                        <li key={index} className="overflow-hidden w-36 h-36 relative flex justify-center h duration-300 border cursor-pointer">
                                                            <Image
                                                                src={item}
                                                                alt="logo"
                                                                layout="fill"
                                                                objectFit="contain"
                                                                className="scale-75"
                                                            />

                                                            <div className="absolute bottom-2 ">
                                                                <button onClick={() => deleteGalImg(index)} className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
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
                                            <button type="submit" className="w-fit px-6 py-2 text-white bg-black shadow-md rounded-lg disabled:opacity-25 text-sm">Upload Gallery</button>
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

export default UploadGallery