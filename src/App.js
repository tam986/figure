import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SignUp } from './signUp';
import SignIn from './signIn';

// component chung
import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
// Component Home sử dụng đúng


function App() {
  return (
    <Router>
      <Routes>
        {/* Sử dụng đúng component Home */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
