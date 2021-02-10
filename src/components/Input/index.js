import React from 'react';
import "./index.css";

export default (props) => {
  return (
    <input
      type="text"
      className={`input${props.className ? ` ${props.className}` : ""}`}
      value={props.value}
      onChange={
        (e) => {props.onChange(e.target.value);}
      }
      onKeyPress={
        (e) => {props.onKeyPress(e.target.value);}
      }
    />
  );
}