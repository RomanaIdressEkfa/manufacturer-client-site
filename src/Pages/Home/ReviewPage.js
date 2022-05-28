import React, { useEffect, useState } from 'react';
import Review from './Review';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://obscure-headland-49513.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (

        <div className='mt-16'>
            <h1 className="text-5xl font-bold text-center m-5">Customer Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                {
                    reviews.slice(0, 6).reverse().map(review => <Review key={review._id}
                        review={review} >
                    </Review>)
                }
            </div>
        </div >

    );
};

export default ReviewPage;