"use client";


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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const darkMode = () => {
      if (nextMode !== "dark") {
        setDark(true);
      } else {
        setDark(false);
      }
    };

    darkMode();
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
      className={` transition-all duration-[450ms] z-20 w-full
  bg-white/10 dark:bg-black/20
  backdrop-blur-md
  border-b border-white/10 dark:border-black/20
  text-white"`}
    >
      <div
        className={` transition-all duration-100  flex text-black/75 dark:text-pink-50 scale-90 justify-between max-w-7xlxl mx-auto px-6 items-center text-sm sm:text-lg md:text-xl`}
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
              className="header-element"
            >
              Homepage
            </Link>
          )}
          {path === "/education" || (
            <Link
              href="/education"
              className="header-element"
            >
              Education
            </Link>
          )}
          {path === "/projects" || (
            <Link
              href="/projects"
              className="header-element"
            >
              Projects
            </Link>
          )}
          {path === "/ashbot" || (
            <Link
              href="/ashbot"
              className="header-element"
            >
              AshBot
            </Link>
          )}
          {path === "/contact" || (
            <Link
              href="/contact"
              className="header-element"
            >
              Contact
            </Link>
          )}

          <button
            className="header-element"
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
