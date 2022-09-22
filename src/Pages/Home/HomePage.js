import React from 'react';
import CardGlass from './CardGlass';
import Hero from './Hero';
import StatUi from './StatUi';
import background from '../../assets/icons/video-1.gif'
import ReviewPage from './ReviewPage';
import Footer from '../Shared/Footer';
import Products from './Products';
import Card from './Card';
import Heros from './Heros';
import Logins from './Logins';
import InputBox from './InputBox';
import CountDown from './CountDown';

const HomePage = () => {
    return (
        <div className=''>
            {/* <div class="hero--media-container">
                <video autoplay="" class="hero--video-background" controlslist="nodownload" loop="" muted="" playsinline="" poster="https://static.istockphoto.com/display-sets/istock/homepage/hero/iStock-829060978_optimized.jpg" src="https://static.istockphoto.com/display-sets/istock/homepage/hero/iStock-829060978_optimized.mp4"></video>
            </div> */}
            {/* <div className='' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> */}
            <Hero></Hero>
            <Products></Products>
            <CardGlass></CardGlass>
            <Card></Card>
            <Heros></Heros>
            <CountDown></CountDown>
            {/* <StatUi></StatUi> */}

            <ReviewPage></ReviewPage>
            {/* <InputBox></InputBox> */}
            <Logins></Logins>
            <Footer></Footer>
        </div>
        // </div >
    );
};

export default HomePage;