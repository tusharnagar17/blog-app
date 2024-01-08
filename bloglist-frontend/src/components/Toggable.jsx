import React, { useState } from "react";

const Toggable = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const hideProperty = { display: visible ? "none" : "" };
  const showProperty = { display: visible ? "" : "none" };

  if (props.content) {
    return (
      <div>
        <div style={hideProperty}>
          {props.content}
          <button onClick={toggleVisibility}>{props.name}</button>
        </div>
        <div style={showProperty}>
          {props.content} <button onClick={toggleVisibility}>hide</button>
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div style={hideProperty}>
          <button onClick={toggleVisibility}>{props.name}</button>
        </div>
        <div style={showProperty}>
          {props.children}
          <button onClick={toggleVisibility}>Cancel</button>
        </div>
      </div>
    );
  }
};

export default Toggable;
