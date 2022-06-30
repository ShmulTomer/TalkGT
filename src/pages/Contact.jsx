import React from "react";
import "../styles.css";
import AddMessage from "../components/AddMessage";

const Contact = () => {
  return (
    <div className="App">
      <header className="App-header3">
        <p>
          <b>Contact Me</b>
        </p>
      </header>
      <div className="App-text2">
        <b>Tomer Shmul</b>
        Email: &nbsp;&nbsp;tshmul@gatech.edu
        <p></p>
      </div>
      <div classname="App-text">
        <AddMessage />
      </div>
    </div>
  );
};

export default Contact;
