import Hero from '../components/Hero'
import Services from '../components/Services';
import Tips from '../components/Tips';
import Experts from '../components/Experts';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    // const data = useLoaderData()
    // console.log(data);

    useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <div>
            <Hero />
            <Services />
            <Tips />
            <Experts />
        </div>
    );
};

export default Home;