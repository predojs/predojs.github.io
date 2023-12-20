import React from "react";
import DefaultBg from "../../assets/defaultBg.png";

const PortfolioProjectTile = (props) => (
        <div className="rounded-2xl bg-opacity-25 h-96 flex items-center justify-center text-center text-white bg-cover bg-center hover:brightness-50 hover:cursor-pointer duration-150 shadow-md" style={{backgroundImage: `url(${props.imgSource})`}}>
            <h1>{props.projectName}</h1>
        </div>
);

PortfolioProjectTile.defaultProps = {
    imgSource: DefaultBg,
    projectName: 'Nazwa projektu'
};

export default PortfolioProjectTile;