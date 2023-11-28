import React from "react";
import ReactDOM from "react-dom/client";

// const container = React.createElement("div", { id: "Container" }, [
//   React.createElement(
//     "h1",
//     {
//       id: "tile",
//     },
//     "heading 1"
//   ),
//   React.createElement("ul", {}, [React.createElement(
//     "li",{},"about us"
//   )],[React.createElement(
//     "li",{},"support"
//   )],[React.createElement(
//     "li",{},"home"
//   )]),
// ]);

//this is not necessary now we will move with jsx
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "div",
//   { id: "title", class: "h1" },
//   "namaster React"
// );
// //passiing a react element in a root
// root.render(heading);
//not if we have many h1 tages in div body and so question is wheter it will replace
//all theh1 tags or it will come below it ans it will replace the tags

//now to write the whole same thing using jsx what shall we do
const root = ReactDOM.createRoot(document.getElementById("root"));



//THIS IS A REACT ELEMENT AS THERE IS NO FUNCTION
//AS REACT ELEMENT IS JUST AN OBJECT
const heading = (
    <h1 id="title1" key="h2">
      namaste react
    </h1>
  );  //the circular bracket directly comes through prettier not necessary if there is one line but necessary if multiple line


//THIS IS A REACT COMPONENT AS THERE IS A FUNCTION
//IT IS A FUNCTIONAL COMPONENT

const HeaderComponent1 = () => ( <h1>shubh</h1>);


//note we can write any javascript code inside jsx just by enclosing in the {} bracket

var xyz=10;
const HeaderComponent = () => {
  return (
    //including a react element in a react component

    <div>
      {HeaderComponent1()}
      {<h1 id="title">namaste react</h1>}
    {xyz}
    {console.log("any js code")}
      <h1>Namaster React functional group</h1>
      <h2>this is a h2 tag</h2>
    </div>
  );
};

//WHEN TO RENDER REACT ELEMENT WE DO LIKE THIS
//root.render(heading1);

//WHEN TO RENDER  REACT COMPONENT WE DO LIKE THIS
root.render(<HeaderComponent />);

//we can include react element in a react component also by just enclosing in {}
//we can include a react component in a react component by just putting it as a tag
