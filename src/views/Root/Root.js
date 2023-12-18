import React from 'react';
import Header from '../../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';

const App = () => (
    <div className='flex flex-col h-screen justify-between'>
      <BrowserRouter>
        <Header/>
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
);

export default App;
