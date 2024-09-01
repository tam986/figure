<<<<<<< HEAD


import './App.css';
import mycomponent from './mycomponent';
import SignIn from './signIn';
function App() {
  return (
    <SignIn/>
=======
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import { SignUp } from './signUp';
import SignIn from './signIn';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
>>>>>>> c30142475aed4b0f36ee2717080f748fc20e9e6e
  );
}

export default App;
