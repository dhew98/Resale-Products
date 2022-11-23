import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <footer className="footer  bg-warning p-5">

            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div>
                            <div className='d-flex'>
                                <img className='mx-3' style={{ height: '100px', borderRadius: "50%" }} src='https://img.freepik.com/premium-vector/chef-icon-with-tray-food-hand_602006-191.jpg' alt='' />
                                <h5> <span className='fs-2'>Jawad's Cuisine</span> <br />Providing The Best <br /> Quality Food Service</h5>
                            </div>

                        </div>

                    </Col>
                    <Col xs={12} md={4}>
                        <div className='d-flex flex-column fs-5'>
                            <h2>Services</h2>
                            <a href="/" className="link link-hover">Catering</a>
                            <a href="/" className="link link-hover">Indian Cuisine</a>
                            <a href="/" className="link link-hover">Chinese Cuisine</a>
                            <a href="/" className="link link-hover">Traditional Food</a>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='d-flex flex-column fs-5'>
                            <h2>Legal</h2>
                            <a href="/" className="link link-hover">Terms of use</a>
                            <a href="/" className="link link-hover">Privacy policy</a>
                            <a href="/" className="link link-hover">Cookie policy</a>
                        </div>
                    </Col>
                </Row>

            </Container>



        </footer>
    );
};

export default Footer;