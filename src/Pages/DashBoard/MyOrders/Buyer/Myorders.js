import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Table from 'react-bootstrap/Table';


const Myorders = () => {

    const { user } = useContext(AuthContext);
    const url = `https://laptop-gamma.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })



    return (
        <div>
            <h1>My Orders</h1>
            <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item Name</th>
                        <th>Location</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {bookings.map((book, index) => <tr>
                        <td>{index + 1}</td>
                        <td>{book.item}</td>
                        <td>{book.location}</td>
                        <td>{book.price}Tk</td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
};

export default Myorders;