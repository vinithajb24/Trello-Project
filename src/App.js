import React from "react";
import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Board from "./containers/Board";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Route path="/">
        <Header />
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          {/* <Route exact path="/">
            <Redirect exact from="/" to="dashboard" />
          </Route> */}
          <Route path="*">
            <Redirect from="/" to="dashboard" />
          </Route>
          {/* <Redirect
            from="/"
            to="/board"
          /> */}
        </Switch>
      </Route>
      <div></div>
    </Router>
  );
}
