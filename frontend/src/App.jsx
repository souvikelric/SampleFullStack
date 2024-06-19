import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/users").then(res=> res.json()).then(data=>setUsers(data))
  })

  return (
    <>
      <h1>Chai and Frontend</h1>
      <h3>Users : {users.length}</h3>
      {users.length > 0 ? <div className='container'>
          {users.map((u)=>(
            <div key={u.id} className="card">
              <h4>{u.name}</h4>
              <p>{u.username}</p>
              <p>{u.email}</p>
            </div>
          ))}
      </div>: <h3>No users to display</h3>}
    </>
  )
}

export default App
