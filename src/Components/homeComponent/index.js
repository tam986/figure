import React, { useEffect } from 'react'
// Import các component bạn đã tạo
import Header from '../headerComponent'
import Slider from '../sliderComponent';
import ProductSection from '../boxprouctComponent';
import Footer from '../footerComponent';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem("username")
  const email = localStorage.getItem("email")
  useEffect(() => {
    if(!user){
       navigate("/")
    }
  },[user,navigate])
  
    return (
        <div>
          <Header userData={user} emailData={email}/>
           <Slider />
           <ProductSection />
           <Footer />
        </div>
      );
}

export default Home
