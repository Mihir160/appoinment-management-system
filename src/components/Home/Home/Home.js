import React from 'react';
import { Outlet } from 'react-router-dom';
import Appoinment from '../Appoinment/Appoinment/Appoinment';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Appoinment></Appoinment>
            <Footer></Footer>
        </div>
    );
};

export default Home;