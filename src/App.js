import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { SignUp } from './signUp';
import SignIn from './signIn';

// Import các component bạn đã tạo
import Header from './header';
import Slider from './slider';
import ProductSection from './boxprouct';
import Footer from './footer';

// Component Home sử dụng đúng
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Sử dụng đúng component Home */}
        <Route path="/" element={<Home />} />
        
        {/* Các route khác */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
