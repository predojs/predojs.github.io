import React from "react";

const Button = (props) => (
    <button className="border-2 border-blue-500 font-semibold text-blue-500 px-4 py-2 rounded-lg hover:text-slate-800 hover:border-slate-800 transition-all duration-150">{props.text}</button>
);

export default Button;