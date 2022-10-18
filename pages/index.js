import dynamic from 'next/dynamic';
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import DataTable from 'react-data-table-component';

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


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home({ token }) {

  const router = useRouter();
  // const [token, setToken] = useState(localStorage.getItem('token'))
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale, scroll: false });
  };


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
      <div className="ml-72 relative bg-[#F7F7F7] min-h-screen ">

        <Navbar title="Welcome back !" />

        <div className="px-4 pb-4 md:pb-10 md:px-10 w-full h-full relative grid grid-cols-3 gap-4 pt-4">
          <div className="w-full h-full row-span-2 col-span-2 bg-white rounded-xl shadow p-5">

          </div>

          <div className="w-full min-h-[250px] bg-white rounded-xl shadow p-5">

          </div>

          <div className="w-full min-h-[250px] bg-white rounded-xl shadow p-5">

          </div>

          <div className="col-span-3 h-[500px] w-full bg-white rounded-xl shadow p-5">
            <p className="text-xl font-medium mb-4">Action History</p>
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

              // subHeader
              // subHeaderComponent={subHeaderComponentMemo}
              responsive
              persistTableHead


            />
          </div>

        </div>


      </div>

    </Layout>
  )
}
