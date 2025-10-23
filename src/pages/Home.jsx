import { useLoaderData } from 'react-router';
import Hero from '../components/Hero'
import Services from '../components/Services';
const Home = () => {
    const data = useLoaderData()
    console.log(data);
    
    return (
        <div>
            <Hero />
            <Services />
        </div>
    );
};

export default Home;