import React from 'react';
import logo from '../../assets/images/9.jpg'
import PrimaryButton from '../Shared/PrimaryButton';

const Hero = () => {
    return (
        <>
            <div data-aos="flip-right" data-aos-delay="50"
                data-aos-duration="1000" class="hero min-h-screen" style={{
                    background: `url(${logo})`
                }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md" >
                        <h1 class="mb-5 text-5xl font-bold" data-aos="flip-right" data-aos-delay="200"
                            data-aos-duration="1000">Hello there</h1>
                        <p class="mb-5" data-aos="flip-right" data-aos-delay="400"
                            data-aos-duration="1000">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div data-aos="zoom-in" data-aos-delay="600"
                            data-aos-duration="1000"> <PrimaryButton></PrimaryButton></div>

                    </div>
                </div>
            </div>
            <div className='shadow-lg w-5/6 rounded-2xl mt-[-150px] bg-error relative z-20  p-10 mx-auto' data-aos="zoom-in" data-aos-delay="800"
                data-aos-duration="1000" >
                <h1 className='text-center font-bold text-2xl mb-3'>Lorem ipsum dolor sit amet.</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <div className='flex items-center justify-center mt-6'>
                    <PrimaryButton ></PrimaryButton>
                </div>
            </div>
            <br />
        </>
    );
};

export default Hero;