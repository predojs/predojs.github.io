import React from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

const Contact = () => (
    <motion.div 
        className="p-8 flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: .2, ease: "easeInOut" }}
    >
        <div className="py-10 px-7 shadow-lg w-[90%] text-lg">
            <h1 className="py-5 text-2xl font-semibold font-poppins">Odezwij się!</h1>
            <form action="" className="flex flex-col items-center gap-3">
                <input required type="text" name="name" placeholder="Imię" className="w-full p-2"/>
                <input required type="text" name="email" placeholder="E-mail" className="w-full p-2"/>
                <textarea required name="message" rows="10" placeholder="Wiadomość" className="w-full p-2"></textarea>
                <button className="flex items-center gap-1 mt-3 border-2 border-blue-500 font-semibold text-xl font-poppins text-blue-500 px-4 py-2 rounded-lg hover:text-slate-800 hover:border-slate-800 hover:cursor-pointer transition-all duration-150"><span>Wyślij</span> <IoIosSend /></button>
            </form>
        </div>
    </motion.div>
);

export default Contact;