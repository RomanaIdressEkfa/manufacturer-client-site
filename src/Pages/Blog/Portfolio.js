// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/images/ekfa-3.png';

// const Portfolio = () => {
//     return (
//         <div class="flex flex-col w-full lg:flex-row ">
//             <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
//                 <div className=' mt-28'>
//                     <img className=' w-72 shadow' src={logo} alt="" />
//                     <div className=' shadow p-5 m-auto text-xl'>
//                         <h4>Name:Romana Idress Ekfa</h4>
//                         <h5>District: Tangail.</h5>
//                         <h5>Educational Qualification: B.Sc in CSE</h5>
//                         <h5>University: Uttara University</h5>
//                         <h6>Date of Birth: 7 June 2000</h6>
//                         <br />
//                         <p>Junior Full Stack Developer. I am expert in Html, CSS, Bootstrap, Tailwind. I have also experience in ReactJs, WordPress. </p>
//                     </div>
//                 </div>
//             </div>
//             <div class="divider lg:divider-horizontal ">OR</div>
//             <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center mt-40">
//                 <h1>Project</h1>
//                 <p>Site Link-1: <a href="https://react-food-world.netlify.app/" target="blank">React Food World</a></p>
//                 <p>Site Link-2: <a href="https://gleaming-souffle-babcfc.netlify.app/" target="blank"> 2nd Site</a></p>


//             </div>
//         </div>
//     );
// };

// export default Portfolio;
import React from 'react';
import logo from '../../assets/images/ekfa-3.png';
import Footer from '../Shared/Footer';

const Portfolio = () => {
    return (
        <div className='m-28 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-1 bg-slate-200'>
                    <div class="avatar mx-auto mt-20">
                        <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={logo} />
                        </div>
                    </div>
                    <h1 className='text-3xl font-bold text-red-400 text-center'>Romana Idress Ekfa</h1>
                    <h1 className='text-2xl font-bold text-center'>Frontend Devoloper</h1>
                    <p>A front end developer, also known as a front end web developer, is a professional responsible for the design and implementation of the interface. The users require this interface so that they can access the application in question. A web designer is a professional who creates a website’s appearance and design. And the front end developer makes sure that the design works online by using coding languages such as CSS, HTML, and JavaScript.</p>
                    <br />
                    <br />

                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mx-auto'>
                    <h1 className='text-5xl font-bold m-38'>I am a Frontend Developer</h1>
                    {/* <img className='' src={logo} alt="" /> */}
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;
