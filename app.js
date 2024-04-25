import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
  <h1 className="head" tabIndex="1">
    Hello, React!
  </h1>
);

// React Functional Component
// A react functional component is a plain JavaScript function that accepts props as an argument and returns a React element.
const HeadingComponent = () => {
  return <h1>Hello, React Functional Component!</h1>;
}
const HeadingComponent2 = () => <h1>Hello, React Functional Component!</h1>;
//HeadingComponent and HeadingComponent2 are same

// Class Based Component - OLD
// Functional Component - NEW

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);