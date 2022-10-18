import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";
import Swal from 'sweetalert2'
import { Switch } from '@headlessui/react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import moment from 'moment';

import axios from "axios";
import useSWR, { mutate } from 'swr'
import { RadioGroup } from '@headlessui/react'


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: 'rgb(249 250 251)',

        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            paddingTop: '8px', // override the cell padding for data cells
            paddingBottom: '8px',
        },
    },
};


const url = `http://localhost:4500/images`
const url2 = `http://localhost:4500/review`
const fetcher = (url) => axios.get(url).then((res) => res.data);

const Review = () => {

    const { data: avatar, error } = useSWR(url, fetcher)

    const [selected, setSelected] = useState("")
    const [author, setAuthor] = useState("")
    const [rate, setRate] = useState(0)
    const [comment, setComment] = useState("")


    const currentDate = moment().format("YYYY-MM-DD");
    const [value, setValue] = useState(new Date(currentDate));

    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [refresh, setRefresh] = useState(false)


    const filterAvatar = avatar ? avatar.filter((p) => p.category == "profile") : avatar

    function CheckIcon(props) {
        return (
            <svg viewBox="0 0 24 24" fill="none" {...props}>
                <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
                <path
                    d="M7 13l3 3 7-7"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        )
    }

    const fetchUsers = async page => {

        setLoading(true);
        const response = await axios.get(`http://localhost:4500/review?page=${page}&per_page=${perPage}&delay=1`);

        const arraySorted = response.data.results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setData(arraySorted);
        setTotalRows(response.data.total);
        setLoading(false);
    };

    const updateStatus = async (id) => {
        // console.log("ddddd", id)
    }

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        const response = await axios.get(`http://localhost:4500/review?page=${page}&per_page=${newPerPage}&delay=1`);

        const arraySorted = response.data.results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

        setData(arraySorted);
        setPerPage(newPerPage);
        setLoading(false);

    };

    const deleteVender = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {

                const deleteURL = `http://localhost:4500/review/${id}`

                await axios.delete(deleteURL, { withCredentials: true })
                    .then((res) => setRefresh(!refresh))
                    .catch((err) => console.log(err))
            }
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        let formData = new FormData();
        formData.append('author', author);
        formData.append('avatar_src', selected);
        formData.append('comment', comment);
        formData.append('review_date', value);
        formData.append('review_rate', rate);

        try {

            const response = await axios.post(`http://localhost:4500/review`, formData);

            console.log(response)

            if (response.status == 201 && response.statusText == "Created") {
                Swal.fire({
                    title: 'Success!',
                    text: "Your information has been updated",
                    icon: 'success',

                }).then(() => {
                    document.getElementById("review-create-form").reset();
                    setRefresh(!refresh)
                })
            }

        } catch {

        }

    }


    useEffect(() => {
        fetchUsers(1); // fetch page 1 of users
    }, [refresh]);


    const subHeaderComponentMemo = useMemo(() => {

        const handleChange = (newValue) => {
            setValue(newValue);
            // getTable(moment(newValue).format('YYYY-MM-DD'))

        };

        return (
            <div className="w-full mb-4  h-full">

                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="w-full flex flex-col md:flex-row justify-between gap-2 ">
                                <div className="relative h-fit ">
                                    <div className="flex absolute inset-y-0 left-0  pl-3 pointer-events-none items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="gray" role="img" >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
                                        </svg>
                                    </div>

                                    <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder:text-sm placeholder:font-light " placeholder="search by author" onChange={(e) => setFilterText(e.target.value)} type="text" name="search" />
                                </div>

                                <Disclosure.Button className="flex-shrink-0 bg-black text-white px-4 py-3 text-sm shadow-md rounded-lg inline-flex gap-2 justify-center">
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.00008 0.666626C4.40008 0.666626 0.666748 4.39996 0.666748 8.99996C0.666748 13.6 4.40008 17.3333 9.00008 17.3333C13.6001 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6001 0.666626 9.00008 0.666626ZM13.1667 9.83329H9.83341V13.1666H8.16675V9.83329H4.83341V8.16663H8.16675V4.83329H9.83341V8.16663H13.1667V9.83329Z" fill="currentColor" />
                                        </svg>

                                    </span>
                                    New Review

                                </Disclosure.Button>
                            </div>

                            <Disclosure.Panel className="pt-4 pb-2 ">

                                <form id="review-create-form" onSubmit={handleSubmit} className="w-full gap-4 flex-col flex items-center justify-center ">

                                    <div className="max-w-xl grid grid-cols-1 md:grid-cols-2 w-full gap-2 justify-center">

                                        <div className="flex-col flex w-full gap-2">
                                            <label className="text-sm ">Select Profile :</label>

                                            <div className="w-full py-4">
                                                <div className="w-full">
                                                    <RadioGroup value={selected} onChange={setSelected}>
                                                        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>

                                                        <div className="flex gap-1">

                                                            {filterAvatar && filterAvatar.map((item, index) => (

                                                                <RadioGroup.Option
                                                                    key={index}
                                                                    value={item.src}
                                                                    className={({ active, checked }) =>
                                                                        `${active
                                                                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                                                            : ''
                                                                        }
                                                                        ${checked ? 'bg-sky-300 bg-opacity-75 text-white' : 'bg-white'
                                                                        }
                                                                        relative flex cursor-pointer p-5 shadow-sm focus:outline-none w-16 h-16 rounded-full`
                                                                    }
                                                                >
                                                                    <Image
                                                                        src={`http://localhost:4500${item.src}`}
                                                                        alt="avatar"
                                                                        layout="fill"
                                                                        objectFit="contain"
                                                                        objectPosition={"center"}
                                                                        className="scale-90"
                                                                    />
                                                                </RadioGroup.Option>
                                                            ))}


                                                        </div>


                                                    </RadioGroup>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="flex-col flex w-full gap-2">

                                            <label className="text-sm  shrink-0">Author by:</label>
                                            <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                <input
                                                    onChange={(e) => setAuthor(e.target.value)}
                                                    type="text" name="author" id="author" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                            </div>
                                        </div>




                                        <div className="flex-col flex gap-2 w-full h-fit">
                                            <label className="text-sm  shrink-0">Review Date:</label>
                                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                                <Stack spacing={4}>
                                                    <DesktopDatePicker
                                                        mask='__/__/____'
                                                        inputFormat="DD/MM/YYYY"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </Stack>
                                            </LocalizationProvider>
                                        </div>

                                        <div className="flex-col flex w-full  gap-2">
                                            <label className="text-sm  shrink-0">Rate:</label>
                                            <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                <input
                                                    onChange={(e) => setRate(e.target.value)}
                                                    type="number" min="1" max="5" step="1" name="rate" id="rate" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                            </div>
                                        </div>

                                        <div className="flex-col flex w-full  md:col-span-2  gap-2">
                                            <label className="text-sm  shrink-0">Comment:</label>
                                            <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">

                                                <textarea
                                                    onChange={(e) => setComment(e.target.value)}
                                                    className="w-full outline-none border-none h-[140px]  placeholder:text-sm pl-1" id="comment" type="text" name="comment" />

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

            </div >


        );

    }, [filterText, value, selected, author, rate, comment, filterAvatar]);


    const filteredItems = !filterText ? data :
        data.filter(
            item => item.author.toLowerCase().includes(filterText.toLowerCase()) || item.comment.toLowerCase().includes(filterText.toLowerCase()),
        );


    const columns = [
        {
            name: 'ID',
            selector: (row, index) => index + 1,
            width: "6rem",
            sortable: true,
            center: true,

        },
        {
            name: 'Author',
            selector: row => row.author,
            sortable: true,

        },


        {
            name: 'Comment', grow: 2, wrap: true,
            selector: row => row.comment,
            sortable: true,

        },
        {
            name: 'Rate', center: true,
            selector: row =>
                <div className="flex gap-1 w-full justify-center">

                    {[...Array(row.review_rate)].map((_, index) => (
                        <div key={index}>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#F4A825" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="black" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    ))}

                    {[...Array(5 - row.review_rate)].map((_, index) => (
                        <div key={index}>
                            <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_23_22)">
                                    <path d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z" fill="#ccc" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_23_22">
                                        <rect width="96" height="96" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    ))}
                </div>
            ,
            sortable: true,

        },

        {
            name: 'Date',
            selector: row => moment(row.review_date).format("ll"),
            sortable: true,

        },


        // {
        //     name: 'Status',
        //     center: true,
        //     selector: row => <Switch
        //         checked={row.status}
        //         onChange={() => updateStatus(row.id)}
        //         className={`${row.status ? 'bg-teal-600' : 'bg-gray-200'
        //             } relative inline-flex h-6 w-11 items-center rounded-full`}
        //     >
        //         <span className="sr-only">Enable notifications</span>
        //         <span
        //             className={`${row.status ? 'translate-x-6' : 'translate-x-1'
        //                 } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        //         />
        //     </Switch>,

        // },


        {
            name: 'Action',
            width: "12rem",
            center: true,
            selector: row => <div className="inline-flex gap-3">

                {/* <UpdateVender data={row} onUpdateVender={updateVender} /> */}
                <button onClick={() => deleteVender(row.id)} className="bg-red-500 p-2 text-white rounded text-sm">DELETE</button>
            </div>,
        },
    ];


    if (avatar == undefined) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                Loading...
            </div>
        )
    }

    return (
        <Layout>

            <div className="md:ml-72 relative bg-[#F7F7F7] ">

                <Navbar title="Review Management" />

                <div className="px-4 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
                    <div className="w-full min-h-screen bg-white rounded-xl shadow p-5">

                        <DataTable
                            customStyles={customStyles}
                            columns={columns}
                            data={filteredItems}
                            progressPending={loading}
                            pagination
                            paginationServer
                            paginationTotalRows={totalRows}
                            onChangeRowsPerPage={handlePerRowsChange}
                            onChangePage={handlePageChange}
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                            responsive
                            persistTableHead
                        />

                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Review