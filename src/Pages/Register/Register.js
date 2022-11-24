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
    const { createUser, updateUserProfile } = useContext(AuthContext);
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

        // console.log(name, photoURL, email, password);

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
                            <div className="mb-3 " >
                                <input class="form-check-input" type="radio" value="Seller" name="flexRadioDefault" id="Seller" />
                                <label class="form-check-label" for="Seller">
                                    Seller
                                </label>
                            </div>

                            <div>
                                <input class="form-check-input" type="radio" value="Buyer" name="flexRadioDefault" id="Buyer" />
                                <label class="form-check-label" for="Buyer">
                                    Buyer
                                </label>
                            </div>


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



