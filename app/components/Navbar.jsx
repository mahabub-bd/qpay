"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { logo } from "../../public";
import { MegaMenu, TogglerMenu, Modal } from "../components";
import { featuresList, navLinks, helpMenuLink } from "../constants";
import useScroll from "../hooks/useScroll";
import styles from "../styles/style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
 
  const { scrolled } = useScroll();

  return (
    <div
      className={`relative mx-auto py-3 bg-white ${scrolled && "scrolled"}`}
      id="home"
    >
      <nav
        className={`"  ${styles.boxWidth}  mx-auto flex px-4 lg:px-0 xl:px-0 justify-between items-center"  `}
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
  );
};

export default Navbar;
