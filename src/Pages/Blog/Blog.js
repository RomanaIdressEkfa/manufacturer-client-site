import React from 'react';


const Blog = () => {
    return (
        <div className="row mt-32 ">
            <div className="col-md-9 mx-auto w-10/12  ">
                <div className='bg-accent p-4 text-black'>
                    <h4 className='font-bold'>How will you improve the performance of a React Application?</h4>
                    JavaScript is a programming language but NodeJS is a JavaScript runtime environment. Javascript used for client-side and it is frontend development but NodeJS used for server-side and it is server-side development.JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.

                </div>

                <div className=" mt-5 bg-accent  p-4 text-black">
                    <h4 className='font-bold'>What are the different ways to manage a state in a React application?</h4>
                    SQL databases are primarily called RDBMS or Relational Databases But,NoSQL databases are primarily called as Non-relational or distributed database. SQL databases are table-based and NoSQL databases are document, key-value, graph, or wide-column stores.SQL means Structured query language(SQL) but,NoSQL is no declarative query language.
                    SQL databases are vertically scalable but,NoSQL databases are horizontally scalable
                </div>
                <div className=" mt-5 bg-accent  p-4 text-black">
                    <h2 className='font-bold'> How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. </p>
                </div>
                <div className=" mt-5 bg-accent  p-4 text-black">
                    <h2 className='font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                    <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind. So when we need to do backend development, that's a good time for use Nodejs.
                        <br />
                        MongoDB facilitate to store database in json(javascript object notation) (or simply when data in form of key value pair) this is very fast and efficient so you should use it when you have key value pair to store(json data)
                    </p>

                </div>
                <div className=" mt-5 bg-accent  p-4 text-black">
                    <h4 className='font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                    SQL databases are primarily called RDBMS or Relational Databases But,NoSQL databases are primarily called as Non-relational or distributed database. SQL databases are table-based and NoSQL databases are document, key-value, graph, or wide-column stores.SQL means Structured query language(SQL) but,NoSQL is no declarative query language.
                    SQL databases are vertically scalable but,NoSQL databases are horizontally scalable
                </div>
                <div className=" mt-5 bg-accent  p-4 text-black">
                    <h4 className='font-bold'>What is a unit test? Why should write unit tests?</h4>
                    Unit testing is a software development process. Where the smallest testable part of an application, which is verified individually and independently for proper management. Basically, a unit test is a way to test a unit - the smallest piece of code that can be logically isolated in a system.
                    <br />Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                </div>
                <br />
            </div>

        </div>


    );
};

export default Blog;