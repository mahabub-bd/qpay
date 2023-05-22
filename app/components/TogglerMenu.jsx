'use client'

import { close, menu } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState } from "react";

// import { MobileHelpMenu } from "../components";
import { navLinks } from '../constants';

const TogglerMenu = () => {
const [toggle, setToggle] = useState(false); 
const [active, setActive] = useState("Home");   
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center relative">
      <Image
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] cursor-pointer object-contain"
        onClick={() => setToggle((prev) => !prev)}
      />

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl sidebar z-50 `}
      >
        <ul className=" list-none flex justify-end flex-col flex-center items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-qpayone" : "text-dimWhite"
              }  [&:not(:last-child)]:mb-4`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`/#${nav.id}`} scroll={false}>
                {nav.title}
                {/* <MobileHelpMenu /> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TogglerMenu;