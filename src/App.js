import './App.css';
import Home from './containers/Home';
import Nav from './components/Nav';
import Login from './containers/Login';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/home/:id' element={<Profile />}/>
      </Routes>
    </Router>

  );
}

export default App;
