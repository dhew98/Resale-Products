import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const AllSellers = () => {
    const users = useLoaderData();


    return (
        <div>
            <h1>All Sellers</h1>
            <Table striped bordered hover className='mt-5 mb-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td className='text-center'><FontAwesomeIcon className='text-danger ' icon={faTrash} /></td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default AllSellers;