import React from 'react';
import ServiceCard from './ServiceCard';
import { useLoaderData } from 'react-router';

const Services = () => { 
    const services = useLoaderData()
    
    return (
        <div className='flex flex-col items-center mt-10'>
            <h3 className='text-3xl font-bold text-primary'>Popular Winter Care Services</h3>
            <div className="cards grid grid-cols-3 gap-4 mt-5">
                {services.map(service => <ServiceCard service={service} />)}
            </div>
        </div>
    );
};

export default Services;