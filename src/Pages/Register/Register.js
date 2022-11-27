import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AuthContext } from '../../Contexts/AuthProvider'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';


const Register = () => {
    useTitle("Register");
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, seller, setseller, buyer, setbuyer } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log(role);

        const userInfo = {
            name,
            email,
            role
        }


        fetch(' https://laptop-gamma.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();

                }
            })
            .catch(er => console.error(er));






        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true });

            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className="mt-5 p-5">

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className='fw-bold text-center'>SIGNUP</h1>
                    <Form onSubmit={handleSubmit}  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Full Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="selectOption">
                            <label for="role">Select Your Role : </label>
                            <select className='mx-2' id="role" name="role">
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>

                            </select>


                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                onClick={handleAccepted}
                                label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!accepted}>
                            Register
                        </Button>
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>

    );
};

export default Register;



