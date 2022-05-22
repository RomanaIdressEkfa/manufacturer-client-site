import React from 'react';

const Service = (props) => {
    const { name, price, picture, description, available_quantity, minimum_quantity } = props.service;
    return (
        <div className='p-5 mx-auto shadow-lg'>
            <img className='w-60 h-60' src={picture} alt="" />
            <h1 className='text-2xl font-bold'>Name:{name}</h1>
            <h1 className=' font-bold'>Price: {price}</h1>
            <h1 className=' font-bold'>Available-Quantity: {available_quantity}</h1>
            <h1 className=' font-bold'>Minimum_Quantity: {minimum_quantity}</h1>
            <h1 > <span className='font-bold'> Description:</span> {description}</h1>
        </div>

    );
};

export default Service;