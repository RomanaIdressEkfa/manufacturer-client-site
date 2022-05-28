import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/ekfa-3.png';

const Portfolio = () => {
    return (
        <div class="flex flex-col w-full lg:flex-row ">
            <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div className=' mt-28'>
                    <img className=' w-72 shadow' src={logo} alt="" />
                    <div className=' shadow p-5 m-auto text-xl'>
                        <h4>Name:Romana Idress Ekfa</h4>
                        <h5>District: Tangail.</h5>
                        <h5>Educational Qualification: B.Sc in CSE</h5>
                        <h5>University: Uttara University</h5>
                        <h6>Date of Birth: 7 June 2000</h6>
                        <br />
                        <p>Junior Full Stack Developer. I am expert in Html, CSS, Bootstrap, Tailwind. I have also experience in ReactJs, WordPress. </p>
                    </div>
                </div>
            </div>
            <div class="divider lg:divider-horizontal ">OR</div>
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center mt-40">
                <h1>Project</h1>
                <p>Site Link-1: <a href="https://react-food-world.netlify.app/" target="blank">React Food World</a></p>
                <p>Site Link-2: <a href="https://gleaming-souffle-babcfc.netlify.app/" target="blank"> 2nd Site</a></p>


            </div>
        </div>
    );
};

export default Portfolio;
