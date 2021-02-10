import React, { Component } from 'react';
import Date from "../../Date";
import "./index.css";

class TargetDate extends Component {
  constructor(props){
    super(props);
  };

  calcDate = (value) => {
    this.props.dispatch(
      this.props.calcDate(value)
    );
  }

  update = (value) => {
    this.calcDate(value);
    this.props.dispatch(
      this.props.model.gUpdate(
        this.props.model.gKey,
        value
      )
    );
  }
  
  render() {
    if(!this.props.model) return false;
    
    return (
      <div className="targetDate">
        <Date value={this.props.model.gValue} onChange={this.update} />
        <h3 className="targetDate__text">
          {
            `${
              this.props.model.gValue.getDate() >= 10
                ? this.props.model.gValue.getDate() : "0" + this.props.model.gValue.getDate()
            }.${
              (this.props.model.gValue.getMonth() + 1) >= 10
                ? (this.props.model.gValue.getMonth() + 1) : "0" + (this.props.model.gValue.getMonth() + 1)
            }.${
              this.props.model.gValue.getFullYear() + 5508
            }`
          }
        </h3>
      </div>
    );
  }
}

export default TargetDate;