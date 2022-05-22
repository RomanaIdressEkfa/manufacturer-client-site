import React from 'react';
import logo from '../../assets/images/5.jpg';


const CardGlass = () => {
    return (
        <section style={{
            background: `url(${logo})`
        }} className='flex justify-center items-center mt-20 m-4 p-12 '>
            <div className='flex-1 hidden lg:block'>
                {/* <img className='mt-[-150px]' src={logo2} alt="" /> */}
            </div>
            <div className='flex-1'>
                <p className='text-primary font-bold'>Appointment</p>
                <h1 className='text-4xl font-bold text-white'>Make an appointment Today</h1>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary font-bold uppercase bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
            </div>

        </section>
    );
};

export default CardGlass;