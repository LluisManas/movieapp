import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Initial from "./components/Initial";
import { Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Popular from "./components/Popular";
import Login from "./components/Login";
import MovieInfo from "./components/MovieInfo";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (userObj) => {
    this.setState({
      user: userObj,
    });
  };
  render() {
    console.log(this.userObj);
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={(props) => (
            <Initial
              {...props}
              setUser={this.setUser}
              user={this.state.user}
              history={props.history}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              setUser={this.setUser}
              user={this.state.user}
              history={props.history}
            />
          )}
        />

        <Route
          exact
          path="/homepage"
          render={(props) => (
            <Homepage
              {...props}
              setUser={this.setUser}
              user={this.state.user}
              history={props.history}
            />
          )}
        />
        <Route
          exact
          path="/homepage/:id"
          render={(props) => (
            <MovieInfo
              {...props}
              setUser={this.setUser}
              user={this.state.user}
              history={props.history}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
