import { useLoaderData } from 'react-router';
import Hero from '../components/Hero'
import Services from '../components/Services';
import Tips from '../components/Tips';
const Home = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <Hero />
            <Services />
            <Tips />
        </div>
    );
};

export default Home;