import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import Avatar from './Avatar'
import "../../styles.css"

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [title, setTitle] = useState(null)


  useEffect(() => {
    getProfile()
  }, [session])

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
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, title }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        title,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p ><b><i>
        Account Information</i></b>
        </p>
        <p>
        </p>
    </header>
    <div className="App-text">
      <div className="input2">
        <label htmlFor="email">Email: &nbsp;&nbsp;</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
      <br></br>
      <div>
        <label htmlFor="username">Name: &nbsp;&nbsp;</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="title">Title: &nbsp;&nbsp;</label>
        <input
          id="title"
          type="text"
          value={title || ''}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
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