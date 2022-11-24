import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ReportedItems = () => {

    const products = useLoaderData();

    return (
        <div>
            <h1>Reported Items</h1>
            <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Location</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((prod, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{prod.name}</td>
                        <td>{prod.location}</td>
                        <td>{prod.price}Tk</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default ReportedItems;