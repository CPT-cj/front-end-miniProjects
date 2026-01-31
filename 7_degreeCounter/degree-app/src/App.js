import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Temp from "./components/Temp/Temp.js";
import Other from "./components/Other/Other.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "parameters :",
    };
  }

  clickHandler(num1, num2, event) {
    console.log(
      "num1 : " + num1 + " | num2 : " + num2 + " | sum : " + (num1 + num2)
    );
    console.log(event);
    console.log(event.target);
  }

  render() {
    return (
      <div className="App">
        <Temp></Temp>
        <hr></hr>

        <h1>{this.state.title}</h1>
        <button
          className="button1"
          onClick={this.clickHandler.bind(this, 7, 3)}
          // onClick={(event) => this.clickHandler(7, 3, event)}
        >
          Click me
        </button>

        <hr></hr>
        <Other></Other>
      </div>
    );
  }
}

export default App;
