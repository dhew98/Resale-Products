import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import ProductCard from '../ProductCard/ProductCard';


const Products = () => {

    const products = useLoaderData();

    return (
        <CardGroup className='mt-3 '>
            {products.map(prod => <ProductCard
                key={prod._id}
                prod={prod}
            />)
            }
        </CardGroup>
    );
};

export default Products;