import React from "react";
import "../styles.css";
import logo from "../components/sidebar/TalkGT_Logo.png";

const Start = () => {
  return (
    <div className="App">
      <header className="App-header3">
        <p>
          <b>Getting Started</b>
        </p>
      </header>

      <div className="App-header4">
        
       <img src={logo} width="100px" height="100px"/> <b>Welcome to Talk GT</b>
      </div>

      <div className="App-text2">
        Here, you can post and interact with other Georgia Tech students. You can create a thread, comment on others, and vote on others' posts. When you've got your answer, you can resolve your post and lock it. Start by making your own account!

      </div>


      <br></br>
      <br></br>
      <br></br>
      <div className="App-header2">
        
        <b>Creating your Account</b>
      </div>
      <div className="App-text2">
        <p>
          &nbsp;&nbsp; <b>1.</b> &nbsp;Navigate to the "Account" tab
          <br></br>
          &nbsp;&nbsp; <b>2.</b> &nbsp;Enter a valid email address and select
          "Send Email"
          <br></br>
          &nbsp;&nbsp; <b>3.</b> &nbsp;Check your email (and spam) for "Talk GT
          Link"
          <br></br>
          &nbsp;&nbsp; <b>4.</b> &nbsp;Click the link to return to the website
          <br></br>
          &nbsp;&nbsp; <b>5.</b> &nbsp;Return to the "Account" tab and update
          your name and title
        </p>
      </div>
      <div className="App-header2">
        <p></p>
        <b>Submitting your first Post</b>
      </div>
      <div className="App-text2">
        <p>
          &nbsp;&nbsp; <b>1.</b> &nbsp;Navigate to the "Add Post" tab
          <br></br>
          &nbsp;&nbsp; <b>2.</b> &nbsp;Enter a proper subject and description
          <br></br>
          &nbsp;&nbsp; <b>4.</b> &nbsp;Decide whether to submit the post as
          anonymous
          <br></br>
          &nbsp;&nbsp; <b>5.</b> &nbsp;Click "Submit" to add your post
        </p>
      </div>

      <div className="App-header2">
        <p></p>
        <b>Interacting with Posts</b>
      </div>
      <div className="App-text2">
        <p>
          &nbsp;&nbsp; <b>1.</b> &nbsp;Navigate to the "Home" tab
          <br></br>
          &nbsp;&nbsp; <b>2.</b> &nbsp;Play around with the different features!
          <br></br>
          &nbsp;&nbsp; <b>4.</b> &nbsp;Resolve (and unresolve) your post
          <br></br>
          &nbsp;&nbsp; <b>5.</b> &nbsp;Upvote and downvote other posts before they get resolved
        </p>
      </div>
    </div>
  );
};

export default Start;
