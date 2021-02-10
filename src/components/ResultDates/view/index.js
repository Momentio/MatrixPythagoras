import React, { Component } from 'react';
import "./index.css";

class ResultDates extends Component {
  constructor(props){
    super(props);
  };

  render() {
    if(!this.props.model) return false;
    return (
      <div className="resultDates">
        {
          this.props.model.gValue.map((e, i) => {
            return (
              <span className="resultDates__item" key={i}>
                {
                  `${
                    e.getDate() >= 10
                      ? e.getDate() : "0" + e.getDate()
                  }.${
                    (e.getMonth() + 1) >= 10
                      ? (e.getMonth() + 1) : "0" + (e.getMonth() + 1)
                  }.${
                    e.getFullYear()
                  }`
                }
                <span className="resultDates__item--ved">
                  {
                    `(${
                      e.getDate() >= 10
                        ? e.getDate() : "0" + e.getDate()
                    }.${
                      (e.getMonth() + 1) >= 10
                        ? (e.getMonth() + 1) : "0" + (e.getMonth() + 1)
                    }.${
                      e.getFullYear() + 5508
                    })`
                  }
                </span>
              </span>
            );
          })
        }
      </div>
    );
  }
}

export default ResultDates;