import React from "react";
import "../styles.css";
import { Link, useLocation } from "react-router-dom";

export default function PleaseLogin() {
  return (
    <div className="App">
      <div className="App-text">
        <br></br>
        <br></br>
        <br></br>
        <div>
          Sign in under the "Account" tab and set a <b>name</b>
          <br></br>and <b>occupation</b> to gain the ability to add a post
          <br></br>
          <br></br>
          <Link to="/user" style={{ textDecoration: "none" }}>
            &nbsp;&nbsp;
            <button className="hover"> Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
