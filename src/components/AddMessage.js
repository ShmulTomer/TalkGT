import { supabase } from '../supabaseClient'
import { useState } from 'react'


export default function AddMessage() {

  const [desc, setDesc] = useState("Description");
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("Email address");
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
      <div>
        <header>
          <p>
            <b>{title}</b>
              </p>
              <textarea id='name' value={name} onChange={(e) => setName(e.target.value)} rows="2" cols="30">
              </textarea>
              <br></br>
              <textarea id='email' value={email} onChange={(e) => setEmail(e.target.value)} rows="2" cols="30">
              </textarea>
              <br></br>
              <textarea id='description' value={desc} onChange={(e) => setDesc(e.target.value)} rows="8" cols="60">
                
              </textarea>
              <br></br>
              <br></br>
              <p>
              </p>
                
          <button onClick={() => DisplayD(document.getElementById('description').value, document.getElementById('name').value, document.getElementById('email').value)}> 
             Submit
          </button > 
          
        </header>
      </div>
  );
}