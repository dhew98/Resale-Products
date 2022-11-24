import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Category = ({ cat }) => {
    const { _id, name, img, decription } = cat;
    return (
        <Card style={{ width: '25rem' }} className="m-5 " >
            <PhotoProvider>
                <PhotoView src={img}>
                    <Card.Img className='img-fluid rounded-start' variant="top" src={img} />
                </PhotoView>
            </PhotoProvider>

            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {decription}
                </Card.Text>
                <Link to={`/categories/${_id}`}> <Button variant="primary">See Products</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default Category;