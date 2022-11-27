import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import CardGroup from 'react-bootstrap/CardGroup';

const Advertise = () => {

    const { data: advertise = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://laptop-gamma.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    });

    const len = advertise.length;
    console.log(len);
    return (
        <div>
            {
                len && <>
                    <h1 className='text-center'>Advertise Products</h1>
                    {

                        advertise.map(ad => <AdvertiseCard key={ad._id} ad={ad}></AdvertiseCard>)

                    }
                </>

            }
        </div>
    );
};

export default Advertise;