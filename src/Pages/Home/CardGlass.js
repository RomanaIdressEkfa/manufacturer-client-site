import React from 'react';
import logo from '../../assets/images/7.jpg';
import PrimaryButton from '../Shared/PrimaryButton';
import video from './../../assets/icons/video.mp4';


const CardGlass = () => {
    const videoPlay = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };
    return (
        // <div >
        //     <br />
        //     <div class=" bg-rose-100 mx-auto">
        //         <div class=" lg:flex-row-reverse" >
        //             {/* <video src={video} autoplay loop muted style={videoPlay}> */}

        //             <div className='w-7/12 h-full'>
        //                 <img className='h-full w-7/12 ' src={logo} />
        //             </div>
        //             <div >
        //                 <h1 class="text-5xl font-bold">Process Manufacturing!</h1>
        //                 <p class="py-6 ">A manufacturer is a person or company that produces finished goods from raw materials by using various tools, equipment, and processes, and then sells the goods to consumers.Manufacturers are considered a significant part of the economy. Manufacturing can be traced back to the ancient world. However, for many centuries, the typical manufacturer was a single skilled artisan with assistants.</p>
        //                 <button class="btn btn-primary">Get Started</button>
        //             </div>
        //             {/* </video> */}

        //         </div>
        //     </div >
        // </div >

        <div className=" bg-rose-100">
            <div class="hero-content flex-col lg:flex-row-reverse mx-auto">
                <img className='w-7/12 h-full' src={logo} class="rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Process Manufacturing!</h1>
                    <p class="py-6">A manufacturer is a person or company that produces finished goods from raw materials by using various tools, equipment, and processes, and then sells the goods to consumers, wholesalers, distributors, retailers, or to other manufacturers for the production of more complex goods.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CardGlass;