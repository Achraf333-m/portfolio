import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Gold Luxury Business Logo.png";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";
import { useEffect } from "react";


function Header() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const path = router.pathname;
  const currentMode = theme === "dark" ? "light" : "dark";


  return (
    <div className="darkMode lightMode">
      <div className="flex border-b-2 scale-90 border-white/40 justify-between max-w-6xl mx-auto px-6 items-center font-light text-sm sm:text-lg md:text-xl">
        <Link href="/">
          <Image priority alt="website-logo" src={Logo} height={100} width={100} className="rounded-2xl" />
        </Link>

        <div className="space-x-4 hidden text-2xl md:flex items-center">
          {path === "/" || <Link href="/" className="hover:scale-110 transition-all">Homepage</Link>}
          {path === "/about" || <Link href="/about" className="hover:scale-110 transition-all">About</Link>}
          {path === "/projects" || <Link href="/projects" className="hover:scale-110 transition-all">Projects</Link>}
          {path === "/contact" || <Link href="/contact" className="animate-pulse hover:scale-110 transition-all">Contact</Link>}

          <button onClick={() => setTheme(currentMode)}>
            {currentMode === "dark" ? <BsFillMoonFill className="text-[20px]" /> : <BsSun className="text-[20px] hover:scale-110 transition-all" />}
          </button>
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
