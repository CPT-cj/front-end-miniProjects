import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      allvalid: false,
      submitted: false,
    };
  }

  firstnameHandler(event) {
    this.setState({
      firstname: event.target.value,
    });
  }
  lastnameHandler(event) {
    this.setState({
      lastname: event.target.value,
    });
  }
  emailHandler(event) {
    this.setState({
      email: event.target.value,
    });
  }
  submitHandler(event) {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    this.state.firstname.length > 0 &&
    this.state.lastname.length > 0 &&
    this.state.email.length > 0
      ? this.setState({ allvalid: true }) ||
        setTimeout(() => {
          this.setState({
            allvalid: false,
          });
        }, 4000)
      : this.setState({ allvalid: false });
  }

  render() {
    return (
      <div className="App">
        <form
          action=""
          className="form-login"
          onSubmit={this.submitHandler.bind(this)}
        >
          {this.state.allvalid == true ? (
            <span className="sucsess">you've succsesfully logged in 😊</span>
          ) : null}

          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstname}
            onChange={this.firstnameHandler.bind(this)}
          />
          <div>
            {this.state.firstname.length == 0 &&
              this.state.submitted == true && (
                <span>please enter your firstname 😒</span>
              )}
          </div>

          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastname}
            onChange={this.lastnameHandler.bind(this)}
          />
          {this.state.lastname.length == 0 && this.state.submitted == true && (
            <span>please enter your lastname 😒</span>
          )}

          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.emailHandler.bind(this)}
          />
          {this.state.email.length == 0 && this.state.submitted == true && (
            <span>please enter your email 😒</span>
          )}

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default App;
