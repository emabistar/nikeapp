import React from "react"
import {hamburger } from "../assets/icons";
import {headerLogo} from "../assets/images";
import {navLinks}  from "../constants";

const Nav = () => {
  return (
   <header className="padding-x py-8 absolute z-10 w-full  ">
    <nav className="flex justify-between items-center max-container  ">
        <a href="/">
           <img src={headerLogo}
             alt="logo"
             width="130"
             height={29}
           />
        </a>
        <ul className="flex-1 flex max-lg:hidden justify-center items-center gap-16">
        { navLinks.map((item)=>(
        <li key={item.label}>
          <a  className=" font-monts errat leading-normal text-slate-gray text-lg" href={item.href} >
            {item.label}
          </a>
        </li>
        ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger}
              alt="Hamburger"
              width={25}
              height={25}/>
        </div>
    </nav>
    </header>
  )
}

export default Nav