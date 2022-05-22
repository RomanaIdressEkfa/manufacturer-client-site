import React from 'react';
import Services from '../Services/Services';
import CardGlass from './CardGlass';
import Hero from './Hero';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <CardGlass></CardGlass>
        </div>
    );
};

export default HomePage;