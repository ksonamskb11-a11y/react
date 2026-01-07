// # add these-2 belowed import links to get modules for React to use througth `type="module" ` in <script type="module" src="index.js"> 
// # these links are given by React platform (by their company)
import React from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev";
import ReactDOMClient from "https://esm.sh/react-dom@19.0.0-beta-04b058868c-20240508/client/?dev";

// # there are 2 methods to use React --> 1.by cdn (which is we never going to use it)
// 1st we have to (need to) create a root for a React program by using ReactDOMClient(2nd import)..
const root = ReactDOMClient.createRoot(document.getElementById("root"));

// # this is use only for single element tag--> by using React(1st import)..
// const heading = React.createElement(
//   "h1",                                                               // Tag name
//   { id: "heading", class: "first_heading" },                          // create empty object for passing that tag's attributes
//   "hello world"                                                      // passing that tag's childern [instead of calling it values]
// );
// console.log(heading);

// # this is use only for multiple element tags--> by using React(1st import)..
const nestedElement = React.createElement("div",{},
    [
    React.createElement("h1",{id:"first child"},"first child"),
    React.createElement("h1",{id:"second child"},"second child")
    ]
)
root.render(nestedElement);


// # jsx code (not working in js)[in jsx we can simply use HTML codes directly, so it is so easy]
// const heading = (<div> 
//     <h2> h2</h2>
//     <h2> h2</h2>
//      </div>)
// root.render(heading);