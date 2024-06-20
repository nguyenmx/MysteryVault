import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Canvas} from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls} from "@react-three/drei";
import ModelCanvas from './Components/3DModels/ModelCanvas';

function Model(props) {
  const {scene} = useGLTF("/phantump_shiny.glb");
  return <primitive object={scene} {...props}/>
}

function App() {
  const[users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/getUsers')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  }, [])
  return (

    <div className= "d-flex justify-content-center align-items-center">
      <div className= "w-50">
      <ModelCanvas />
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
              <td><img src={user.Picture} alt={user.Name} style={{ width: '100px', height: 'auto' }} /></td>
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
