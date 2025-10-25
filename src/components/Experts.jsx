import React, { useEffect, useState } from 'react';
import ExpertCard from './ExpertCard';

const Experts = () => {
    const [experts, setExperts] = useState([])

    useEffect(() => {
        fetch('/experts.json')
        .then(res => res.json())
        .then(data => setExperts(data))
    })
    return (
        <div className='flex flex-col items-center mt-10 mb-10'>
            <h3 className='text-3xl font-bold text-primary'>Meet Our Expert Vets</h3>
            <div className="cards grid lg:grid-cols-3 gap-4 mt-5">
                {experts.map((expert, i) => <ExpertCard key={i} expert={expert} />)}
            </div>
        </div>
    );
};

export default Experts;