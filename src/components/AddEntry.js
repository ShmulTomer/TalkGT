import { supabase } from '../supabaseClient'
import { useState } from 'react'
import { useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import SendSharpIcon from '@mui/icons-material/SendSharp';



export default function AddEntry() {

  const [desc, setDesc] = useState("");
  const [subj, setSubj] = useState("");
  const [msg, setMsg] = useState("Enter a new complaint here!");

  const [loading, setLoading] = useState(false);
  
  const [uuid, setUUID] = useState(null);

  useEffect(() => {
    getProfile()
  }, [supabase.auth.session()])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, title, email, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUUID(user.id);
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function DisplayD(desc, subj, anony) {

    if(desc.length < 5 || subj.length < 5) {
      setMsg("Please enter a valid subject and description.")
      return;
    }

    if(subj.length > 100) {
      setMsg("The subject must be less than 100 characters.")
      return;
    }

    const {data, error} = await supabase
      .from('COMPLAINT')
        .insert([
          { subj: subj, desc: desc, anon: anony, userID: uuid},])
    
    setDesc("");
    setSubj("");
    setMsg("Your complaint has been submitted!");
  } 

return (
      <div className="App-text">
        <header>
          <p>
            {msg}
          </p>
          
          <div className="input3">
            <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }} variant="filled" label="Subject" id='subject' value={subj} onChange={(e) => setSubj(e.target.value)} />
          
         
          <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }} multiline={true}
              variant="filled" label="Description" id='description' value={desc} onChange={(e) => setDesc(e.target.value)} rows="10" />
          </div>
          <br></br>
          
          Anonymous &nbsp;&nbsp;  
          
          <label class="switch">
            <input id='toggle2' type="checkbox" />
            <span class="slider round"></span>
          </label>
          
          <br></br>
          <p>
          </p>
            
          {/* <button onClick={() => DisplayD(document.getElementById('description').value, document.getElementById('subject').value, document.querySelector('#toggle2').checked)}> 
             Submit complaint
          </button >  */}
          <Button variant="contained" style={{
                input: {
                  backgroundColor: "#fffff",
                  fontSize: "30px"
                }
              }} onClick={() => DisplayD(document.getElementById('description').value, document.getElementById('subject').value, document.querySelector('#toggle2').checked)} endIcon={<SendSharpIcon />}>
            Submit
          </Button>
          
        </header>
      
          
      </div>
  );
}