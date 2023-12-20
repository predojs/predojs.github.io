import React from "react";
import { motion } from "framer-motion";
import PortfolioProjectTile from "../../components/PortfolioProjectTile/PortfolioProjectTile";
import AvatarImage from "../../assets/avatar.jpg";

const Portfolio = () => (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3, delay: .2, ease: "easeInOut" }}
        className="grid p-5 portfolioSection gap-5"
    >
        <PortfolioProjectTile imgSource={AvatarImage} projectName="Portfolio Website"/>
        <PortfolioProjectTile imgSource={AvatarImage} projectName="Portfolio Website"/>
        <PortfolioProjectTile imgSource={AvatarImage} projectName="Portfolio Website"/>
        <PortfolioProjectTile imgSource={AvatarImage} projectName="Portfolio Website"/>
        <PortfolioProjectTile />
        <PortfolioProjectTile />
    </motion.div>
);

export default Portfolio;