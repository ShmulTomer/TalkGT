import { supabase } from '../supabaseClient'
import { useState } from 'react'
import { TextField, Button } from '@mui/material';


export default function AddMessage() {

  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("Get in Touch!");
  

  async function DisplayD(desc, name, email) {

    const {data, error} = await supabase
      .from('ContactDB')
        .insert([
        { description: desc, name: name, email: email },])
    
    setDesc("");
    setName("");
    setEmail("");
    setTitle("Your message has been sent!");
  } 

   
return (
      <div className="App-text">
        <header>
          <p>
            <b>{title}</b>
              </p>
              <div className="input3">
              <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }}
              variant="filled" label="Name" id='name' value={name} onChange={(e) => setName(e.target.value)}  />
              
              

              <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }}
              variant="filled" label="Email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />              

              <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }} multiline={true}
              variant="filled" label="Description" id='description' value={desc} onChange={(e) => setDesc(e.target.value)} rows="8" />



              </div>
              
             
              <p>
              </p>
                
          <button onClick={() => DisplayD(document.getElementById('description').value, document.getElementById('name').value, document.getElementById('email').value)}> 
             Submit
          </button > 
          
        </header>
      </div>
  );
}