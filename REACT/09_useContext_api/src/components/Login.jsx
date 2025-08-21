import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/userContext'

const Login = () => {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username, password})
        console.log(username)
    }

  return (
    <div className="">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => SetUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => SetPassword(e.target.value)}
      />
      <button onClick={handleSubmit} className='bg-sky-800 p-2 rounded-lg'>Submit</button>
    </div>
  );
}

export default Login
