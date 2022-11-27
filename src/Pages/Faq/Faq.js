import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Faq = () => {
    useTitle("FAQ")
    return (
        <div style={{ height: "400px" }} className='text-center m-5 px-5 py-5'>
            <h1 className="mt-5 p-5">404! Not found!</h1>
        </div>
    );
};

export default Faq;