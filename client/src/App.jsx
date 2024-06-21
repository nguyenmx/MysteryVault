import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModelCanvas from './Components/3DModels/ModelCanvas';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import SmiskiPage from './pages/SmiskiPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/getUsers')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="d-flex justify-content-center align-items-center">Loading...</div>;
  }

  if (error) {
    return <div className="d-flex justify-content-center align-items-center">{error}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path= '/signup' element={<SignUp/>}> </Route>
          <Route path= '/login' element={<Login/>}> </Route>
          <Route path= '/smiski' element={<SmiskiPage/>}> </Route>
      </Routes>
    </BrowserRouter>
    // <div className="d-flex justify-content-center align-items-center">
    //   <div className="w-75">
    //     {/* Uncomment these components if you need to use them */}
    //     {/* <ModelCanvas /> */}
    //     <Login />
    //     <table className="table table-bordered table-striped">
    //       <thead className="thead-dark">
    //         <tr>
    //           <th>Name</th>
    //           <th>Picture</th>
    //           <th>Series</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user, index) => (
    //           <tr key={user.ID || index}>
    //             <td>{user.Name}</td>
    //             <td>
    //               <img
    //                 src={user.Picture}
    //                 alt={user.Name}
    //                 style={{ width: '100px', height: 'auto' }}
    //               />
    //             </td>
    //             <td>{user.Series}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

  )
}

export default App;
