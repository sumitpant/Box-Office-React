import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1 style={{ color: "whitesmoke" }}>{title}</h1>
      <p style={{ color: "whitesmoke" }}>{subtitle}</p>
    </div>
  );
};

export default Title;
