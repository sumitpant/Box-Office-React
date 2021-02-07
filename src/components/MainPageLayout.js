import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import '../styles/Title.css'

const MainPageLayout = ({ children }) => {
  return (
    <div className="title">
      <Title
        title="BOX OFFICE APP"
        subtitle="Are You Looking for Movie Or Actors"
      />
      <Navbar />
      {children}
    </div>
  );
};

export default MainPageLayout;
