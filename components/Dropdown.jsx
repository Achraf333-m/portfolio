import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const path = router.pathname;
  const currentMode = theme === "dark" ? "light" : "dark";
  const open = Boolean(anchorEl);
  const [dark, setDark] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        <RiMenu4Fill className="text-2xl text-black dark:text-white" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          {path === "/" || (
            <Link href="/">
              <MenuItem>Homepage</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/about" || (
            <Link href="/about">
              <MenuItem>AshBot</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/projects" || (
            <Link href="/projects">
              <MenuItem>Projects</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/contact" || (
            <Link href="/contact">
              <MenuItem className="font-bold animate-pulse">Contact</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/education" || (
            <Link href="/education">
              <MenuItem>Education</MenuItem>
            </Link>
          )}
        </div>
        <div>
          <MenuItem onClick={() => {setTheme(currentMode); setDark(!dark)}}>
            {dark ? "Light Mode" : "Dark Mode"}
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
