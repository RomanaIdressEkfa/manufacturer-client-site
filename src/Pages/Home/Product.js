import React from 'react';

const Product = (props) => {
    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        margin: '20px',
        padding: '10px',
    };
    const { name, description, picture, minimum_quantity, available_quantity, price } = props.product
    return (
        <div style={divStyles} className='p-5 mx-auto shadow-lg rounded-2xl w-10/12 bg-blue-300'>
            <img className='w-full h-64 mx-auto' src={picture} alt="" />
            <p><span className='font-bold text-xl'>Minimum Quantity:</span><span className='font-bold'> {minimum_quantity}</span></p>
            <p><span className='font-bold text-xl'>Quantity:</span><span className='font-bold'> {available_quantity}</span></p>
            <p><span className='font-bold text-xl'>Price: </span><span className='font-bold'> ${price}</span></p>
            <h1 className='font-bold text-xl'>Name:{name}</h1>
            <p>{description.slice(0, 100)}</p>

        </div>

    );
};

export default Product;