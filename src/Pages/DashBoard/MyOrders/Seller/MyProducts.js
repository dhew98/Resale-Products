import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const MyProducts = () => {

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/products?email=${user?.email}`;


    const [Products, setProducts] = useState([]);


    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
            return data;
        }
    })



    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to Delete this product?');
        if (proceed) {
            fetch(`https://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = Products.filter(rev => rev._id !== id);
                        setProducts(remaining);
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
                        <th>Resale Price</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((prod, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price}Tk</td>
                        <td>{prod.status}</td>
                        <td className='text-center'> <button onClick={() => handleDelete(prod._id)} className='border-0 btn btn-danger' type=""><FontAwesomeIcon className='' icon={faTrash} /></button> </td>
                    </tr>)}
                </tbody>
            </Table>
        </div>

    );
};

export default MyProducts;