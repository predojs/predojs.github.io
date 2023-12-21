import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location} className="overflow-auto">
                <Route path='/' Component={Home}/>
                <Route path='/about' Component={About}/>
                <Route path='/portfolio' Component={Portfolio}/>
                <Route path='/contact' Component={Contact}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
