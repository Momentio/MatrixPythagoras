import React, { Component } from 'react';
import Input from "../../Input";
import sound from "./sound.mp3";
import "./index.css";

class Matrix extends Component {
  constructor(props){
    super(props);
  };

  findDates = () => {
    this.props.dispatch(
      this.props.findDates()
    );
  }

  update = (model, value) => {
    new Audio(sound).play();
    this.props.dispatch(
      model.gUpdate(
        model.gKey,
        value
      )
    );
    this.findDates();
  }
  
  render() {
    if(!this.props.model) return false;

    return (
      <div className="matrix">
        {
          this.props.model.gValue.map((e, i) => {
            return (
              <Input
                className="matrix__cell"
                value={
                  e !== null ? e : ""
                }
                key={i}
                onChange={
                  (value) => {
                    this.update(this.props.model[i], value);
                  }
                }
                onKeyPress={
                  (value) => {
                    this.update(this.props.model[i], value);
                  }
                }
              />
            );
          })
        }
      </div>
    );
  }
}

export default Matrix;