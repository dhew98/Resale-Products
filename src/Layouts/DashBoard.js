import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Pages/Footer/Footer';
import Button from 'react-bootstrap/Button';
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>




            <Header></Header>

            <Container> <Row className='mt-5'>
                <Col sm={4} className="">
                    {isBuyer && <>
                        <h1 className='mb-5'>Buyer panel</h1>
                        <Link to="/dashboard/myorders">My Orders</Link>  </>}

                    {
                        isAdmin && <>
                            <div className='d-flex flex-column'>
                                <h1>Admin panel</h1>
                                <Link to="/dashboard/seller"> All Sellers</Link>
                                <Link to="/dashboard/buyer"> All Buyers</Link>

                                <Link to="/dashboard/items"> Reported Items</Link>
                            </div>
                        </>
                    }

                    {
                        isSeller && <>
                            <div className='d-flex flex-column'>
                                <h1 className='mb-5'>Seller panel</h1>
                                <Link to="/dashboard/addProducts">Add a Product</Link>
                                <Link to="/dashboard/myproducts">My Products</Link>
                            </div>

                        </>
                    }</Col>
                <Col sm={8}> <Outlet></Outlet></Col>

            </Row>
            </Container>

            <Footer></Footer>

        </div >
    );
};

export default DashboardLayout;