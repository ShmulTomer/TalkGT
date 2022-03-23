
import { supabase } from '../supabaseClient'
import { useState } from 'react'





export default function AddEntry() {

    
  const [count, setCount] = useState(1);
  const countHandler = event => setCount(count + 1);

  const [desc, setDesc] = useState("Description");
  const [subj, setSubj] = useState("Subject Line");
  const [title, setTitle] = useState("Enter a new complaint here!");
  

  async function DisplayD(desc, subj, prior) {
    
    const {data, error} = await supabase
      .from('ComplaintDB')
        .insert([
    { description: desc, subject: subj, priority: prior },])
    
    setDesc("");
    setSubj("");
    setTitle("Your complaint has been submitted!");
  } 

return (
      <div>
        <header>
          <p>
            {title}
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
          <p>
          </p>
            
          <button onClick={() => DisplayD(document.getElementById('description').value, document.getElementById('subject').value, document.querySelector('#toggle').checked)}> 
             Add Entry to Database
          </button > 
          
      
          
        </header>
      </div>
  );
}