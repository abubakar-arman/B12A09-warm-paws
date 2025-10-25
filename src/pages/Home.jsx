import Hero from '../components/Hero'
import Services from '../components/Services';
import Tips from '../components/Tips';
import Experts from '../components/Experts';
const Home = () => {
    // const data = useLoaderData()
    // console.log(data);
    
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