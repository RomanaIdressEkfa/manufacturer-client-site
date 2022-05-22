import React from 'react';
import logo from '../../assets/images/7.jpg'

const CardGlass = () => {
    return (
        <div class="card w-96 glass h-screen">
            <figure><img src={logo} alt="car!" /></figure>
            <div class="card-body">
                <h2 class="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div >
    );
};

export default CardGlass;