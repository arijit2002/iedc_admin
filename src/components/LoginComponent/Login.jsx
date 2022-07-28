import React, { Component } from "react";
import "./login.css";
import logo from "../../assets/logo8.png";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    //console.log(e.target.email.value);
    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "enter username" &&
      e.target.password.value === "enter Password"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="Business view - Reports" />
        <form className="form" onSubmit={this.handleSubmit} autoComplete="off">
          <div className="input-group">
            {/* <label htmlFor="username">Username</label> */}
            <input type="text" name="username" placeholder="enter your username here" required />
          </div>
          <div className="input-group">
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" name="password" placeholder="enter your password here"required />
          </div>
          <button className="login">Login</button>
        </form>
      </div>
    );
  }
}

export default App;
