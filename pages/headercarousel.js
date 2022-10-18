import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";
import UploadImage from "../components/UploadImage";
import Swal from 'sweetalert2'
import { Switch } from '@headlessui/react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import axios from "axios";
import useSWR, { mutate } from 'swr'
import moment from 'moment';

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const carousel = [
    { id: 1, alt: "garden", src: "/assets/08.webp", create_date: "September 21, 2022", status: false },
    { id: 2, alt: "garden", src: "/assets/08.webp", create_date: "September 21, 2022", status: true },
]

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
        },
    },
};

// const url = `http://localhost:4500/carousels?page=1&per_page=10&delay=1`
// const fetcher = (url) => axios.get(url).then((res) => res.data);


const Headercarousel = () => {

    // const { data: carousels, error } = useSWR(url, fetcher)

    const [filterText, setFilterText] = useState('');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [refresh, setRefresh] = useState(false)


    const fetchUsers = async page => {
        setLoading(true);
        const response = await axios.get(`http://localhost:4500/carousels?page=${page}&per_page=${perPage}&delay=1`);

        const arraySorted = response.data.results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setData(arraySorted);
        setTotalRows(response.data.total);
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };


    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        const response = await axios.get(`http://localhost:4500/carousels?page=${page}&per_page=${newPerPage}&delay=1`);
        const arraySorted = response.data.results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

        setData(arraySorted);
        setPerPage(newPerPage);
        setLoading(false);
    };


    useEffect(() => {
        fetchUsers(1); // fetch page 1 of users
    }, [refresh]);


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
                const deleteURL = `http://localhost:4500/carousels/${id}`

                await axios.delete(deleteURL, { withCredentials: true })
                    .then((res) => setRefresh(!refresh))
                    .catch((err) => console.log(err))
            }
        })
    }

    const updateStatus = async (id, oldStatus) => {

        const updateURL = `http://localhost:4500/carousels/${id}`

        const status = {
            status: !oldStatus
        }

        await axios.patch(updateURL, status, { withCredentials: true })
            .then((res) => setRefresh(!refresh))
            .catch((err) => console.log(err))
    }


    const subHeaderComponentMemo = useMemo(() => {
        // const handleClear = () => {
        //     if (filterText) {
        //         setResetPaginationToggle(!resetPaginationToggle);
        //         setFilterText('');
        //     }
        // };

        // <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />

        const uploadImage = () => {
            setRefresh(!refresh)
        }

        return (

            <div className="w-full mb-4  h-full">

                <div className="w-full flex flex-col md:flex-row justify-between gap-2">

                    <div className="relative h-fit">
                        <div className="flex absolute inset-y-0 left-0  pl-3 pointer-events-none items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="gray" role="img" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
                            </svg>
                        </div>

                        <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder:text-sm placeholder:font-light " placeholder="Search by name" onChange={(e) => setFilterText(e.target.value)} type="text" name="search" />
                    </div>

                    <UploadImage onUpload={uploadImage} />
                </div>




            </div>




        );

    }, [filterText, refresh]);


    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            Thumbs: false,

            Toolbar: {
                display: [
                    { id: "prev", position: "center" },
                    { id: "counter", position: "center" },
                    { id: "next", position: "center" },
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "download",
                    "thumbs",
                    "close",
                ],
            },
            Image: {
                Panzoom: {
                    zoomFriction: 0.7,
                    maxScale: function () {
                        return 5;
                    },
                },
            },
        });
    }, []);


    const filteredItems = !filterText ? data :
        data.filter(
            item => item.name.toLowerCase().includes(filterText.toLowerCase())
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
            name: 'Alt',
            selector: row => row.name,
            sortable: true,

        },


        {
            name: 'Preview',
            selector: row => <div className="relative py-4 "> <div className="w-20 h-20 relative"><Image href={`http://localhost:4500${row.src}`}
                data-fancybox={row.id} src={`http://localhost:4500${row.src}`} alt={row.name} layout="responsive"

                width={40}
                height={40}
                objectFit="cover"
                objectPosition={"center"} className="cursor-pointer" /> </div></div>,
            sortable: true,

        },

        {
            name: 'Upload_date',
            selector: row => moment(row.review_date).format("ll"),
            sortable: true,

        },


        {
            name: 'Status',
            center: true,
            selector: row => <Switch
                checked={row.status}
                onChange={() => updateStatus(row.id, row.status)}
                className={`${row.status ? 'bg-teal-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${row.status ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
            </Switch>,

        },


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

                <Navbar title="Carousel Management" />

                <div className="px-4 pb-4 md:pb-10 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
                    <div className="w-full min-h-screen bg-white shadow p-5">

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

export default Headercarousel