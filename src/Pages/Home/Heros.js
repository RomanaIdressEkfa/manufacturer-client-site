import React from 'react';
import logo from '../../assets/images/2.jpg';

const Heros = () => {
    return (
        <div class=" bg-rose-200">
            <div class="hero-content flex-col lg:flex-row mx-auto">
                <img className='w-7/12 h-full rounded' src={logo} />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia quia quod similique, porro maxime debitis quidem maiores. A hic laborum alias quos quas possimus, mollitia asperiores veniam, eveniet nesciunt nostrum similique in et explicabo laboriosam molestias. Aliquam, dignissimos velit! </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Heros;