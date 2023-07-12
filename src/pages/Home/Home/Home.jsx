import { useEffect } from "react";
import Banner from "../Banner/Banner";
import ByCategory from "../ByCategory/ByCategory";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../../Hook/useTitle";
import Gallery from "../Gallery/Gallery";
import LegoBuildingTips from "../LegoBuildingTips/LegoBuildingTips";
import LegoYouTube from "../LegoYouTube/LegoYouTube";
import AboutUs from "../AboutUs/AboutUs";
import Testimonials from "../Testimonials/Testimonials";
import LegoNews from "../LegoNews/LegoNews";

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            easing: 'ease-in-out', // animation easing
            once: true // whether animation should execute only once
        });
    }, []);

    useTitle('Home');

    return (
        <>
            <div data-aos="fade-up">
            <Banner />
            </div>

            <div data-aos="fade-up">
            <Gallery />
            </div>

            <div data-aos="fade-up">
            <ByCategory />
            </div>

            <div data-aos="fade-up">
            <LegoBuildingTips />
            </div>

            <div data-aos="fade-up">
            <LegoYouTube/>
            </div>

            <Testimonials/>
            <LegoNews/>
            
            <div data-aos="fade-up">
            <AboutUs/>
            </div>
            
        </>
    );
};

export default Home;