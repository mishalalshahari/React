import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement - JS Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React!"
);
console.log(heading);

//JSX - HTML-like or XML-like syntax extension for ECMAScript without any defined semantics.
//js engine doesn't understand jsx but parcel is doing it for us
//jsx (transpiled before it reaches the js engine by parcel(acting as manager) with the help of Babel)
//JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Hello, React!</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);