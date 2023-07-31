import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import Image from "next/image";
import Logo from "@/public/Gold Luxury Business Logo.png";

function Header() {
  return (
    <div className="">
      <div className="flex justify-between max-w-6xl mx-auto  px-6 items-center font-light text-sm sm:text-lg md:text-xl">
        <Link href="/">
          <Image src={Logo} height={100} width={100} className="rounded-2xl" />
        </Link>

        <div className="space-x-4 hidden text-2xl sm:flex items-center">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact Me</Link>
          <MdOutlineDarkMode />
        </div>
        <RiMenu4Fill className="sm:hidden text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
