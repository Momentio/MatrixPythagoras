import React from 'react';
import "./index.css";

export default (props) => {
  return (
    <input
      type="date"
      className="date"
      value={
        new Date(props.value).toLocaleDateString().split(".").reverse().join("-")
      }
      onChange={
        (e) => {
          props.onChange(
            new Date(
              Number(String(e.target.value).split("-")[0]),
              Number(String(e.target.value).split("-")[1]) - 1,
              Number(String(e.target.value).split("-")[2]),
            )
          );
        }
      }
      onKeyPress={(e) => {e.preventDefault();}}
    />
  );
}