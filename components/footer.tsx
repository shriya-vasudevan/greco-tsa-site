import { NAV_LINKS } from "@/scripts/constants";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="relative w-full">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div>
                    {NAV_LINKS.map((a) => (
                        <ul className="space-y-1">
                            <li>
                                <Link key={a.label} href={a.href}>
                                    {a.label}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
