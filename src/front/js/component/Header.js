import React from "react";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/Header.css";
export const Header = () => {
  return (
    <div className="Header">
      <img className="mt-m" src={HeaderImg}></img>
      <div className="Bourdain">
        <h3>If I'm an advocate for anything,</h3>
        <h3>it's to move. As far as you can, </h3>
        <h3>as much as you can. Across the</h3>
        <h3>ocean, or simply across the river.</h3>
        <h3>Walk in someone else's shoes or</h3>
        <h3>at least eat their food. It's a plus</h3>
        <h3>for everybody.</h3>
      </div>
      <h3 className="Anthony">-Anthony Bourdain.</h3>
    </div>
  );
};
