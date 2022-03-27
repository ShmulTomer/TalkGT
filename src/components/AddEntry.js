
import { supabase } from '../supabaseClient'
import { useState } from 'react'
import { useEffect } from 'react';





export default function AddEntry() {

    
  const [count, setCount] = useState(1);
  const countHandler = event => setCount(count + 1);

  const [desc, setDesc] = useState("Description");
  const [subj, setSubj] = useState("Subject Line");
  const [msg, setMsg] = useState("Enter a new complaint here!");
  
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [title, setTitle] = useState(null)
  const [email, setEmail] = useState(null)


  useEffect(() => {
    getProfile()
  }, [supabase.auth.session()])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, title`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setTitle(data.title)
        setEmail(data.email)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function DisplayD(desc, subj, prior, anony) {
    
    const {data, error} = await supabase
      .from('ComplaintDB')
        .insert([
    { description: desc, subject: subj, priority: prior, username: username, title: title, anon: anony, email: email},])
    
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
          Priority &nbsp;&nbsp;  
          
          <label class="switch">
            <input id='toggle' type="checkbox" />
            <span class="slider round"></span>
          </label>
          
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
            
          <button onClick={() => DisplayD(document.getElementById('description').value, document.getElementById('subject').value, document.querySelector('#toggle').checked, document.querySelector('#toggle2').checked)}> 
             Submit complaint
          </button > 
          
      
          
        </header>
      </div>
  );
}