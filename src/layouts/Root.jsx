import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <div className='bg-slate-200'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
            <Toaster />
        </div>
    );
};

export default Root;