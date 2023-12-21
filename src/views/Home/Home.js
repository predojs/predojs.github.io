import React from "react";
import { motion } from "framer-motion";
import Avatar from "../../assets/avatar.jpg";
import { NavLink } from "react-router-dom";
import ButtonBg from "../../components/ButtonBg/ButtonBg";
import Button from "../../components/Button/Button";

const Home = () => (
    <motion.div 
        className="text-center flex flex-col items-center gap-5 px-10 mb-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: .2, ease: "easeInOut" }}
    >
        <img src={Avatar} alt="avatar" className="rounded-full border-4 border-white drop-shadow-xl w-44 h-44 " loading="lazy"/>
        <h1 className="text-3xl font-semibold text-[#395886] font-poppins">Dawid Predecki</h1>
        <h3 className="text-xl font-light font-poppins">Web Developer</h3>
        <p className="pb-4 max-w-lg">Stworzę dla Ciebie stronę internetową, która będzie odzwierciedlać Twoją markę i spełniać Twoje oczekiwania. Odezwij się i razem stwórzmy Twoje miejsce w sieci!</p>
        <div className="flex gap-6 tracking-wider">
            <NavLink to="/contact"><ButtonBg text="Skontaktuj się"/></NavLink>
            <NavLink to="/portfolio"><Button text="Portfolio"/></NavLink>
        </div>
    </motion.div>
);

export default Home;