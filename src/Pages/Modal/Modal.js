
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider';


const ModalForm = ({ show, setShow, prod }) => {

    const { user } = useContext(AuthContext);

    const handleClose = (id) => {

        setShow(false);
        fetch(`https://laptop-gamma.vercel.app/products/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Your order is Booked Successfully!');
                }
            })

    }
    const { name, location, price, img, orgPrice, use, date, seller, _id } = prod;


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const email = user?.email || 'unregistered';
        const number = form.number.value;
        const location = form.location.value;


        const booking = {
            userName,
            email,
            price: price,
            item: name,
            number,
            location

        }
        fetch('https://laptop-gamma.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }




    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleBooking}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control defaultValue={user?.displayName} type="text" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control defaultValue={user?.email} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="itemName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" defaultValue={name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price(Tk)</Form.Label>
                            <Form.Control type="text" defaultValue={price} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label for="number" >Phone Number</Form.Label>
                            <Form.Control id="number" type="text" placeholder="Enter your number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="location">
                            <Form.Label for="location">Meeting Location</Form.Label>
                            <Form.Control id="location" type="text" placeholder="Enter Location" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => handleClose(_id)}>
                        Book
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalForm;