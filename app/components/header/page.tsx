"use client"
import Image from "next/image"
import Link from "next/link";
import {BellIcon, SearchIcon} from '@heroicons/react/solid';
import { useEffect, useState } from "react";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY > 0){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return ( 
  <header className={`${isScrolled && 'bg-[#141414]'}`}>
    <div className="flex items-center space-x-2 md:space-x-10">
    < Image
          // https://rb.gy/ulxxee
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          alt="netflix-logo"
          height={100}
          className="cursor-pointer object-contain"
          priority={true}
    />
      <ul className="hidden space-x-4 md:flex">
        <li className="headerLink">Home</li>
        <li className="headerLink">TV Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My List</li>
      </ul>
    </div>
    <div className="flex items-center space-x-4 text-sm font-light">
      <SearchIcon className="hidden h-6 w-6 sm:inline" />
      <p className="hidden lg:inline">Kids</p>
      <BellIcon className="h-6 w-6" />
      <Link href="/about">
        <Image 
            // Not working:
            // src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            src="/netflix-avatar.png"
            alt="profile1"
            width={30}
            height={30}
            className="cursor-pointer rounded" 
        />
      </Link>
    </div>
  </header>
  )
};