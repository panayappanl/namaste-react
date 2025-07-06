import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", { key: "child1-1" }, "This is Namaste React 🚀"),
    React.createElement("h2", { key: "child1-2" }, "I'm h2 Tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "child2-1" }, "I'm h1 Tag"),
    React.createElement("h2", { key: "child2-2" }, "I'm h2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
