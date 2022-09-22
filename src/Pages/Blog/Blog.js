// import React from 'react';
// const Blog = () => {
//     return (
//         <div className="row mt-32 ">
//             <div className="col-md-9 mx-auto w-10/12  ">
//                 <div className='bg-accent p-4 text-black'>
//                     <h4 className='font-bold'>How will you improve the performance of a React Application?</h4>
//                     Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting React using dynamic import. Windowing or list virtualization in React.Ignore Lazy loading images in React

//                 </div>

//                 <div className=" mt-5 bg-accent  p-4 text-black">
//                     <h4 className='font-bold'>What are the different ways to manage a state in a React application?</h4>
//                     There are 4 different ways for manage a state in React application.
//                     1. Local state.
//                     2. Global state.
//                     3. Server state.
//                     4. URL state.
//                 </div>
//                 <div className=" mt-5 bg-accent  p-4 text-black">
//                     <h2 className='font-bold'> How does prototypical inheritance work?</h2>
//                     <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object. </p>
//                 </div>
//                 <div className=" mt-5 bg-accent  p-4 text-black">
//                     <h2 className='font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
//                     <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.
//                     </p>

//                 </div>
//                 <div className=" mt-5 bg-accent  p-4 text-black">
//                     <h4 className='font-bold'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
//                     You can use the Array.prototype.filter function which takes a callback and filters accordingly. Per the documentation: The filter() method creates a new array with all elements that pass the test implemented by the provided function. The callback, which is the provided function, takes three arguments. From the documentation: callback Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking three arguments: element The current element being processed in the array. index The index of the current element being processed in the array. array The array filter was called upon. We may use element to check the current element and test if it should be filtered or not, like so:
//                     Here, we use a callback (the test) that checks if the current element (obj)'s property specified in filter is strictly equal to keyword. If it passes, it is kept, and thus all objects with property Level with vale Standard are kept. You can also shorten this with ES6 arrow functionsThis is just shorthand for the above. It is effectively the same, returning true or false based on if the current element's Level property is strictly equal to keyword.
//                 </div>
//                 <div className=" mt-5 bg-accent  p-4 text-black">
//                     <h4 className='font-bold'>What is a unit test? Why should write unit tests?</h4>
//                     Unit testing is a software development process. Where the smallest testable part of an application, which is verified individually and independently for proper management. Basically, a unit test is a way to test a unit - the smallest piece of code that can be logically isolated in a system.
//                     <br />Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
//                 </div>
//                 <br />
//             </div>

//         </div>


//     );
// };

// export default Blog;