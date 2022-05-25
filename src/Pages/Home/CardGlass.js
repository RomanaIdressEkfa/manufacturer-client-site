import React from 'react';
import logo from '../../assets/images/7.jpg';
import PrimaryButton from '../Shared/PrimaryButton';


const CardGlass = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={logo} class="max-w-2xl rounded-lg shadow-2xl " />
                <div>
                    <h1 class="text-5xl font-bold text-neutral-content">Process Manufacturing!</h1>
                    <p class="py-6 text-neutral-content">A manufacturer is a person or company that produces finished goods from raw materials by using various tools, equipment, and processes, and then sells the goods to consumers.</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default CardGlass;