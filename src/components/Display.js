
import { supabase } from '../supabaseClient'
import { useState } from 'react'
import '../App.css';




export default function Display() {

    
  const [count, setCount] = useState(1);
  const countHandler = event => setCount(count + 1);
  

  async function DisplayD() {
    
  const {data, error} = await supabase
    .from('ComplaintDB')
      .insert([
  { description: document.getElementById('description').value, subject: document.getElementById('subject').value },])
  
  setCount(count + 1);
} 

return (
      <div>
        <header>
           Number of presses: &nbsp;
           {count}
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
            
          <button onClick={() => DisplayD()}> 
             Add Entry to Database
          </button > 
          
      
          
        </header>
      </div>
  );
}