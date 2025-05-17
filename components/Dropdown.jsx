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
        className="!capitalize !text-white"
      >
        <RiMenu4Fill className="text-2xl " />
      </Button>
      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorReference="anchorEl"
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            className: "menu-fullscreen",
          },
        }}
        MenuListProps={{
          disablePadding: true,
        }}
      >
        <div>
          {path === "/" || (
            <Link href="/">
              <MenuItem className="">Homepage</MenuItem>
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
          {path === "/projects" || (
            <Link href="/projects">
              <MenuItem>Projects</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/ashbot" || (
            <Link href="/ashbot">
              <MenuItem>AshBot</MenuItem>
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
          <MenuItem
            onClick={() => {
              setTheme(nextMode);
              setDark(!dark);
            }}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
