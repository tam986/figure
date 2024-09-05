import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from "./Components/signInComponent/index"
import SignUp from "./Components/signUpComponent/index"
import Home from './Components/homeComponent';


<<<<<<< HEAD
// component chung
import Header from './components/header';
import Footer from './components/footer';
=======
>>>>>>> 2a47f85620501ddba81eebeb16c980aa4b1a91ac

import Home from './pages/home';
// Component Home sử dụng đúng


function App() {
  return (
    <Router>
      <Routes>
        {/* Sử dụng đúng component Home */}
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
=======
        <Route path="/" element={<SignIn />} />
>>>>>>> 2a47f85620501ddba81eebeb16c980aa4b1a91ac
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
