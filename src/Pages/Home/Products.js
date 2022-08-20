import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from 'react-slick';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './styles.css';
import { Autoplay, Pagination, Navigation } from "swiper";
// import background from './../../assets/images/back3.jpg'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

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
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    // modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        products.slice(0, 6).map(product => <SwiperSlide> <Product key={product.name} product={product}>
                        </Product></SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Products;