import React from "react";
import DefaultBg from "../../assets/defaultBg.png";

const PortfolioProjectTile = (props) => (
        <div className="overflow-hidden rounded-2xl h-96 flex justify-center text-center text-white hover:cursor-pointer duration-150 shadow-md flex-col relative">
            <img className="brightness-50 hover:brightness-[30%] hover:scale-110 duration-300 object-cover min-w-full min-h-full" src={props.imgSource} alt="project_cover" />
            <h1 className="text-white w-full text-3xl font-semibold tracking-wider font-poppins absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{props.projectName}</h1>
        </div>
);

PortfolioProjectTile.defaultProps = {
    imgSource: DefaultBg,
    projectName: 'Nazwa projektu'
};

export default PortfolioProjectTile;