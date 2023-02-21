import React, { useState } from "react"
import "firebase/auth"
import './App.css';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"

const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('error ', error)
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App;
