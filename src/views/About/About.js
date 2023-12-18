import React from "react";
import { motion } from "framer-motion";

const About = () => (
    <motion.div 
        className=" w-4/5 bg-[#638ECB] rounded-[25px] p-10 shadow-lg mx-auto my-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: .2, ease: "easeInOut" }}
    >
        <h1>O mnie</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam perferendis nihil tenetur quae reprehenderit molestias.</p>
        <h1>Technologie, których używam</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ducimus libero quod iusto, itaque maiores repellendus enim. Ea expedita accusantium vero ratione exercitationem quisquam. Ipsa eveniet explicabo impedit sed repudiandae!</p>
    </motion.div>
);

export default About;