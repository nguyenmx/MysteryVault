import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/getUsers')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className= "w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className= "w-50">
     <table className = "table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Picture
          </th>
          <th>
            Series
          </th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => {
            return<tr>
              <td> {user.Name}</td>
              <td> {user.Picture}</td>
              <td> {user.Series}</td>
            </tr>
          })
        }
      </tbody>
     </table>
      </div>
    </div>
  )
}

export default App
