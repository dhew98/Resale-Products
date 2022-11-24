import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Form from 'react-bootstrap/Form';

const Addproducts = () => {

    const { user } = useContext(AuthContext);
    const handleProducts = () => {

    }

    return (
        <div className='mt-3 mx-auto'>
            <h1>Add a Product</h1>
            <Form onSubmit={handleProducts}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue={user?.displayName} type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue={user?.email} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Orgprice">
                    <Form.Label for="Orgprice">Original Price</Form.Label>
                    <Form.Control id="Orgprice" type="text" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label for="price" >Resale Price</Form.Label>
                    <Form.Control id="price" type="text" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="number">
                    <Form.Label for="number" >Phone Number</Form.Label>
                    <Form.Control id="number" type="text" placeholder="Enter your number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="location">
                    <Form.Label for="location">Location</Form.Label>
                    <Form.Control id="location" type="text" placeholder="Enter Location" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="brand">
                    <Form.Label for="brand">Brand</Form.Label>
                    <Form.Control id="brand" type="text" placeholder="Enter Brand Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="used">
                    <Form.Label for="used">Used</Form.Label>
                    <Form.Control id="used" type="text" placeholder="Enter Usage period" />
                </Form.Group>


                <input className='btn btn-primary mt-2' type="submit" value="Post" />
            </Form>
        </div>
    );
};

export default Addproducts;