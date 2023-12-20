import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header id="header" className="flex justify-between px-8 py-5 md:px-12 md:py-10 shadow-sm">
        <h1 className="text-xl md:text-3xl font-poppins"><NavLink to="/">Predo.js</NavLink></h1>
        <ul className="flex items-center gap-3 font-poppins">
            <li><NavLink to="/about">O mnie</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Kontakt</NavLink></li>
        </ul>
    </header>
);

export default Header;