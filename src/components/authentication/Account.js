import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import Avatar from './Avatar'
import { TextField, Button } from '@mui/material';
import "../../styles.css"

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [title, setTitle] = useState(null)

  const [avatar_url, setAvatarUrl] = useState(null)


  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, title, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setTitle(data.title)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, title }) {
    try {
      if (username.length < 2 || title.length < 2) {
        alert("Please enter a valid username and title.");
        return;
      }

      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        title,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <header className="App-header3">
        <b>
        My Account</b>
    </header>
    <br></br>
    <br></br>
    <br></br>
    <div className="App-text">
      <div className="input2">
        <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }} multiline={true}
              variant="filled" label="Email" id="email" value={session.user.email} disabled />
      
      <br></br>
      
        
        <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }} multiline={true}
              variant="filled" label="Username" id="username"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)} />
      
      <br></br>
      

          <TextField fullWidth sx={{
                input: {
                  color: "black",
                  background: "white"
                }
              }} multiline={true}
              variant="filled" label="Title" id="title"
              value={title || ''}
              onChange={(e) => setTitle(e.target.value)} />
      
      </div>
      <br></br>
      <Avatar
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ username, title, avatar_url: url })
      }}
      />
      <br></br>
      <div>
        <button
          className="button block primary"
          onClick={() => updateProfile({ username, title })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
        &nbsp;&nbsp;
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
      </div>
    </div>
  )
}