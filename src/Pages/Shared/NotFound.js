import React from 'react';
import notFound from '../../assets/images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='mx-auto' src={notFound} alt="" />

        </div>
    );
};

export default NotFound;