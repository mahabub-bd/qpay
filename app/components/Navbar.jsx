"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { logo, phone, email } from "../../public";
import { MegaMenu, TogglerMenu } from "../components";
import {
  featuresList,
  navLinks,
  helpMenuLink,
  socialMedia,
} from "../constants";
import useScroll from "../hooks/useScroll";
import styles from "../styles/style";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const { scrolled } = useScroll();

  return (
    <>
      <div className={` border-b-[1px] border-b-[#feeacd] sm:flex hidden`}>
        <div className={`${styles.boxWidth} flex justify-between py-2 `}>
          <div className="flex ">
            <Image src={phone} alt="phone_icon" className="w-[16px]" />
            <span className="ml-2">
              <a
                className="font-light  text-slate-900 text-[18px]"
                href="tel:0966727279"
              >
                09666727279
              </a>
            </span>
            <Image src={email} alt="phone_icon" className="w-[16px] ml-4" />
            <span className="ml-2">
              <a
                className=" text-[18px] text-slate-900 font-light"
                href="mailto: support@qpaybd.com.bd"
              >
                support@qpaybd.com.bd
              </a>
            </span>
          </div>
          <div className="flex flex-row items-center  ">
            {socialMedia.map((social) => (
              <Link
                key={social.id}
                href={social.link}
                className="cursor-pointer hover:text-qpayone [&:not(:last-child)]:mr-6 
                hover:opacity-80"
              >
                <Image
                  src={social.icon}
                  alt={social.id}
                  className={`w-[18px] h-[18px] object-contain `}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`relative mx-auto  bg-white ${
          scrolled && "sticky drop-shadow-lg"
        }`}
        id="home"
      >
        <nav
          className={`${styles.boxWidth}  mx-auto flex px-3 py-3   sm:px-0 justify-between items-center`}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="qpay__headerlogo"
              className="w-[100px] h-[42px] object-contain"
              priority
            />
          </Link>
          <ul
            className={`"list-none sm:flex hidden items-center justify-center flex-1"`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={` ${
                  nav.class
                } font-poppins font-semibold cursor-pointer text-[16px] relative ${
                  active === nav.title
                    ? "text-qpayone border-b-2 border-qpayone"
                    : "text-black"
                } [&:not(:last-child)]:mr-10`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/${nav.id}`}>{nav.title}</Link>

                <MegaMenu
                  menuLink={featuresList}
                  menu="features"
                  menuName="features-mega-menu"
                />
                <MegaMenu
                  menuLink={helpMenuLink}
                  menu="help"
                  menuName="help-mega-menu"
                />
              </li>
            ))}
          </ul>

          <TogglerMenu />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
