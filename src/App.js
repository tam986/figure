import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from "./Components/signInComponent/index"
import SignUp from "./Components/signUpComponent/index"
import Home from './Components/homeComponent';



// Component Home sử dụng đúng


function App() {
  return (
    <Router>
      <Routes>
        {/* Sử dụng đúng component Home */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
