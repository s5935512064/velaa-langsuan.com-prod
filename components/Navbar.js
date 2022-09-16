import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Clock from 'react-live-clock';
import moment from "moment";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const listMenu = [
    { name: "Home", href: "/" },
    { name: "Concept", href: "/concept" },
    { name: "Residence", href: "/residence" },
    { name: "Gallery", href: "/gallery" },
    { name: "Service", href: "/service" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
];

const Navbar = (props) => {
    const router = useRouter();

    return (
        <>
            <div className="w-full h-20 bg-white rounded shadow-sm px-4 md:px-10 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-medium ">{props.title}</h1>
                    <p className="text-xs ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nostrum?</p>
                </div>

                <div className="text-right">


                    <Clock format="HH:mm:ss" ticking={true} noSsr={true} className="text-xl font-medium " />
                    <p className="text-xs ">  {moment().format("LL")}</p>
                </div>

            </div>
        </>
    );
};

export default Navbar;