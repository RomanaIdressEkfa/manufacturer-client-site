import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import background from './../../assets/images/back3.jpg'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 initialSlide: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    return (
        <div className=''>
            <h1 className='text-5xl font-bold text-center m-5'>Manufactured Weapons</h1>
            {/* <Slider {...settings}> */}
            <div className=' grid grid-cols-1 lg:grid-cols-4 mx-auto'>
                {
                    products.slice(0, 4).map(product => <Product key={product.name} product={product}>
                    </Product>)
                }
            </div>
            {/* </Slider> */}
        </div>
    );
};

export default Products;