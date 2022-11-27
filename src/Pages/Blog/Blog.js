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
                        What are the different ways to manage a state in a React application?
                    </h3>
                    <p className='activities-details'>
                        There are four main types of state you need to properly manage in your React apps:

                        Local state
                        Global state
                        Server state
                        URL state
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        How does prototypical inheritance work?
                    </h3>
                    <p className='activities-details'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        React vs. Angular vs. Vue?
                    </h3>
                    <p className='activities-details'>
                        Angular.js offers a very clear structure and lots of features. It allows development teams to move quickly to implementation without the need to define structures or look for additional libraries. However, it is often too overloaded for small projects and brings unnecessary ballast.

                        React is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly.

                        Vue may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        What is a unit test? Why should we write unit tests?
                    </h3>
                    <p className='activities-details'>
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>


                </div>

            </div>



        </div >
    );
};

export default Blog;