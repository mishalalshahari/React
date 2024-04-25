import React from "react";
import ReactDOM from "react-dom/client";

const data = 1000;
const elem = <span>React Element</span>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    {data}
    {elem}
    Hello, React!
  </h1>
);

//component composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">
      React Functional Component
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);