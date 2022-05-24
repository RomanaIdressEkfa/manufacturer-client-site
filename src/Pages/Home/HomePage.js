import React from 'react';
import Services from '../Services/Services';
import CardGlass from './CardGlass';
import Hero from './Hero';
import StatUi from './StatUi';
import background from '../../assets/images/back.jpg'
import Footer from '../Shared/Footer';

const HomePage = () => {
    return (
        <div className='' style={{ backgroundImage: `url(${background})` }}>
            <Hero></Hero>
            <Services></Services>
            <CardGlass></CardGlass>
            <StatUi></StatUi>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;