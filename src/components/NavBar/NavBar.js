import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => (
    <nav className="flex justify-between p-8 text-white md:px-12 md:py-10">
        <h1 className="text-2xl md:text-3xl">Predo.js</h1>
        <ul className="flex items-center gap-5 text-2xl md:text-3xl">
            <li><a href="http://techbydave.pl" target="_blank" rel="noopener noreferrer"><CgWebsite/></a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube/></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
        </ul>
    </nav>
);

export default NavBar;