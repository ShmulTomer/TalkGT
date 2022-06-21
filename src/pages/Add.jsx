import React from "react";
import "../styles.css"
import AddEntry from "../components/AddEntry";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import PleaseLogin from "../components/PleaseLogin";


const Add = () => {

  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

  supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

    return <div className="App">
        <div className="App-header">  
            <p ><b>
            Add your Complaint</b>
            </p>
        </div>

        <div className="App-text">
            
        {/* CHANGE THIS TO PLEASE LOGIN SCREEN */}

            {(!session) ? <PleaseLogin /> : <AddEntry />}
            <p>
                
            </p>
        </div>
    </div>;
};

export default Add;