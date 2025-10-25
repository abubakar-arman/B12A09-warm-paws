import React, { useEffect, useState } from 'react';
import TipsSection from './TipsSection';

const Tips = () => { 
    const [tipsData, setTipsData] = useState([])
    

    useEffect(() => {
        fetch('/winter-care-tips.json')
        .then((data) => data.json())
        .then((json) => setTipsData(json))
    }, [])

    // useEffect(()=> console.log(tipsData)
    // , [tipsData])
    
    return (
        <div className='flex flex-col items-center mt-10'  data-aos='zoom-in' >
            <h3 className='text-3xl font-bold text-primary'>Winter Care Tips for Pets</h3>
            <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 items-center justify-center">
                {tipsData.map((tipsSection, i) => <TipsSection tipsSection={tipsSection} key={i} />)}
            </div>
        </div>
        
    );
};

export default Tips;