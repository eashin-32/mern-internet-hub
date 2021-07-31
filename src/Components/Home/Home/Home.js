import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import './Home.css';
import OurPortfolio from '../OurPortfolio/OurPortfolio';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
           <div className="header">
           <Navbar></Navbar>
            <Header></Header>
           </div>
           <Services></Services>
           <OurPortfolio></OurPortfolio>
           <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;