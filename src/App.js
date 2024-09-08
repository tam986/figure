import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import  Register  from './pages/SignUp';
import Login from './pages/SingIn';

import Header from './components/headerComponent';
import Footer from './components/footerComponent';

import Homepage from './pages/home';
// Component Home sử dụng đúng



function App() {
  return (
    <Router>
      <Routes>
        {/* Sử dụng đúng component Home */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
