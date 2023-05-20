import { useEffect } from "react";
import Banner from "../Banner/Banner";
import ByCategory from "../ByCategory/ByCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            easing: 'ease-in-out', // animation easing
            once: true // whether animation should execute only once
        });
    }, []);


    return (
        <>
            <div data-aos="fade-up">
            <Banner />
            </div>
            <div data-aos="fade-up">
            <ByCategory />
            </div>
            
            
        </>
    );
};

export default Home;