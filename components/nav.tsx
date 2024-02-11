import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/scripts/constants";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

const Nav = () => {
    return(
        <nav className="flexBetween items-center max-container padding-container relative z-5 py-5 text-white">
            <ul className="hidden h-full gap-12 lg:flex">
                <Link href="/" key="1">
                    <Image src="/logo.svg" width="169" height="57" alt=""/>
                </Link>
                {NAV_LINKS.map((a) => (
                    <Link key={a.label} href={a.href}>
                        {a.label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
