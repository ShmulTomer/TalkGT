
import { supabase } from '../supabaseClient'
import { useState } from 'react'





export default function DisplayDB() {

    
  

  async function DisplayD(desc, subj, prior) {
    
  const {data, error} = await supabase
    .from('ComplaintDB')
      .insert([
  { description: desc, subject: subj, priority: prior },])
  
} 

return (
      <div>
        <header>

            
        </header>
      </div>
  );
}