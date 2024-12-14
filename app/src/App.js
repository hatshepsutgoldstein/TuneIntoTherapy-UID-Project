
import './App.css';
import Header from './Header';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Home from './Home';
import Chatbot from './Chatbot';
import Messaging from './Messaging';
import CreateAccount from './CreateAccount';
import Login from "./Login"; 
import { ChatProvider } from './ChatContext';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const user = [
  {
    "id": 1,
    "name": "Kusuma"
  }
]


function App() {
  return (
    <ChatProvider>
    <Router>
      <div className="App">

        <Header />
        <div className='content'>
        <Routes>
          <Route 
            path={"/landing"} 
            element={<LandingPage />} 
          />
          <Route path="/create-account" 
            element={<CreateAccount />} 
          />
          <Route path="/login" 
            element={<Login />} 
          />
          <Route 
            path={"/"} 
            element={<Home user={user[0]}/>} 
          />
          <Route 
            path="*" 
            element={<h1>404 - Page Not Found</h1>}
          />
          <Route
            path="/chatbot"
            element={<Chatbot />}
          />
          <Route
            path="/messaging"
            element={<Messaging />}
          />
        </Routes>
        </div>
        <Nav />
      </div>
    </Router>
    </ChatProvider>
  );
}

export default App;
