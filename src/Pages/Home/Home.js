import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'


import Footer from '../Footer/Footer';
import useTitle from '../../Hooks/useTitle';

const Home = () => {

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



            <h1 className="text-center mt-5" >Our Services</h1>

            <CardGroup className='mt-3 '>
                {services.map(service => <Services
                    key={service._id}
                    service={service}
                />)
                }
            </CardGroup>
            <div className="text-center">
                <Link to='/services' ><Button variant="danger" size="lg">See All</Button></Link>
            </div>

            {/*<Container className="mt-5" >
                <Row>
                    <Col xs={12} md={6}>
                        <img class="img-fluid rounded-start" src='2.png' alt='' />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='mt-5 p-5'>
                            <h1 className='mt-5 p-3 display-5 fw-bold'>About Chef</h1>
                            <p>Our chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation. Our chef create a bridge between the traditional and foreign foods and bringing intense excitement , banalanced flavours and testy cuisines.</p>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Container className="mt-5" >
                <Row>
                    <Col xs={12} md={6}>
                        <div className='mt-5 p-5 mx-5'>
                            <h1 className='mt-5 p-3 display-5 fw-bold'>Hire The Chef</h1>
                            <p>You can hire our chef for big events. As Our chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation he will make your events
                                more delicious and yummy!So, dont hesitate hire now! </p>

                            <Button>Hire Now</Button>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <img class="img-fluid rounded-start" src='3.png' alt='' />
                    </Col>

                </Row>
            </Container> */}




        </div >

    );
};

export default Home;