import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import PlantList from './components/PlantList';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import PlantForm from './components/PlantForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlantDetails from './components/PlantDetails';

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignUpClick = () => {
      setShowSignUp(true);
  };

  const handleLoginClick = () => {
      setShowLogin(true);
  };

  const handleSignUpClose = () => {
      setShowSignUp(false);
  };

  const handleLoginClose = async () => {
      setShowLogin(false);
      setLoggedIn(true);
      // For now, we're not fetching user data from the backend
  };

  const handleLogout = () => {
      setLoggedIn(false);
      setUserEmail('');
  };

  return (
    <>
      <Navbar
        onSignUpClick={handleSignUpClick}
        onLoginClick={handleLoginClick}
        loggedIn={loggedIn}
        userEmail={userEmail}
        onLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PlantList" element={<PlantList />} />
        <Route path="/PlantForm" element={<PlantForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/plants/:plantId" element={<PlantDetails />} /> {/* PlantDetails route */}
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
