import './App.scss';
import React from 'react';
import Nav from './components/Nav';
import Login from './containers/Login';
import Home from './containers/Home';
import User from './containers/Home';
import Profile from './components/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div>
        <Router>
          <Nav />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path='/home/:id' element={<Profile />}/>
          </Routes>
        </Router>
    </div>

  );
}

export default App;
