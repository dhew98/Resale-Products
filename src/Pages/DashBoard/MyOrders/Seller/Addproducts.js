import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Form from 'react-bootstrap/Form';

const Addproducts = () => {

    var cat_id;
    const { user } = useContext(AuthContext);
    const handleProducts = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email || 'unregistered';
        const img = form.image.value;
        const Orgprice = form.Orgprice.value;
        const price = form.price.value;
        const use = form.used.value;
        const location = form.location.value;
        const brand = form.brand.value;


        if (brand === "asus") {
            cat_id = "637ee62bf3ee5834ef8fa06c";
        }

        const review = {
            services: _id,
            serviceName: item,
            customer: name,
            rating: rate,
            email,
            message,
            img
        }
        fetch('https://server-six-kappa.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for Sharing Your Views!')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
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
                <Form.Group className="mb-3" controlId="item">
                    <Form.Label for="item">Item Name</Form.Label>
                    <Form.Control id="item" type="text" placeholder="Enter Item Name " />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Orgprice">
                    <Form.Label for="Orgprice">Original Price</Form.Label>
                    <Form.Control id="Orgprice" type="text" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label for="price" >Resale Price</Form.Label>
                    <Form.Control id="price" type="text" placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label for="image" >Image url</Form.Label>
                    <Form.Control id="image" type="text" placeholder="Enter image url" />
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