import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <div className='bg-slate-200'>
                <ScrollRestoration />
                <Navbar />
                <Outlet />
                <Footer />
            </div>
            <Toaster />
        </div>
    );
};

export default Root;