import React from 'react';
import img1 from './../../assets/images/sj.png'
import img2 from './../../assets/images/logo3.png'
import img3 from './../../assets/images/logo2.png'
import img4 from './../../assets/images/logo4.png'
import img5 from './../../assets/images/logo1.png'
const Card = () => {
    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        margin: '20px',
        padding: '12px',
    };
    return (
        <div>
            <h1 className='text-5xl font-bold text-center m-5 text-error'>Welcome to card Section</h1>
            <div className='mx-auto ml-12 box-border'>
                <div className='flex mx-auto  grid grid-cols-1 md:grid-cols-3 gap-2'>
                    <div style={divStyles} className=''>
                        <img className='w-64 h-56 mx-auto' src={img2} alt="" />
                        <h1 className='text-center font-bold text-2xl'>Heading</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quisquam culpa dolor eum odit aliquam odio saepe qui repudiandae architecto.</p>

                    </div>
                    <div style={divStyles} className=''>
                        <img className='w-64 h-56 mx-auto' src={img3} alt="" />
                        <h1 className='text-center font-bold text-2xl'>Heading</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quisquam culpa dolor eum odit aliquam odio saepe qui repudiandae architecto.</p>

                    </div>
                    <div style={divStyles} className=''>
                        <img className='w-64 h-56 mx-auto' src={img4} alt="" />
                        <h1 className='text-center font-bold text-2xl'>Heading</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quisquam culpa dolor eum odit aliquam odio saepe qui repudiandae architecto.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Card;