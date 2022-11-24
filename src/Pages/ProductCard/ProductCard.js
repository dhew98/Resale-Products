import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal } from 'react-bootstrap';
import ModalForm from '../Modal/Modal';

const ProductCard = ({ prod }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const { name, location, price, img, orgPrice, use, date, seller } = prod;
    return (
        <div>
            <Card style={{ width: '25rem' }} className="m-5 " >
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img className='img-fluid' variant="top" src={img} />
                    </PhotoView>
                </PhotoProvider>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p >location : <span className='fw-bold'>{location}</span> </p>
                        <p >Resale Price : <span className='fw-bold'>{price} Tk</span> </p>
                        <p >Original Price : <span className='fw-bold'>{orgPrice} Tk</span> </p>
                        <p >Used : <span className='fw-bold'>{use}yr</span> </p>
                        <p >Posted : <span className='fw-bold'>{date}</span> </p>
                        <div className='d-flex justify-content-between align-items-center'>

                            <h5 >Seller : <span className='fw-bold'>{seller}</span> <FontAwesomeIcon className='text-primary' icon={faCheckCircle} /> </h5>
                            <p><Button onClick={handleShow} variant="primary">Book Now</Button></p>
                        </div>

                    </Card.Text>
                    <ModalForm show={show} setShow={setShow} prod={prod}></ModalForm>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;