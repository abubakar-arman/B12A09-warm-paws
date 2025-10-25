import React from 'react';
import ServiceCard from './ServiceCard';
import { useLoaderData } from 'react-router';

const Services = () => { 
    const services = useLoaderData()
    
    return (
        <div className='flex flex-col items-center mt-10' data-aos='slide-up' >
            <h3 className='text-3xl font-bold text-primary'>Popular Winter Care Services</h3>
            <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {services.map((service, i) => <ServiceCard key={i} service={service} />)}
            </div>
        </div>
    );
};

export default Services;