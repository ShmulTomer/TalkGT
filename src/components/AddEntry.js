
import { supabase } from '../supabaseClient'
import { useState } from 'react'





export default function AddEntry() {

    
  const [count, setCount] = useState(1);
  const countHandler = event => setCount(count + 1);
  

  async function DisplayD(desc, subj, prior) {
    
  const {data, error} = await supabase
    .from('ComplaintDB')
      .insert([
  { description: desc, subject: subj, priority: prior },])
  
} 

return (
      <div>
        <header>
          <p>
            New entry into database:
          </p>
          <textarea id='subject' rows="2" cols="30">
            Subject Line
          </textarea>
          <br></br>
          <textarea id='description' rows="10" cols="60">
            Description
          </textarea>
          
          <br></br>
          Priority
          <br></br>    
          
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