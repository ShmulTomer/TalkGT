import React from "react";
import '../../styles.css'

export default function ComplaintBox({ date, time, user, title, subj, desc, prior, anon }) {


  // DONT FORGET TO DO SOMETHING WITH PRIORITY
    return (
        <div className="App">


            <div className="box">
              
            <div className="box-subject">
              <b>Subject:</b> {subj}
            </div>

            <div className="box-description">
              <br></br>
              {desc}
              <br></br>
              <br></br>
              <hr></hr>
            </div>

            
            
              <br></br>
            <div className="grid-container">
               <div className="grid1"> 
                <div className="box-user">
                  <i className='bx bx-user'></i> <b>{user}</b> 

                </div>

                <div className="box-title">
                {title}
                </div>
                </div>

                <div className="grid2"> 
                  <div className="box-right">
                    <i className='bx bx-time'></i> &nbsp;{date} at {time} 
                    <br></br>
                    <i className='bx bx-error'></i> &nbsp;<b>Priority</b>
                    <br></br>
                    <i className='bx bx-like'></i>&nbsp;4 &emsp;<i className='bx bx-dislike'></i>&nbsp;2 
                    
                  </div>

                </div>
            </div>

            <div>
                <br></br>
                
                  <button class="greenButton"> 
                &emsp;&emsp;<i className='bx bx-like'></i>&emsp;&emsp;
                </button > 
              
              &nbsp;&nbsp; 
              
              <button class="redButton"> 
              &emsp;&emsp;<i className='bx bx-dislike'></i>&emsp;&emsp;
              </button > 
              &nbsp;&nbsp; 
              <button > 
              &emsp;&emsp;Resolve&emsp;&emsp;
              </button > 
            </div>
          </div>
            <br></br>
        </div>
    );
}
