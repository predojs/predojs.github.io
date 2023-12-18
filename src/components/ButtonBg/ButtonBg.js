import React from "react";

const ButtonBg = (props) => (
    <button className="border-2 border-blue-500 bg-blue-500 font-semibold text-white px-4 py-2 rounded-lg hover:bg-slate-800 hover:border-slate-800 transition-all duration-150 text-lg">{props.text}</button>
);

export default ButtonBg;