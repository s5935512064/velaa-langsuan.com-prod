import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import CreateEvent from "../components/CreateEvent";
import Swal from 'sweetalert2'
import { Switch } from '@headlessui/react'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


const eventInfo = [
    { id: 1, name: "King Rama", detail: "", srcBG: "", srcText: "", secBorder: "", start_date: "September 21, 2022", end_date: "September 30, 2022", status: false, device: "mobile", },
    { id: 2, name: "Art Lanna with Artist", detail: "", srcBG: "", srcText: "", secBorder: "", start_date: "September 21, 2022", end_date: " September 21, 2022", status: true, device: "desktop", },

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




const Event = () => {

    const [filterText, setFilterText] = useState('');

    const filteredItems = !filterText ? eventInfo :
        eventInfo.filter(
            item => item.name.toLowerCase().includes(filterText.toLowerCase()),
        );


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const fetchUsers = async page => {
        setLoading(true);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`);

        setData(eventInfo);
        // setTotalRows(vendersInfo.total);
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`);

        setData(eventInfo);
        // setPerPage(newPerPage);
        setLoading(false);
    };

    const updateStatus = async (id) => {
        console.log("ddddd", id)

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


                <CreateEvent />

            </div>


        );

    }, [filterText]);


    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            width: "6rem",
            sortable: true,
            center: true,

        },
        {
            name: 'Name',
            grow: 2,
            selector: row => row.name,
            sortable: true,

        },
        {
            name: 'Device',
            selector: row =>
                row.device == "mobile" ? <div className=" relative ">
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1667 0.841707L1.83338 0.833374C0.916715 0.833374 0.175049 1.58337 0.175049 2.50004V17.5C0.175049 18.4167 0.916715 19.1667 1.83338 19.1667H10.1667C11.0834 19.1667 11.8334 18.4167 11.8334 17.5V2.50004C11.8334 1.58337 11.0834 0.841707 10.1667 0.841707ZM10.1667 15.8334H1.83338V4.16671H10.1667V15.8334Z" fill="black" />
                    </svg>


                </div> : <div><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4999 0.666626H2.49992C1.58325 0.666626 0.833252 1.41663 0.833252 2.33329V12.3333C0.833252 13.25 1.58325 14 2.49992 14H8.33325V15.6666H6.66659V17.3333H13.3333V15.6666H11.6666V14H17.4999C18.4166 14 19.1666 13.25 19.1666 12.3333V2.33329C19.1666 1.41663 18.4166 0.666626 17.4999 0.666626ZM17.4999 12.3333H2.49992V2.33329H17.4999V12.3333Z" fill="black" />
                </svg>

                </div>
            ,
            sortable: true,

        },
        {
            name: 'Preview',
            allowOverflow: true,
            selector: row => <div className="relative">

                <button className="hover:scale-110 duration-300" > <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor" />
                </svg>
                </button>
            </div>,
            sortable: true,

        },



        {
            name: 'Start_date',
            selector: row => row.start_date,
            sortable: true,

        },
        {
            name: 'End_date',
            selector: row => row.end_date,
            sortable: true,

        },


        {
            name: 'Status',
            width: "6rem",
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
            width: "15rem",
            center: true,
            selector: row => <div className="inline-flex gap-3">

                {/* <UpdateVender data={row} onUpdateVender={updateVender} /> */}
                <button onClick={() => deleteVender(row.id)} className="bg-teal-600 p-2 text-white rounded text-sm">UPDATE</button>
                <button onClick={() => deleteVender(row.id)} className="bg-red-500 p-2 text-white rounded text-sm">DELETE</button>
            </div>,
        },
    ];

    return (
        <Layout>
            <div className="md:ml-72 relative bg-[#F7F7F7] min-h-screen ">

                <Navbar title="Events Management" />

                <div className="px-4 pb-4 md:pb-10 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
                    <div className="w-full min-h-screen bg-white shadow p-5">

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

export default Event