import React from 'react';

const Review = (props) => {
    const { description, img, name, review } = props.review;
    return (
        <div className='p-5 mx-auto shadow-lg rounded-2xl w-5/6 bg-blue-400'>
            <img className='w-80 h-64 mx-auto' src={img} alt="" />
            <h1 className='text-2xl font-bold'>Name:{name}</h1>
            <h1 className=' font-bold'>Review: {review}</h1>
            <p > <span className='font-bold'> Description:</span> {description}</p>
        </div>
    );
};

export default Review;