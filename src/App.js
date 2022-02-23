import logo from './logo.svg';
import { createClient } from '@supabase/supabase-js'
import './App.css';
import Auth from './components/Auth';
import Account from './pages/Account';
import Display from './components/Display';

import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
       
        
        <p ><b><i>
          Georgia Tech Complaint System</i></b>
        </p>
        <Display />
        
        
      </header>
    </div>
    
  );
}


export default App;
