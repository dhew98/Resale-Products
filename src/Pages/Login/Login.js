import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useTitle from '../../Hooks/useTitle';




const Login = () => {


    useTitle("Log In");
    const [error, setError] = useState('');
    const { signIn, setLoading, handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const Googleprovider = new GoogleAuthProvider();



    const from = location.state?.from?.pathname || '/';



    const handleGoogle = () => {
        handleGoogleSignIn(Googleprovider)
            .then((result) => {


                const user = result.user;
                console.log(user.email);

                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    role: "Buyer",
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



                        }
                    })
                    .catch(er => console.error(er));

                navigate(from, { replace: true });
            }).catch((error) => {
                console.log("error : ", error);
            })
    }



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });


            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Container className="mt-5 p-5">

            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className='fw-bold fs-1'>LOGIN</h1>

                    <><Form onSubmit={handleSubmit} className=" w-75 ">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <div>
                            <Form.Text  >
                                <p className="mt-3">Don't have an account?<Link to='/register'>Create a new account</Link></p>
                            </Form.Text>
                        </div>
                        <div>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </div>
                        <Button type='submit' className='w-100 fw-bold' variant="primary" size="lg" >
                            Login
                        </Button>



                    </Form>

                        <div className="d-grid gap-2 w-75 mt-3 ">
                            <Button variant="danger" onClick={handleGoogle}>
                                <img src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1' style={{ height: "50px", borderRadius: "50%", marginRight: "5px" }} alt=''></img> Sign in with Google
                            </Button>
                        </div>
                    </>

                </Col>
            </Row>
        </Container>

    );
};

export default Login;