import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";
import Swal from 'sweetalert2'
import { Switch } from '@headlessui/react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const carousel = [
    { id: 1, alt: "garden", src: "/assets/08.webp", catagory: "market", create_date: "September 21, 2022", status: false },
    { id: 2, alt: "garden", src: "/assets/08.webp", catagory: "market", create_date: "September 21, 2022", status: true },
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



const Gallery = () => {
    const [filterText, setFilterText] = useState('');

    const filteredItems = !filterText ? carousel :
        carousel.filter(
            item => item.alt.toLowerCase().includes(filterText.toLowerCase()),
        );


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const fetchUsers = async page => {
        setLoading(true);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`);

        setData(carousel);
        // setTotalRows(vendersInfo.total);
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`);

        setData(carousel);
        // setPerPage(newPerPage);
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

                // let deleteURL = `http://localhost:3000/api/vender/${id}`

                // await axios.delete(deleteURL, {
                //     data: id
                // })
                //     .then((res) => console.log(res))
                //     .catch((err) => console.log(err))

                onTableChange("update")
            }
        })
    }

    const updateStatus = async (id) => {
        // console.log("ddddd", id)

    }

    useEffect(() => {
        fetchUsers(1); // fetch page 1 of users

    }, []);



    const updateVender = () => {
        onTableChange("update")
    }


    const subHeaderComponentMemo = useMemo(() => {
        // const handleClear = () => {
        //     if (filterText) {
        //         setResetPaginationToggle(!resetPaginationToggle);
        //         setFilterText('');
        //     }
        // };

        // <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />

        return (
            <div className="w-full mb-4  flex justify-between items-center h-full">
                <div className="relative h-fit ">
                    <div className="flex absolute inset-y-0 left-0  pl-3 pointer-events-none items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="gray" role="img" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
                        </svg>
                    </div>

                    <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder:text-sm placeholder:font-light " placeholder="Search by Vender Name" onChange={(e) => setFilterText(e.target.value)} type="text" name="search" />
                </div>


                {/* <UploadImage /> */}

            </div>


        );

    }, [filterText]);

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

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: "6rem",
            sortable: true,
            center: true,

        },
        {
            name: 'Alt',
            selector: row => row.alt,
            sortable: true,

        },


        {
            name: 'Preview',
            selector: row => <div className="relative py-4 "> <div className="w-20 h-20 relative"><Image href={row.src}
                data-fancybox={row.id} src={row.src} alt={row.alt} layout="fill" objectFit="cover" objectPosition={"center"} className="cursor-pointer" /> </div></div>,
            sortable: true,

        },
        {
            name: 'Catagory',
            selector: row => row.catagory,
            sortable: true,

        },

        {
            name: 'Upload_date',
            selector: row => row.create_date,
            sortable: true,

        },


        {
            name: 'Status',
            center: true,
            selector: row => <Switch
                checked={row.status}
                onChange={() => updateStatus(row.id)}
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
    return (
        <Layout>
            <div className="md:ml-72 relative bg-[#F7F7F7] min-h-screen ">

                <Navbar title="Gallery Management" />

                <div className="px-4 pb-4 md:pb-10 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
                    <div className="w-full min-h-screen bg-white rounded-xl shadow p-5">

                        {/* <Disclosure>
                            {({ open }) => (
                                <>
                                    <div className="w-full flex justify-end">

                                        <Disclosure.Button className="bg-black text-white px-4 py-3 text-sm shadow-md rounded-lg inline-flex gap-2">
                                            <span>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.00008 0.666626C4.40008 0.666626 0.666748 4.39996 0.666748 8.99996C0.666748 13.6 4.40008 17.3333 9.00008 17.3333C13.6001 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6001 0.666626 9.00008 0.666626ZM13.1667 9.83329H9.83341V13.1666H8.16675V9.83329H4.83341V8.16663H8.16675V4.83329H9.83341V8.16663H13.1667V9.83329Z" fill="currentColor" />
                                                </svg>

                                            </span>
                                            Upload Image

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
                        </Disclosure> */}

                        <DataTable
                            customStyles={customStyles}
                            columns={columns}
                            data={data}
                            // fixedHeaderScrollHeight="300px"
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

export default Gallery