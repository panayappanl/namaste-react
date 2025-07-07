import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="heading" className="hello">
    Namaste React from JSX 🚀
  </h1>
);

const data = 10000;

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
