import React from "react";
import '../../styles.css'
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";
import Avatar from "../authentication/Avatar";
import AvatarIcon from "../authentication/AvatarIcon";

export default function ComplaintBox({ id, resolve, date, time, avatar_url, user, title, subj, desc, prior, anon, like, dislike }) {

  const [likeH, setLike] = useState(like)
  const [dislikeH, setDislike] = useState(dislike)
  const [userH, setUser] = useState(user)
  const [titleH, setTitle] = useState(title)

  useEffect(() => {
    if(anon == "true") {
      setUser("Anonymous")
      setTitle("Anonymous User")
    }
  }, []);

    async function Like() {

      const { data, error } = await supabase
        .from('ComplaintDB')
        .update({ 'like': likeH + 1 })
        .eq('id', id)

        setLike(likeH + 1)
    }

    async function Dislike() {

      const { data, error } = await supabase
        .from('ComplaintDB')
        .update({ 'dislike': dislikeH + 1 })
        .eq('id', id)

        setDislike(dislikeH + 1)
    }

    async function Resolve() {

      const { data, error } = await supabase
        .from('ComplaintDB')
        .update({ 'resolve': "true" })
        .eq('id', id)
    }

    if(resolve == "true") {
          return <div className="App">

          <div className="boxR">
            
          <div className="boxR-subject">
            
            <b>Subject:</b> {subj}
          </div>

          <div className="boxR-description">
            <br></br>
            {desc}
            <br></br>
            <br></br>
            <hr></hr>
          </div>

          
          
            <br></br>
          <div className="grid-container">
            <div className="grid1"> 
              <div className="boxR-user">
                {(anon == "true" || !avatar_url) ? <i className='bx bx-user'> </i> : <AvatarIcon
                url={avatar_url}
                size={21}/>}
              <b>&nbsp;{userH}</b> 

              </div>

              <div className="boxR-title">
              
              
              {titleH}
              </div>
              </div>

              <div className="grid2"> 
                <div className="boxR-right">
                  <i className='bx bx-time'></i> &nbsp;{date} at {time.substring(0,5)}
                  <br></br>
                  {(anon == "true") && <i className='bx bx-error'></i>}
                  {(anon == "true") && <b>&nbsp;Priority</b>}
                  
                  <br></br>
                  <i className='bx bx-like'></i>&nbsp;{likeH} &emsp;<i className='bx bx-dislike'></i>&nbsp;{dislikeH} 
                  
                </div>

              </div>
          </div>
        </div>
          <br></br>
      </div>;
    }

    return <div className="App">

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
                  {(anon == "true" || !avatar_url) ? <i className='bx bx-user'> </i> : <AvatarIcon
                  url={avatar_url}
                  size={21}/>}
                <b>&nbsp;{userH}</b> 

                </div>

                <div className="box-title">
                
                
                {titleH}
                </div>
                </div>

                <div className="grid2"> 
                  <div className="box-right">
                    <i className='bx bx-time'></i> &nbsp;{date} at {time.substring(0,5)}
                    <br></br>
                    {(anon == "true") && <i className='bx bx-error'></i>}
                    {(anon == "true") && <b>&nbsp;Priority</b>}
                    
                    <br></br>
                    <i className='bx bx-like'></i>&nbsp;{likeH} &emsp;<i className='bx bx-dislike'></i>&nbsp;{dislikeH} 
                    
                  </div>

                </div>
            </div>

            <div>
                <br></br>
                
                  <button class="greenButton" onClick={() => Like()}> 
                &emsp;&emsp;<i className='bx bx-like'></i>&emsp;&emsp;
                </button > 
              
              &nbsp;&nbsp; 
              
              <button class="redButton" onClick={() => Dislike()}> 
              &emsp;&emsp;<i className='bx bx-dislike'></i>&emsp;&emsp;
              </button > 
              &nbsp;&nbsp; 
              <button onClick={() => Resolve()}> 
              &emsp;&emsp;Resolve&emsp;&emsp;
              </button > 
            </div>
          </div>
            <br></br>
        </div>;
}
