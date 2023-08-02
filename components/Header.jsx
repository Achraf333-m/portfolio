import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Gold Luxury Business Logo.png";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";


function Header() {
  const { theme, setTheme } = useTheme('dark');
  const router = useRouter();
  const path = router.pathname;
  const currentMode = theme === "dark" ? "light" : "dark";

  return (
    <div className="">
      <div className="flex border-b-2 border-white/40 justify-between max-w-6xl mx-auto px-6 items-center font-light text-sm sm:text-lg md:text-xl">
        <Link href="/">
          <Image src={Logo} height={100} width={100} className="rounded-2xl" />
        </Link>

        <div className="space-x-4 hidden text-2xl md:flex items-center">
          {path === "/" || <Link href="/">Homepage</Link>}
          {path === "/about" || <Link href="/about">About</Link>}
          {path === "/projects" || <Link href="/projects">Projects</Link>}
          {path === "/contact" || <Link href="/contact" className="animate-pulse">Contact</Link>}

          <button onClick={() => setTheme(currentMode)}>
            {theme === "dark" ? <BsSun /> : <BsFillMoonFill />}
          </button>
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
