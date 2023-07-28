
import Link from 'next/link'
import {MdOutlineDarkMode} from "react-icons/md"
import {RiMenu4Fill} from "react-icons/ri"

function Header() {
    
  return (
    <div className='flex justify-between max-w-6xl mx-auto py-10 px-6 items-center font-light text-sm sm:text-lg md:text-xl'>
        <Link href="/">
            logo - AD
        </Link>

        <div className='space-x-4 hidden sm:flex items-center'>
            <Link href="/about">
                About
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/contact">
                Contact Me
            </Link>
            <MdOutlineDarkMode />
        </div>
        <RiMenu4Fill className='sm:hidden text-2xl cursor-pointer' />
    </div>
  )
}

export default Header