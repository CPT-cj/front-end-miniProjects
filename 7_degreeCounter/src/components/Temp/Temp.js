import "./Temp.css";
import React, { Component } from "react";

class Temp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      degree: 10,
      degreeClass: "cold",
    };

    this.minusClick = this.minusClick.bind(this);
  }

  plusClick() {
    if (this.state.degree >= 30) {
      return false;
    }

    if (this.state.degree >= 15) {
      this.setState({
        degreeClass: "hot",
      });
    }

    this.setState((prevState) => {
      return {
        degree: prevState.degree + 1,
      };
    });
  }

  minusClick() {
    if (this.state.degree <= 0) {
      return false;
    }

    if (this.state.degree <= 15) {
      this.setState({
        degreeClass: "cold",
      });
    }

    this.setState((prevState) => {
      return {
        degree: prevState.degree - 1,
      };
    });
  }

  render() {
    return (
      <div className="app-container">
        <div className="temperature-display-container">
          <div className={`temperature-display ${this.state.degreeClass}`}>
            {this.state.degree} C
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.plusClick.bind(this)}>+</button>
          <button onClick={this.minusClick}>-</button>
        </div>
      </div>
    );
  }
}

export default Temp;
