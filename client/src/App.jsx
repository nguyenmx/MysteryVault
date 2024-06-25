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
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/smiski' element={<SmiskiPage />} />
      </Routes>
      {/* <div className="d-flex justify-content-center align-items-center">
        <div className="w-75">
          <ModelCanvas />
          <SmiskiPage/>
          <Login/>
        </div>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
