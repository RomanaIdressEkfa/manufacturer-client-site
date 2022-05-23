import React from 'react';

const Service = (props) => {
    const { name, price, picture, description, available_quantity, minimum_quantity } = props.service;
    return (
        <div className='p-5 mx-auto shadow-lg rounded-2xl w-10/12 bg-blue-400'>
            <img className='w-80 h-64 mx-auto' src={picture} alt="" />
            <h1 className='text-2xl font-bold'>Name:{name}</h1>
            <h1 className=' font-bold'>Price: {price}</h1>
            <h1 className=' font-bold'>Available-Quantity: {available_quantity}</h1>
            <h1 className=' font-bold'>Minimum_Quantity: {minimum_quantity}</h1>

            <h1 > <span className='font-bold'> Description:</span> {description}</h1>
            <div>
                <button className='btn btn-primary font-bold uppercase bg-gradient-to-r from-error to-accent text-white mx-auto m-2'>Book Now</button>
            </div>
        </div>

    );
};

export default Service;