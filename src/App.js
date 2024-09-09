import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import  Register  from './pages/SignUp';
import Login from './pages/SingIn';

import Homepage from './pages/home';
import ProductPgae from './pages/product';
// Component Home sử dụng đúng



function App() {
  return (
    <Router>
      <Routes>
        {/* Sử dụng đúng component Home */}
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPgae/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
