import React, { Component } from 'react';
import Date from "../../Date";

import "./index.css";

class Period extends Component {
  constructor(props){
    super(props);
  };

  findDates = () => {
    this.props.dispatch(
      this.props.findDates()
    );
  }

  updateStart = (value) => {
    this.props.dispatch(
      this.props.model.start.gUpdate(
        this.props.model.start.gKey,
        value
      )
    );
    this.findDates();
  }

  updateEnd = (value) => {
    this.props.dispatch(
      this.props.model.end.gUpdate(
        this.props.model.end.gKey,
        value
      )
    );
    this.findDates();
  }
  
  render() {
    if(!this.props.model) return false;
    
    return (
      <div className="period">
        <Date value={this.props.model.gValue.start} onChange={this.updateStart} />
        -
        <Date value={this.props.model.gValue.end} onChange={this.updateEnd} />
      </div>
    );
  }
}

export default Period;