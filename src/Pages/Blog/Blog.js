import React from 'react';
import useTitle from '../../Hooks/useTitle';
import './Blog.css'

const Blog = () => {

    useTitle("Blog")
    return (
        <div className='blog-container'>

            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        Difference between SQL and NoSQL
                    </h3>
                    <p className='activities-details'>
                        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        What is JWT, and how does it work?
                    </h3>
                    <p className='activities-details'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).The purpose of using JWT is not to hide data but to ensure the authenticity of the data.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        What is the difference between javascript and NodeJS?
                    </h3>
                    <p className='activities-details'>
                        Javascript is a programming language that is used for writing scripts on the website.
                        NodeJS is a Javascript runtime environment.
                        Javascript can only be run in the browsers.	We can run Javascript outside the browser with the help of NodeJS.
                        It is basically used on the client-side.	It is mostly used on the server-side.
                        Javascript is capable enough to add HTML and play with the DOM.
                        Nodejs does not have capability to add HTML tags.
                        Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                        V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                        Javascript is used in frontend development.	Nodejs is used in server-side development.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        How does NodeJS handle multiple requests at the same time?
                    </h3>
                    <p className='activities-details'>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    </p>


                </div>

            </div>


        </div >
    );
};

export default Blog;