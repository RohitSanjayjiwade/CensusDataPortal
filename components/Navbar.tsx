"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "./sidebar";
import RightSideBar from "./right-sidebar";
import { NAV_BAR_MENU } from "@/constants/menu";

export default function Navbar() {
	const pathName = usePathname();
	return (
		<header className="bg-violet-700 w-full sticky top-0 shadow-lg z-30 shadow-indigo-400/40 max-w-full">
		<nav className="items-center max-w-7xl mx-auto max-lg:justify-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
		    <SideBar/>
			<div className="flex items-center text-xl text-white">
				<Link href="/" className="transition hover:-rotate-2 hover:scale-110">Population Census</Link>
			</div>
			<div className="flex items-center gap-x-8">
				<ul className="lg:flex gap-x-4 ml-14 hidden">
					{NAV_BAR_MENU.map((link, idx) => (
						<div key={idx}>
							{pathName === link.path ? (
								<li>
									<Link href={link.path} className="text-white text-base  font-bold">{link.label}</Link>
								</li>
							) : (
								<li>
									<Link href={link.path} className="text-gray-100 hover:text-white text-base  font-medium">{link.label}</Link>
								</li>
							)}
						
						</div>

					))}
				</ul>
			</div>
			<RightSideBar/>
			</nav>
			
		</header>
	);
}