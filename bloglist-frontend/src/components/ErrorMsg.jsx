import React, { useState, useEffect } from "react";
// import "./ErrorMsg.css";

const ErrorMessage = ({ message, color }) => {
  const [showError, setShowError] = useState(false);
  const divStyle = {
    backgroundColor: color || "yellow",
    color: color || "red",
    border: `1px solid ${color}`,
    borderRadius: "3px",

    // Other CSS properties
  };

  useEffect(() => {
    setShowError(true);

    const timeout = setTimeout(() => {
      setShowError(false);
    }, 10000); // Hides the error message after 10 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  return <div>{showError && <div className={divStyle}>{message}</div>}</div>;
};

export default ErrorMessage;
