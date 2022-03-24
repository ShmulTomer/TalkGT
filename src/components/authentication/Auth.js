import { useState } from 'react'
import { supabase } from '../../supabaseClient'
import "../../styles.css"

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')


    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
        <div className="App-header">
          <b><i>Account Authentication</i></b>
             </div>
        
        <div className="App-text">
          <br></br>
          <br></br>
          <p>Sign in with your email below</p>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div classname="App-text">
          <br></br>
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className={'button block'}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Send Email</span>}
          </button>
        </div>
    </div>
  )
}