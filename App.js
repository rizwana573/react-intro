import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child1"},[
    React.createElement("span",{id:"grandChild1"}, "Hello from child1!"),
]),
    React.createElement("div", {id:"child2"},[
    React.createElement("span",{id:"grandChild2"}, "Hello from child2ss!")
]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);