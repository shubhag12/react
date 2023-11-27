import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement("div", { id: "Container" }, [
  React.createElement(
    "h1",
    {
      id: "tile",
    },
    "heading 1"
  ),
  React.createElement("ul", {}, [React.createElement(
    "li",{},"about us"
  )],[React.createElement(
    "li",{},"support"
  )],[React.createElement(
    "li",{},"home"
  )]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passiing a react element in a root
root.render(container);
//not if we have many h1 tages in div body and so question is wheter it will replace
//all theh1 tags or it will come below it ans it will replace the tags
