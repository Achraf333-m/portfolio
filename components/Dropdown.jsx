import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const path = router.pathname;
  const nextMode = theme === "light" ? "dark" : "light";
  const open = Boolean(anchorEl);
  const [dark, setDark] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    darkMode();
  }, []);

  const darkMode = () => {
    if (nextMode === "light") {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={`${open ? "hidden" : "block"} !capitalize`}
      >
        <RiMenu4Fill className="text-2xl dark:text-white text-black" />
      </Button>

      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        slotProps={{
          paper: {
            className:
              " w-screen p-2 h-screen  gap-4 bg-gray-300/50 dark:bg-black/50 backdrop-blur dark:text-white p-6",
          },
        }}
        MenuListProps={{
          disablePadding: true,
        }}
      >
        {/* Close Button at top-right */}
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 text-black dark:text-white z-50"
        >
          <FaTimes className="text-2xl" />
        </button>
        <div className="pt-16">
          {/* Menu Items */}
          {path !== "/" && (
            <Link href="/">
              <MenuItem className="font-light text-3xl">Homepage</MenuItem>
            </Link>
          )}
          {path !== "/education" && (
            <Link href="/education">
              <MenuItem className="font-light text-3xl">Education</MenuItem>
            </Link>
          )}
          {path !== "/projects" && (
            <Link href="/projects">
              <MenuItem className="font-light text-3xl">Projects</MenuItem>
            </Link>
          )}
          {path !== "/ashbot" && (
            <Link href="/ashbot">
              <MenuItem className="font-light text-3xl">AshBot</MenuItem>
            </Link>
          )}
          {path !== "/contact" && (
            <Link href="/contact">
              <MenuItem className="font-light text-3xl">Contact</MenuItem>
            </Link>
          )}
          <MenuItem
            onClick={() => {
              setTheme(nextMode);
              setDark(!dark);
              setTimeout(() => {
                handleClose();
              }, 50);
            }}
            className="font-light text-3xl"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
