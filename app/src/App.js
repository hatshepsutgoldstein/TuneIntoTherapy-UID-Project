
import './App.css';
import Header from './Header';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Home from './Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const user = [
  {
    "id": 1,
    "name": "Kusuma"
  }
]

function App() {
  return (
    
    <Router>

        <Header />
        <div className='content'>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/home"} element={<Home user={user[0]}/>} />
        </Routes>
        </div>
        <Nav />

      
  
    </Router>
  );
}

export default App;
