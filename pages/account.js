import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import DataTable from 'react-data-table-component';
import { Disclosure } from '@headlessui/react'
import Image from "next/image";
import Swal from 'sweetalert2'
import UpdateUser from "../components/UpdateUser";
import { Switch } from '@headlessui/react'
import axios from "axios";
import moment from "moment/moment";
import useSWR, { mutate } from "swr";


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
        },
    },
};


const Account = () => {

    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState(true);
    const [status, setStatus] = useState(true);
    const [password, setPassword] = useState("");
    const [passShow, setPassShow] = useState(false);
    const [cPassword, setCPassword] = useState("");
    const [CPassShow, setCPassShow] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState(true);
    const [error, setError] = useState(null);
    const [regisError, setRegisError] = useState(null)
    const [refresh, setRefresh] = useState(false)


    const fetchUsers = async page => {

        setLoading(true);
        const response = await axios.get(`http://localhost:4500/users?page=${page}&per_page=${perPage}&delay=1`);

        const arraySorted = response.data.results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

        setData(arraySorted);
        setTotalRows(response.data.total);
        setLoading(false);

    };

    const updateStatus = async (id, oldStatus, oldPhone, oldPosition) => {

        const updateURL = `http://localhost:4500/users/${id}`
        const status = {
            status: !oldStatus,

        }

        await axios.patch(updateURL, status, { withCredentials: true })
            .then((res) => setRefresh(!refresh))
            .catch((err) => console.log(err))
    }

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);
        const response = await axios.get(`http://localhost:4500/users?page=${page}&per_page=${newPerPage}&delay=1`);

        const arraySorted = response.data.results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

        setData(arraySorted);
        setPerPage(newPerPage);
        setLoading(false);
    };

    const updated = () => {
        setRefresh(!refresh)
    }

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

                const deleteURL = `http://localhost:4500/users/${id}`

                await axios.delete(deleteURL, { withCredentials: true })
                    .then((res) => setRefresh(!refresh))
                    .catch((err) => console.log(err))
            }
        })
    }

    useEffect(() => {
        fetchUsers(1); // fetch page 1 of users
    }, [refresh]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const account = {
            email: email,
            password: password,
            firstName: firstname,
            lastName: lastname,
            phone: "",
            position: "",
            profileImg: "",
            role: role,
            status: status
        }
        try {
            const res = await axios.post(
                `http://localhost:4500/auth/register`, account,
                { withCredentials: true }
            )
            console.log(res)

            if (res.status == 201) {
                Swal.fire({
                    title: 'Success!',
                    text: "Your registration has been successfully",
                    icon: 'success',

                }).then(async (result) => {
                    if (result.isConfirmed) {
                        document.getElementById("create-user-form").reset();
                        setRegisError("")
                        setRefresh(!refresh);
                        // onTableChange("update")
                    }
                })
            }
        } catch (e) {
            console.log(e.response.data)
            setRegisError(e.response.data.message)
        }
    }

    const subHeaderComponentMemo = useMemo(() => {

        function isValidEmail(email) {
            return /\S+@\S+\.\S+/.test(email);
        }

        function isValidPassword(validPassword) {
            if (password === validPassword || cPassword === validPassword) {
                return true
            } else {
                return false
            }
        }

        const handlePassword = (e) => {
            setPassword(e.target.value);
            const result = isValidPassword(e.target.value)

            if (result || e.target.value == "" || cPassword == "") {
                setCPasswordClass(true)
            } else {
                setCPasswordClass(false)
            }

        }


        const handleCPassword = (e) => {
            setCPassword(e.target.value);
            const result = isValidPassword(e.target.value)

            if (result || e.target.value == "") {
                setCPasswordClass(true)
            } else {
                setCPasswordClass(false)
            }

        }


        const handleChange = async e => {
            const result = isValidEmail(e.target.value)
            if (result || e.target.value == "") {
                setEmail(e.target.value)
                setError(null);
            } else {
                setError('Email is invalid');
            }
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

                                    <input className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 placeholder:text-sm placeholder:font-light " placeholder="search by username" onChange={(e) => setFilterText(e.target.value)} type="text" name="search" />
                                </div>

                                <Disclosure.Button className="flex-shrink-0 bg-black text-white px-4 py-3 text-sm shadow-md rounded-lg inline-flex gap-2 justify-center">
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.00008 0.666626C4.40008 0.666626 0.666748 4.39996 0.666748 8.99996C0.666748 13.6 4.40008 17.3333 9.00008 17.3333C13.6001 17.3333 17.3334 13.6 17.3334 8.99996C17.3334 4.39996 13.6001 0.666626 9.00008 0.666626ZM13.1667 9.83329H9.83341V13.1666H8.16675V9.83329H4.83341V8.16663H8.16675V4.83329H9.83341V8.16663H13.1667V9.83329Z" fill="currentColor" />
                                        </svg>

                                    </span>
                                    Create Account

                                </Disclosure.Button>
                            </div>

                            <Disclosure.Panel className="pt-4 pb-2 ">

                                <form id="create-user-form" onSubmit={handleSubmit} className="w-full gap-4 flex-col flex items-center justify-center ">

                                    <div className="max-w-xl flex flex-wrap w-full gap-2 justify-center">

                                        <div className="flex-col flex  gap-2 w-full md:w-fit ">
                                            <label className="text-sm  shrink-0">Email:</label>
                                            <div className={classNames(error != null ? "border-red-500" : "border-gray-300", "flex items-center py-2 px-3 border  rounded-md")} >
                                                <input onChange={handleChange} type="email" name="email" id="email" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                            </div>
                                            <h2 className="text-red-500 text-sm">{error}</h2>
                                        </div>

                                        <div className="flex-col flex  gap-2 w-full md:w-fit ">
                                            <label className="text-sm  shrink-0">Permission:</label>
                                            <div className="min-w-[250px] flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                <select onChange={(e) => setRole(e.target.value)} name="role" id="role" className=" w-full outline-none border-none  placeholder:text-sm pl-1">
                                                    <option value={true}>Admin</option>
                                                    <option value={false}>User</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="flex-col flex w-full md:w-fit  gap-2">
                                            <label className="text-sm shrink-0">Firstname:</label>
                                            <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                <input onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname" id="firstname" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                            </div>

                                        </div>

                                        <div className="flex-col flex w-full md:w-fit  gap-2">
                                            <label className="text-sm shrink-0">Lastname:</label>
                                            <div className=" flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                <input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname" id="lastname" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />
                                            </div>

                                        </div>

                                        <div className="flex-col flex  gap-2 w-full md:w-fit ">
                                            <label className="text-sm  shrink-0">Password:</label>
                                            <div className="relative flex items-center py-2 px-3 border border-gray-300 rounded-md">
                                                <input onChange={handlePassword} type={passShow ? "text" : "password"} name="password" id="password" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />

                                                <div onClick={() => setPassShow(!passShow)} className="cursor-pointer absolute right-2 opacity-25">

                                                    {!passShow ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                                        <div className="flex-col flex  gap-2 w-full md:w-fit ">
                                            <label className="text-sm  shrink-0">Confirm password:</label>
                                            <div className={classNames(!cPasswordClass ? "border-red-500" : "border-gray-300", "relative flex items-center py-2 px-3 border rounded-md")}

                                            >
                                                <input onChange={handleCPassword} type={CPassShow ? "text" : "password"} name="confirmPassword" id="confirmPassword" className="w-full outline-none border-none  placeholder:text-sm pl-1" required />

                                                <div onClick={() => setCPassShow(!CPassShow)} className="cursor-pointer absolute right-2 opacity-25">

                                                    {!CPassShow ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                            {!cPasswordClass ? <div className="text-red-500 text-sm"> Passwords did not match </div> : ''}
                                        </div>

                                    </div>


                                    {regisError != "" ? <p className="text-red-500 text-sm">{regisError}</p> : null}
                                    <div className="max-w-sm w-36  flex justify-around gap-3 relative">
                                        <button type="submit" className="w-full px-6 py-2 text-white bg-black rounded-3xl border border-black">Submit</button>

                                    </div>


                                </form>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </div >


        );

    }, [filterText, error, , password, passShow, CPassShow, cPasswordClass, role, email, firstname, lastname, regisError]);


    const filteredItems = !filterText ? data :
        data.filter(
            item => item.firstName.toLowerCase().includes(filterText.toLowerCase()),
        );

    const columns = [
        {
            name: 'ID', sortable: true,
            selector: (row, index) => index + 1,
        },
        {
            name: 'Email', sortable: true, grow: 2,
            selector: row => row.email,
        },
        {
            name: 'Name', sortable: true,
            selector: row => row.firstName + " " + row.lastName,
        },
        {
            name: 'Last_login',
            selector: row => moment(row.last_login).format('lll'),
        },
        {
            name: 'Create_date',
            selector: row => moment(row.created_at
            ).format('ll'),
        },
        {
            name: 'Status', center: true,
            selector: row => <Switch
                checked={row.status}
                onChange={() => updateStatus(row.id, row.status, row.phone, row.position)}
                className={`${row.status ? 'bg-teal-600' : 'bg-gray-200 '
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
            name: 'Permission', center: true,
            selector: row => row.role ? "Admin" : "User",
        },

        {
            name: 'Action',
            width: "12rem",
            selector: row => <div className="inline-flex gap-3">

                {/* <UpdateVender data={row} onUpdateVender={updateVender} /> */}
                <UpdateUser data={row} onUpdated={updated} />
                <button onClick={() => deleteVender(row.id)} className="bg-red-500 p-2 text-white rounded text-sm">DELETE</button>
            </div>,
        },
    ];


    if (!data) return <div>Loding...</div>



    return (
        <Layout>
            <div className="md:ml-72 relative bg-[#F7F7F7] min-h-screen ">

                <Navbar title="Create Account" />

                <div className="px-4 pb-4 md:pb-10 md:px-10 w-full h-full relative flex flex-col gap-4 pt-4">
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

export default Account