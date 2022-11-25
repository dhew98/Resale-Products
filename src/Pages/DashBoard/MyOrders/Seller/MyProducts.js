import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const MyProducts = () => {


    const [ad, setad] = useState(true);

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/products?email=${user?.email}`;

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();

            return data;
        }
    })



    const handleAdvertise = (item) => {
        console.log(item);
        setad(false);
        fetch("http://localhost:5000/advertise", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(newData => {
                if (newData.acknowledged)
                    alert("Successfully Advertied in Homepage")
            })
            .catch(er => console.error(er));
    }

    const handleDelete = (id) => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to Delete this product?');
        if (proceed) {
            fetch(`http://localhost:5000/products/${id}`, {
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
            <h1>My Products</h1>
            <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((prod, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{prod.name}</td>

                        <td>{prod.status}</td>
                        <td className='text-center'><button onClick={() => handleAdvertise(prod)} className=' btn btn-success ' type="">Advertise</button></td>
                        <td className='text-center'> <button onClick={() => handleDelete(prod._id)} className='border-0 btn btn-danger' type=""><FontAwesomeIcon className='' icon={faTrash} /></button> </td>
                    </tr>)}
                </tbody>
            </Table>
        </div>

    );
};

export default MyProducts;