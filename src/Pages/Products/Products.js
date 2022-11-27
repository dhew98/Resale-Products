import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import ProductCard from '../ProductCard/ProductCard';
import useTitle from '../../Hooks/useTitle';


const Products = () => {

    const products = useLoaderData();
    const len = products.length;
    useTitle("Products")

    return (
        <div>
            {
                len ? <CardGroup className='mt-3 '>
                    {products.map(prod => <ProductCard
                        key={prod._id}
                        prod={prod}
                    />)
                    }
                </CardGroup> : <div style={{ height: "400px" }} className='m-5 px-5 py-5'>
                    <h1 className='text-center m-5 px-5 py-5'>No Products Found!</h1>
                </div>
            }
        </div>

    );
};

export default Products;