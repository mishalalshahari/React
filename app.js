import React from "react";
import ReactDOM from "react-dom/client";

/* 
<div id="parent">
  <div id="child1">
    <h1>I'm h1 tag.</h1>
    <h2>I'm h2 tag.</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag.</h1>
    <h2>I'm h2 tag.</h2>
  </div>
</div>
*/

//ReactElement(object) => HTML(Browser understands)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm Mishal h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
]); //parent is an object i.e. React object and it becomes html that the browser understands

//JSX

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);
//{} is the place where we will give attributes to the tag
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
