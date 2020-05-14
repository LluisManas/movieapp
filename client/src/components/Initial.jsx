import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";

export class Initial extends Component {
  state = {
    user: this.props.user,
  };
  setUser = (userObj) => {
    this.setState({
      user: userObj,
    });
  };
  render() {
    return (
      <div className="initial">
        <Register setUser={this.props.setUser} history={this.props.history} />
      </div>
    );
  }
}

export default Initial;
