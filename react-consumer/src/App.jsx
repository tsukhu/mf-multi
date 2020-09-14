import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

window.header.get("./Header").then((module) => {
  const Header = module().default;
  new Header({
    target: document.getElementById("header"),
  });
});

window.vueapp.get("./FullApp").then((m) => {
  m().default(`#vuecomponent`);
});

const App = () => {
  
  const handleClick = () => {
    const event = new CustomEvent("incr", { bubbles: true });
      document.dispatchEvent(event);
  }
  return (
  <div>
    <div>Hi there, I'm React from Webpack 5.</div>
    <button onClick={() => handleClick()}>Add To Cart React!</button>
  </div>
)};

ReactDOM.render(<App />, document.getElementById("app"));
