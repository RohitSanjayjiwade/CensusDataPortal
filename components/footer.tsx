"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_BAR_MENU } from "@/constants/menu";

export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className="bg-gray-100 pt-12 pb-20 mt-5 w-full max-w-full">
      <nav className=" max-w-7xl mx-auto  justify-between px-5 sm:px-6 py-5 lg:px-8 flex flex-wrap">
        <div className="flex items-center text-xl max-lg:w-full max-lg:justify-center max-lg:mb-3  text-white">
          <Link href="/" className="text-black text-base  font-bold">Population Census</Link>
        </div>
        <div className="flex items-center max-sm:w-[30%] max-sm:justify-center gap-x-8">
          <ul className="lg:flex gap-x-4  gap-2 flex-col">
            <li>
              <Link href="#" className="text-black text-base max-sm:text-sm  font-bold">Links</Link>
            </li>
            {NAV_BAR_MENU.map((link, idx) => (
              <div key={idx}>
                {pathName === link.path ? (
                  <li>
                    <Link href={link.path} className="text-indigo-500 max-sm:text-sm text-base  font-bold">{link.label}</Link>
                  </li>
                ) : (
                  <li>
                    <Link href={link.path} className="text-gray-1000 text-base  max-sm:text-sm font-normal">{link.label}</Link>
                  </li>
                )}
              
              </div>

            ))}
          </ul>
        </div>
       {/* <div className="flex items-center gap-x-8">
            <ul className="lg:flex gap-x-4  gap-2 flex-col">
              <li className="text-gray-1000 text-base  font-bold"> <a href="#">Links</a> </li>
              <li className="text-gray-1000 text-base  font-medium"> <a href="/">Home</a> </li>
              <li className="text-gray-1000 text-base  font-medium"> <a href="/states.php">States</a> </li>
              <li className="text-gray-1000 text-base  font-medium"> <a href="/district.php">District Data</a> </li>
              <li className="text-gray-1000 text-base  font-medium"> <a href="/city.php">Cities in India</a> </li>
              <li className="text-gray-1000 text-base  font-medium"> <a href="/towns.php">Towns in India</a> </li>
            </ul>
        </div>*/}
        <div className="flex items-center max-sm:w-[30%] max-sm:justify-center gap-x-8">
                <ul className="lg:flex gap-x-4  gap-2 flex-col">
                  <li className="text-gray-1000 text-base max-sm:text-sm  font-bold"> <a href="#">Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts.php">All facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/state.php">State Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/district.php">District Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/urban.php">Metropolitan Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/city.php">City Facts</a> </li>
                </ul>
        </div>
        <div className="flex items-center max-sm:w-[30%] max-sm:justify-center gap-x-8">
                <ul className="lg:flex gap-x-4 gap-2 flex-col">
                  <li className="text-gray-1000 text-base max-sm:text-sm  font-bold"> <a href="#">Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm  font-normal"> <a href="/facts.php">All facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm  font-normal"> <a href="/facts/state.php">State Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm  font-normal"> <a href="/facts/district.php">District Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm  font-normal"> <a href="/facts/urban.php">Metropolitan Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/city.php">City Facts</a> </li>
                </ul>
        </div>
        <div className="flex items-center max-sm:w-full max-sm:justify-center max-sm:mt-4 gap-x-8">
                <ul className="lg:flex gap-x-4  gap-2 flex-col">
                  <li className="text-gray-1000 text-base max-sm:text-sm  font-bold"> <a href="#">Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts.php">All facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/state.php">State Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/district.php">District Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/urban.php">Metropolitan Facts</a> </li>
                  <li className="text-gray-1000 text-base max-sm:text-sm font-normal"> <a href="/facts/city.php">City Facts</a> </li>
                </ul>
        </div>
      </nav>
      
    </footer>
  );
}