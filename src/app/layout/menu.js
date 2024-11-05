"use client"
import Image from "next/image";
import Link from "next/link";
import {Menu as MenuI} from "react-feather";

const Menu = () => {
  return (
    <div>
      <div className='flex w-full max-w-screen-lg mx-auto items-center pt-2 text-white px-3 md:px-0'>
        <div className='flex-1'>
          <Link href='/'>
           <div className='flex items-center gap-6'>
             <Image src='/logo.png' alt='' width={32} height={32}/>
             <span style={{fontFamily:'Nunito, sans-serif'}} className='text-2xl font-semibold mt-1'>Starlight Map</span>
           </div>
          </Link>
        </div>
        <div className='group'>
          <span className='md:hidden peer h-12 w-12 flex items-center justify-center'>
            <MenuI/>
          </span>
          <div
            className='group-hover:flex z-[100000] md:flex hidden py-6 md:py-0 flex-col md:flex-row absolute md:static right-2 bg-gray-200 text-black md:text-white rounded-lg md:rounded-none shadow-xl md:shadow-none md:bg-transparent top-12 items-center whitespace-nowrap gap-3'>
            <MenuItem link='editor'>Create Star Map</MenuItem>
            <MenuItem link='about'>About Us</MenuItem>
            <MenuItem link='contactus'>Contact</MenuItem>
            <MenuItem link='faq'>FAQ</MenuItem>
          </div>
        </div>
      </div>
    </div>
  )
}

const MenuItem = ({children, link}) => {
  return (
    <Link href={link} className='py-2 px-4 hover:md:bg-gray-400 hover:bg-white md:w-auto w-full block md:inline hover:bg-opacity-20 cursor-pointer duration-150 select-none'>
      {children}
    </Link>
  )
}

export default Menu