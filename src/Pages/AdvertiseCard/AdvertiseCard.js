import React from 'react';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AdvertiseCard = ({ ad }) => {

    const { img, name, price, description } = ad
    return (
        <div>
            <Card className='w-50 mx-auto mt-5'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <Card.Img className='img-fluid' variant="top" src={img} />
                    </PhotoView>
                </PhotoProvider>

                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <p >Price : <span className='fw-bold'>{price} Tk</span> </p>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};

export default AdvertiseCard;