"use client"

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/scripts/constants";
import { CheckPath } from "@/scripts/check-path";
// import { FaBars, FaTimes } from "react-icons/fa"

export default function Nav () {
    return(
        <nav className="flexBetween items-center max-container padding-container relative z-5 py-8 px-8 text-white">
            <ul className="h-full gap-12 lg:flex">
                <Link className="mr-70 " href="/" key="1">
                    <Image src="/logo.svg" width="127" height="43" alt=""/>
                </Link>
                {NAV_LINKS.map((a) => (
                    <Link key={a.label} href={a.href} className={ CheckPath(a.href) ? "underline underline-offset-8 decoration-green-50 font-semibold" : ""}>
                        {a.label}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
