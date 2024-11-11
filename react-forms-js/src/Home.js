import React from 'react'
import {useState} from 'react'

 const Home = () => {
   const [username, setUsername] = useState('');
   const[email, setEmail] = useState("");
   const [password, setPassword] = useState('');
   const handleSubmit = (event) => {
    event.prenventDefault();
    console.log(username)

   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type = "text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type = "text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type ="submit"/>
      </form>
    </div>
  )
}

export default Home
