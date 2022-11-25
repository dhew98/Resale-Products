import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Footer = () => {
    return (
        <footer className="footer  bg-warning mt-5 p-5">

            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <div>
                            <div className='d-flex'>
                                <img className='' style={{ height: '120px' }} src='https://cdn3d.iconscout.com/3d/premium/thumb/development-3981411-3297349.png' alt='' />
                                <h5> <span className='fs-2'>GetALap</span> <br />Sell Your Laptop  <br />Buy a laptop  <br />chaper than new one </h5>
                            </div>

                        </div>

                    </Col>
                    <Col xs={12} md={4}>
                        <div className='d-flex flex-column fs-5'>
                            <h2>Services</h2>
                            <a href="/" className="link link-hover">Sell</a>
                            <a href="/" className="link link-hover">Buy</a>
                            <a href="/" className="link link-hover">Servicing Laptops</a>
                            <a href="/" className="link link-hover">Resale Products</a>
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