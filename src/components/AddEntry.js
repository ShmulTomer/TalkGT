import { supabase } from '../supabaseClient'
import { useState } from 'react'
import { useEffect } from 'react';



export default function AddEntry() {

  const [desc, setDesc] = useState("Description");
  const [subj, setSubj] = useState("Subject Line");
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
    
    if(subj.length() > 10) {
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
      <div>
        <header>
          <p>
            {msg}
          </p>
          <textarea id='subject' value={subj} onChange={(e) => setSubj(e.target.value)} rows="2" cols="30">
          </textarea>
          <br></br>
          <textarea id='description' value={desc} onChange={(e) => setDesc(e.target.value)} rows="10" cols="60">
            
          </textarea>
          <br></br>
          
          <br></br>
          Anonymous &nbsp;&nbsp;  
          
          <label class="switch">
            <input id='toggle2' type="checkbox" />
            <span class="slider round"></span>
          </label>
          
          <br></br>
          <p>
          </p>
            
          <button onClick={() => DisplayD(document.getElementById('description').value, document.getElementById('subject').value, document.querySelector('#toggle2').checked)}> 
             Submit complaint
          </button > 
          
      
          
        </header>
      </div>
  );
}