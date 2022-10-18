import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from 'next/image'
import axios from "axios";

const Test = () => {


    const [image, setImage] = useState([])
    const [imgPre, setImgPre] = useState(null);

    const [image2, setImage2] = useState([])
    const [imgPre2, setImgPre2] = useState(null);

    const [name, setName] = useState("")


    const handleImage = async () => {


        let formData = new FormData();

        image.forEach(element => {
            formData.append('image', element, element.name);
        });

        try {
            const response = await axios.post('http://localhost:4500/images', formData);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            console.log(response);
        } catch (err) {
            console.log(err);
        }



        console.log("image", formData)

    }

    function deletePreImg(e) {

        e.preventDefault()
        setTimeout(() => {
            setImgPre(null)

        }, 500)

        setImage([])
    }

    function deletePreImg2(e) {

        e.preventDefault()
        setTimeout(() => {
            setImgPre2(null)

        }, 500)

        setImage2([])
    }

    const onFileChange = (e) => {

        e.preventDefault()

        for (let i = 0; i < e.target.files.length; i++) {
            setImage(image => [...image, e.target.files[i]])
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgPre(reader.result);
            });
            reader.readAsDataURL(e.target.files[i]);
        }

    }

    const onFileChange2 = (e) => {

        e.preventDefault()

        for (let i = 0; i < e.target.files.length; i++) {
            setImage2(image2 => [...image2, e.target.files[i]])
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgPre2(reader.result);
            });
            reader.readAsDataURL(e.target.files[i]);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let formData = new FormData();

        formData.append('name', name);
        image.forEach(element => {
            formData.append('image', element, element.name);
        });

        image2.forEach(element => {
            formData.append('image2', element, element.name);
        });


        try {
            const response = await axios.post('http://localhost:4500/images', formData);

            console.log(response);

        } catch (err) {
            console.log(err);
        }


    }



    return (
        <>

            <div className="min-h-screen w-full flex items-center justify-center">
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
                            <input type="file" className="hidden" onChange={onFileChange} />
                        </>}

                    </label>
                </div> */}

                <form id="create-profile" onSubmit={handleSubmit} >

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
                            <input type="file" className="hidden" onChange={onFileChange} />
                        </>}

                    </label>

                    <label className="flex h-36 w-36 cursor-pointer flex-col items-center justify-center rounded-full border bg-white uppercase tracking-wide border-dashed  relative overflow-hidden">


                        {imgPre2 ? <div className="h-full  w-full relative hover:bg-gray-300 duration-300 flex justify-center">
                            <Image
                                src={imgPre2}
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                                className=""
                            />

                            <div className="absolute bottom-2">
                                <button onClick={deletePreImg2} className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
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
                            <input type="file" className="hidden" onChange={onFileChange2} />
                        </>}

                    </label>

                    <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="border" />
                    <button type="submit">SUBMIT</button>
                </form>

            </div>

        </>
    )
}

export default Test