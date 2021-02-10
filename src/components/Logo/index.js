import React from 'react';
import img from "./img.jpg";
import sound from "./sound.mp3";
import "./index.css";

export default (props) => {
  return (
    <img
      src={img}
      className="logo"
      onMouseOver={
        ()=>{
          new Audio(sound).play();
        }
      }
    />
  );
}