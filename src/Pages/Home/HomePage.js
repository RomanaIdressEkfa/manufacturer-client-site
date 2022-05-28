import React from 'react';
import Services from '../Services/Services';
import CardGlass from './CardGlass';
import Hero from './Hero';
import StatUi from './StatUi';
import background from '../../assets/images/back.jpg'
import ReviewPage from './ReviewPage';

const HomePage = () => {
    return (
        <div className='' style={{ backgroundImage: `url(${background})` }}>
            <Hero></Hero>
            <Services></Services>
            <CardGlass></CardGlass>
            <ReviewPage></ReviewPage>
            <StatUi></StatUi>
        </div>
    );
};

export default HomePage;