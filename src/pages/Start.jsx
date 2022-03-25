import React from "react";
import "../styles.css"

const Start = () => {
     
    return <div className="App">
    <header className="App-header">
        <p ><b>
        Getting Started</b>
        </p>
        <p>
        </p>
    </header>
    <div className="App-header2">
        <b>Creating an Account</b>
    </div>
    <div className="App-text2">
    <p>
        &nbsp;&nbsp; <b>1.</b> &nbsp;Navigate to the "Account" tab 
        <br></br>
        &nbsp;&nbsp; <b>2.</b> &nbsp;Enter a valid email address and select "Send Email" 
        <br></br>
        &nbsp;&nbsp; <b>3.</b> &nbsp;Check your email (and spam) for "GT Complaints Link"
        <br></br>
        &nbsp;&nbsp; <b>4.</b> &nbsp;Click the link to return to the website 
        <br></br>
        &nbsp;&nbsp; <b>5.</b> &nbsp;Return to the "Account" tab and update your name and title 
        
        </p>
    </div>
    <div className="App-header2">
        <p></p>
        <b>Posting a Complaint</b>
    </div>
    <div className="App-text2">
    <p>
        &nbsp;&nbsp; <b>1.</b> &nbsp;Navigate to the "Add Complaint" tab
        <br></br>
        &nbsp;&nbsp; <b>2.</b> &nbsp;Enter a proper subject and description
        <br></br>
        &nbsp;&nbsp; <b>3.</b> &nbsp;Select whether the complaint is a priority 
        <br></br>
        &nbsp;&nbsp; <b>4.</b> &nbsp;Decide whether to submit the complaint as anonymous
        <br></br>
        &nbsp;&nbsp; <b>5.</b> &nbsp;Click "Submit Complaint" to add your complaint
        
        </p>
    </div>
    </div>;
};

export default Start;