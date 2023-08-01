import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";

import Image from "next/image";
import Logo from "@/public/Gold Luxury Business Logo.png";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsSun } from 'react-icons/bs'
import Menu from "./Dropdown";
import Dropdown from "./Dropdown";

function Header() {
  const { theme, setTheme } = useTheme();

  const currentMode = theme === 'dark' ? 'light' : 'dark'

  return (
    <div className="">
      <div className="flex justify-between max-w-6xl mx-auto  px-6 items-center font-light text-sm sm:text-lg md:text-xl">
        <Link href="/">
          <Image src={Logo} height={100} width={100} className="rounded-2xl" />
        </Link>

        <div className="space-x-4 hidden text-2xl sm:flex items-center">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact" className="animate-pulse">Contact Me</Link>
          <button onClick={() => setTheme(currentMode)}>
            {theme === 'dark' ? <BsSun/> : <BsFillMoonFill/>}
          </button>
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
