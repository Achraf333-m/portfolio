import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Gold Luxury Business Logo.png";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Header() {
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  const currentMode = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    darkMode()
  }, []);

  const darkMode = () => {
    if (currentMode !== 'dark') {
      setDark(true)
    } else {
      setDark(false)
    }
  }
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    };
  }, []);

  return (
    <div className={ `${scrolled && 'bg-black/80'} transition-all duration-300 fixed top-0 left-0 right-0`}>
      <div className={`flex text-pink-50 scale-90 ${scrolled ? 'border-b-0 border-white/0' : 'border-b-2 border-white/40'} transition-all duration-300 justify-between max-w-7xlxl mx-auto px-6 items-center font-light text-sm sm:text-lg md:text-xl`}>
        <Link href="/">
          <Image
            priority
            alt="website-logo"
            src={Logo}
            height={100}
            width={100}
            className="rounded-2xl"
          />
        </Link>

        <div className="space-x-4 hidden text-2xl md:flex items-center">
          {path === "/" || (
            <Link href="/" className="hover:scale-110 transition-all">
              Homepage
            </Link>
          )}
          {path === "/about" || (
            <Link href="/about" className="hover:scale-110 transition-all">
              AshBot
            </Link>
          )}
          {path === "/projects" || (
            <Link href="/projects" className="hover:scale-110 transition-all">
              Projects
            </Link>
          )}
          {path === "/contact" || (
            <Link
              href="/contact"
              className="animate-pulse hover:scale-110 transition-all"
            >
              Contact
            </Link>
          )}
          {path === "/education" || (
            <Link
              href="/education"
              className="hover:scale-110 transition-all"
            >
              Education
            </Link>
          )}

          <button
            className="hover:scale-110 transition-all"
            onClick={() => {
              setTheme(currentMode);
              setDark(!dark);
            }}
          >
            {dark ? (
              <BsSun className="text-[20px] " />
            ) : (
              <BsFillMoonFill className="text-[20px]" />
            )}
          </button>
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
