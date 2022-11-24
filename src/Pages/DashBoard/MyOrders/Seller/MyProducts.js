import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';


const MyProducts = () => {

    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/products?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    return (

        <div>
            <h1>My Products</h1>
            <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Resale Price</th>
                        <th>Issue Date</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((prod, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <td>{prod.date}Tk</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>

    );
};

export default MyProducts;