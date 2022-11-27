import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';


const AllSellers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://laptop-gamma.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = (email) => {
        const proceed = window.confirm('Are you sure, you want to Delete this product?');
        if (proceed) {
            fetch(`https://laptop-gamma.vercel.app/users/${email}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        refetch();
                    }
                })
        }
    }

    return (
        <div>
            <h1>All Sellers</h1>
            <Table striped bordered hover className='mt-5 mb-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>

                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>

                        <td className='text-center'> <button onClick={() => handleDelete(user.email)} className='border-0 btn btn-danger' type=""><FontAwesomeIcon className='' icon={faTrash} /></button> </td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default AllSellers;