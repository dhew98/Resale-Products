import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


const AllBuyers = () => {
    const users = useLoaderData();


    return (
        <div>
            <h1>All Sellers</h1>
            <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default AllBuyers;