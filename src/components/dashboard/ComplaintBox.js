import React from "react";
import '../../styles.css'
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";
import Avatar from "../authentication/Avatar";
import AvatarIcon from "../authentication/AvatarIcon";

export default function ComplaintBox({ session, id, subj, desc, upv, dov, time, date, anon, userID }) {


  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [title, setTitle] = useState(null);
  const [avatar_url, setAvatar] = useState(null);

  useEffect(() => {
    getProfile()
  }, )

  async function getProfile() {
    try {
      if(anon == true) {
        setName("Anonymous")
        setTitle("Anonymous User")
        setAvatar(null)
        return;
      }

      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, title, avatar_url`)
        .eq('id', userID)
        .single()

      // if (error && status !== 406) {
      //   throw error
      // }

      if (data) {
        if (anon == true) {}
        setName(data.username);
        setTitle(data.title);
        setAvatar(data.avatar_url);
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }


    // async function Resolve() {

    //   const { data, error } = await supabase
    //     .from('ComplaintDB')
    //     .update({ 'resolve': "true" })
    //     .eq('id', id)
    // }

    // if(resolve == "true") {
    //       return <div className="App">

    //       <div className="boxR">
            
    //       <div className="boxR-subject">
            
    //         <b></b> {subj}
    //       </div>

    //       <div className="boxR-description">
    //         <br></br>
    //         {desc}
    //         <br></br>
    //         <br></br>
    //         <hr></hr>
    //       </div>

          
          
    //         <br></br>
    //       <div className="grid-container">
    //         <div className="grid1"> 
    //           <div className="boxR-user">
    //             {(anon == "true" || !avatar_url) ? <i className='bx bx-user'> </i> : <AvatarIcon
    //             url={avatar_url}
    //             size={21}/>}
    //           <b>&nbsp;{userH}</b> 

    //           </div>

    //           <div className="boxR-title">
              
              
    //           {titleH}
    //           </div>
    //           </div>

    //           <div className="grid2"> 
    //             <div className="boxR-right">
    //               <i className='bx bx-time'></i> &nbsp;{date} at {time.substring(0,5)}
    //               <br></br>
                  
    //               <br></br>
    //               <i className='bx bx-like'></i>&nbsp;{likeH} &emsp;<i className='bx bx-dislike'></i>&nbsp;{dislikeH} 
                  
    //             </div>

    //           </div>
    //       </div>
    //     </div>
    //       <br></br>
    //   </div>;
    // }

    

    return <div className="App">

            <div className="box">
              
            <div className="box-subject">
              
              {subj}
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
                <b>&nbsp;{name}</b> 

                </div>

                <div className="box-title">
                
                
                {title}
                </div>
                </div>

                <div className="grid2"> 
                  <div className="box-right">
                    <i className='bx bx-time'></i> &nbsp;{date} at {time.substring(0,5)}
                    <br></br>
                    
              
                    <div className="likeDisplay">
                      
                      <i className='bx bx-upvote'></i>&nbsp;{upv} &emsp;<i className='bx bx-downvote'></i>&nbsp;{dov} 
                    </div>
                  </div>

                </div>
            </div>

            <div>
                <br></br>
                
                  {/* <button class="greenButton" onClick={() => Like()}> 
                &emsp;<i className='bx bx-upvote'></i>&emsp;
                </button > 
              
              &nbsp;&nbsp; 
              
              <button class="redButton" onClick={() => Dislike()}> 
              &emsp;<i className='bx bx-downvote'></i>&emsp;
              </button > 
              &nbsp;&nbsp; 
              <button onClick={() => Resolve()}> 
              &emsp;Resolve&emsp;
              </button >  */}
              &nbsp;&nbsp; 
              <button > 
              &emsp;Reply&emsp;
              </button > 
            </div>
          </div>
            <br></br>
        </div>;
}
