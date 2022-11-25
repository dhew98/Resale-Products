import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import useTitle from '../../Hooks/useTitle';
import Category from '../Category/Category';
import Advertise from '../Advertise/Advertise';

const Home = () => {


    const categories = useLoaderData();

    useTitle("Home");

    return (
        <div>
            <div class="card mb-3 border-0">
                <div class="row g-0">

                    <div class="col-md-6 mt-3">
                        <div class="card-body mt-5 mx-5 p-5">
                            <h1 class="card-title display-2 fw-bold">Sell Your Laptop</h1>
                            <p class="card-text fs-1 mx-5">Get Quick Cash</p>
                            <h1 class="card-title display-2 fw-bold">Buy a laptop</h1>
                            <p class="card-text fs-1 mx-5">chaper than new one</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src="https://a.ipricegroup.com/media/Maria/tipe-tipe-laptop.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>



            {/* catagories */}


            <Advertise></Advertise>


            <h1 className="text-center mt-5" >Category</h1>

            <CardGroup className='mt-3 '>
                {
                    categories.map(cat => <Category key={cat._id} cat={cat}></Category>)
                }
            </CardGroup>

        </div >

    );
};

export default Home;