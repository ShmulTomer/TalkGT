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

  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [title, setTitle] = useState(null)


  useEffect(() => {
    getProfile()
  }, [supabase.auth.session()])

  async function getProfile() {
    if(session) {
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
        }
      } catch (error) {
        alert(error.message)
      } finally {
        setLoading(false)
      }
    }
  }

    return <div className="App">
        <div className="App-header">  
            <p ><b>
            Add your Complaint</b>
            </p>
        </div>

        <div className="App-text">
            
            {(!session) ? <PleaseLogin /> : <AddEntry />}
            <p>
                
            </p>
        </div>
    </div>;
};

export default Add;