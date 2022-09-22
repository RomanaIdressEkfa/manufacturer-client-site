import React from 'react';

const Review = (props) => {
    const { description, img } = props.review;
    return (
        <div className='p-5 mx-auto shadow-lg rounded-2xl w-5/6 bg-blue-400'>
            <img className='w-80 h-64 mx-auto' src={img} alt="" />
            <h1 className=' font-bold'>Review:
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
            </h1>
            <p > <span className='font-bold'> Description:</span> {description}</p>
        </div>
    );
};

export default Review;