import React from "react";
import { BsFilePerson, BsFileEarmarkText } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => (
    <motion.div
        className="flex justify-center items-center gap-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: .2, ease: "easeInOut" }}
    >
        <div className="flex flex-col items-center gap-3 hover:cursor-pointer hover:gap-5 duration-150 hover:drop-shadow-xl">
            <BsFilePerson className="text-9xl"/>
            <h2 className="font-poppins text-3xl">O mnie</h2>
        </div>
        <div className="flex flex-col items-center gap-3 hover:cursor-pointer hover:gap-5 duration-150 hover:drop-shadow-xl">
            <BsFileEarmarkText className="text-9xl"/>
            <h2 className="font-poppins text-3xl">CV</h2>
        </div>
    </motion.div>
);

export default About;