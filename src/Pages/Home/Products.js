import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import background from './../../assets/images/back3.jpg'

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
            <div className='grid grid-cols-1 md:grid-cols-4 mx-auto'>
                {
                    products.slice(0, 4).map(product => <Product key={product.name} product={product}>
                    </Product>)
                }
            </div>


        </div>
    );
};

export default Products;