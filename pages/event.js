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

const vendersInfo = [
    { id: 4, name: "Co limited" },
    { id: 1, name: "EL GAUCHO ARGENTINIAN STEAKHOUSE" },
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

    const filteredItems = !filterText ? vendersInfo :
        vendersInfo.filter(
            item => item.name.toLowerCase().includes(filterText.toLowerCase()),
        );


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const fetchUsers = async page => {
        setLoading(true);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`);

        setData(vendersInfo);
        // setTotalRows(vendersInfo.total);
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`);

        setData(vendersInfo);
        // setPerPage(newPerPage);
        setLoading(false);
    };


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
            name: 'No.',
            selector: row => row.id,
            width: "6rem",
            sortable: true,
            center: true,

        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,

        },

        {
            name: 'Gallery',
            // selector: row => row.name,
            sortable: true,

        },


        {
            name: 'Status',
            center: true,
            // selector: row => row.vender_active.data == 0 ? <p className="text-red-600 bg-red-200 w-fit px-4 py-1 rounded-2xl">Disable</p> : <p className="text-green-600 bg-green-200 w-fit px-4 py-1 rounded-2xl">Active</p>,

        },


        {
            name: 'Action',
            width: "15rem",
            center: true,
            selector: row => <div className="inline-flex gap-3">

                {/* <UpdateVender data={row} onUpdateVender={updateVender} /> */}
                <button className="bg-red-300 p-2 text-white rounded">DELETE</button>
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