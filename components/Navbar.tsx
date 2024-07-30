"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AsideBar from "./asidebar";
import SideBar from "./sidebar";

interface linkProps {
	name: string;
	href: string;
}

const links: linkProps[] = [
	{ name: "Home", href: "/" },
	{ name: "States", href: "/states" },
	{ name: "Districts", href: "/districts" },
	{ name: "Cities", href: "/cities" },
	{ name: "Towns", href: "/towns" }
];

export default function Navbar() {
	const pathName = usePathname();
	return (
		<header className="bg-violet-500 w-full sticky top-0 shadow-lg z-30 shadow-indigo-400/40 max-w-full">
		<nav className="items-center max-w-7xl mx-auto max-lg:justify-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
		    <SideBar/>
			<div className="flex items-center text-xl text-white">
				<Link href="/">Population Census</Link>
			</div>
			<div className="flex items-center gap-x-8">
				<ul className="lg:flex gap-x-4 ml-14 hidden">
					{links.map((link, idx) => (
						<div key={idx}>
							{pathName === link.href ? (
								<li>
									<Link href={link.href} className="text-white text-base  font-bold">{link.name}</Link>
								</li>
							) : (
								<li>
									<Link href={link.href} className="text-gray-200 text-base  font-medium">{link.name}</Link>
								</li>
							)}
						
						</div>

					))}
				</ul>
				
			</div>
			</nav>
			
		</header>
	);
}