import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const NavBar = () => (
    <nav className="flex justify-between p-8 md:px-12 md:py-10">
        <FaRegLightbulb className="hover:cursor-pointer text-2xl"/>
        <h1 className="text-2xl md:text-3xl">Predo.js</h1>
        <IoShareSocial className="hover:cursor-pointer text-2xl"/>
    </nav>
);

export default NavBar;