import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from 'next-themes';
import { useState } from 'react'
import { RiMenu4Fill } from "react-icons/ri";
import Link from 'next/link';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null)
  const { theme, setTheme } = useTheme()
  const currentMode = theme === 'dark' ? 'light' : 'dark'
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        <RiMenu4Fill className="text-2xl text-black dark:text-white"/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href="/">
        <MenuItem>Homepage</MenuItem>
        </Link>
        <Link href="/about">
        <MenuItem>About me</MenuItem>
        </Link>
        <Link href="/projects">
        <MenuItem>My projects</MenuItem>
        </Link>
        <Link href="/contact">
        <MenuItem>Contact me</MenuItem>
        </Link>
        <MenuItem onClick={() => setTheme(currentMode)}>Dark Mode</MenuItem>
      </Menu>
    </div>
  )
}