import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
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
  const nextMode = theme === "light" ? "dark" : "light";

  useEffect(() => {
    darkMode();
  }, []);

  const darkMode = () => {
    if (nextMode !== "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  };
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
    <div
      className={`${scrolled && "bg-black/60"} w-[calc(var(--vw, 1vw)*100)] z-20 fixed top-0 left-0 right-0`}
    >
      <div
        className={`flex text-black/75 dark:text-pink-50 scale-90 ${
          scrolled || "border-b-2 border-white/50"
        } justify-between max-w-7xlxl mx-auto px-6 items-center text-sm sm:text-lg md:text-xl`}
      >
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
            <Link
              href="/"
              className="hover:scale-[.98] hover:brightness-[2] transition-all"
            >
              Homepage
            </Link>
          )}
          {path === "/education" || (
            <Link
              href="/education"
              className="hover:scale-[.98] hover:brightness-[2] transition-all"
            >
              Education
            </Link>
          )}
          {path === "/projects" || (
            <Link
              href="/projects"
              className="hover:scale-[.98] hover:brightness-[2] transition-all"
            >
              Projects
            </Link>
          )}
          {path === "/ashbot" || (
            <Link
              href="/ashbot"
              className="hover:scale-[.98] hover:brightness-[2] transition-all"
            >
              AshBot
            </Link>
          )}
          {path === "/contact" || (
            <Link
              href="/contact"
              className="animate-pulse hover:scale-[.98] hover:brightness-[2] transition-all"
            >
              Contact
            </Link>
          )}

          <button
            className="hover:scale-[.98] hover:brightness-[2] transition-all"
            onClick={() => {
              setTheme(nextMode);
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
