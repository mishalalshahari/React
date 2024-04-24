import React from "react";
import ReactDOM from "react-dom/client";

//JSX - HTML-like or XML-like syntax extension for ECMAScript without any defined semantics.
//js engine doesn't understand jsx but parcel is doing it for us
//jsx (transpiled before it reaches the js engine by parcel(acting as manager) with the help of Babel)
//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxHeading = (
  <h1 className="head" tabIndex="1">Hello, React!</h1>
); //mandatory to use brackets for multiple lines of jsx inorder to make the compiler understand where the jsx starts and ends

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);