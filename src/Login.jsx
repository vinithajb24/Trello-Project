import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyD7Iw_Wd0APtHwBsjHZbRFBLtBt5Oznwn8",
  authDomain: "trellodemo-6abc1.firebaseapp.com",
  databaseURL: "https://trellodemo-6abc1-default-rtdb.firebaseio.com",
  projectId: "trellodemo-6abc1",
  storageBucket: "trellodemo-6abc1.appspot.com",
  messagingSenderId: "621419942716",
  appId: "1:621419942716:web:346236230ee199f066c439",
  measurementId: "G-5E9J0NP1NH",
};
firebase.default.initializeApp(config);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      userName: null,
      userEmail: null,
      userPic: null,
    };
    this.google = this.google.bind(this);
  }

  google() {
    var provider = new firebase.default.auth.GoogleAuthProvider();
    var promise = firebase.default.auth().signInWithPopup(provider);

    promise.then((result) => {
      var user = result.user;
      console.log(result);
      firebase.default
        .database()
        .ref("users/" + user.uid)
        .set({
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
          refreshToken: user.refreshToken,
        });
      localStorage.setItem("token", result.credential.access_token);
      this.setState({
        userName: result.user.displayName,
        user_id: result.user.uid,
        userPic: result.user.photoURL,
        islogged: true,
      });
    });
  }

  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="bhBMO">
        <div className="container">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <button onClick={this.google} id="google" className="google">
            Sign In with Google
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
