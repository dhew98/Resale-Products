import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import Form from 'react-bootstrap/Form';
import { format } from 'date-fns';
import { useNavigate } from "react-router-dom";


const Addproducts = () => {

    var cat_id;
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const handleProducts = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = user?.displayName;
        const email = user?.email || 'unregistered';
        const img = form.image.value;
        const orgPrice = form.Orgprice.value;
        const price = form.price.value;
        const use = form.used.value;
        const location = form.location.value;
        const brand = form.brand.value.toLowerCase();
        const item = form.item.value;
        const date = form.date.value;
        const condition = form.cond.value;
        const description = form.description.value;



        if (brand === "asus") {
            cat_id = "637ee62bf3ee5834ef8fa06c";
        }
        if (brand === "lenovo") {
            cat_id = "637ee62bf3ee5834ef8fa06e";
        }
        if (brand === "hp") {
            cat_id = "637ee62bf3ee5834ef8fa06d";
        }






        const product = {
            name: item,
            img,
            description,
            location,
            price,
            orgPrice,
            use,
            condition,
            seller: userName,
            email,
            cat_id,
            date,
            status: "available",
        }
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Product Added Successfully!')
                    form.reset();
                    navigate("/dashboard/myorders");

                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='mt-3 mb-3 mx-auto'>
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
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} placeholder="At least 100words" />
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
                    <label for="brand">Select Brand : </label>

                    <select id="brand" name="brand">
                        <option value="Asus">Asus</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="HP">HP</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="used">
                    <Form.Label for="used">Used</Form.Label>
                    <Form.Control id="used" type="text" placeholder="Enter no. of years" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cond">
                    <Form.Label for="cond">Condition :</Form.Label>
                    <select id="cond" name="cond">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label for="date">Date</Form.Label>
                    <Form.Control id="date" type="text" placeholder="Enter dd/mm/yy" />
                </Form.Group>
                <input className='btn btn-primary mt-2' type="submit" value="Post" />
            </Form>
        </div>
    );
};

export default Addproducts;