import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png"
import Container from "../Container/Container";

const Navbar = () => {
  const navItems = (
    <>
      <li className="text-lg">
        <Link href="/home">Home</Link>
      </li>
      <li className="text-lg">
        <Link href="/about">About</Link>
      </li>
      <li className="text-lg">
        <Link href="/about">FAQs</Link>
      </li>
      <li className="text-lg">
        <Link href="/blog">Blog</Link>
      </li>
      <li className="text-lg">
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
  return (
   <div>
    <Container>
    <div className=" sticky mt-5  h-[100px] navbar bg-[#FFFFFF] px-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
         <a >
         <Image
            src={logo}
            width={200}
            height={200}
            alt="Picture of the Bus"
          />
         </a>
         
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end ">
        <button className="bg-[#26A85E] text-white px-5 py-2 rounded-md uppercase">Buy Tickets</button>
       
      </div>
    </div>
    </Container>
   </div>
  );
};

export default Navbar;
