import React from "react";
import '../../styles.css'

export default function ComplaintBox({ date, time, user, title, subj, desc, prior, anon }) {

    return (
        <div className="App">
            <div className="box">
            <div className="App-text3">
            {date} @ {time}
            <br></br>
            <b>{user},</b> {title}
            <br></br>
            <p>----
               </p>
            Subject: {subj}
            <br></br>
            Description: {desc}
            <br></br>
            Priority: {prior}
            <br></br>
          </div>
        <div className="complaintButton" >
            <br></br>
          <button > 
          &emsp;&emsp;&emsp;&emsp;Resolve&emsp;&emsp;&emsp;&emsp;
          </button > 
          </div>
            </div>
            <br></br>
        </div>
    );
}
