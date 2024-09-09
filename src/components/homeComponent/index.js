import React, { useEffect } from 'react';
import Header from '../headerComponent';
import Slider from '../sliderComponent';
import ProductSection from '../boxprouctHotComponent';
import CategoriesSection from '../categories';
import ProductList from '../productListComponent';
import Benerfit from '../benerfitComponent';
import Contact from '../contactComponent';
import Footer from '../footerComponent';
import { useNavigate } from 'react-router-dom';

// category
import onePieceThumb from '../../assets/img/onePieceThumb.jpg';
import dragonBallThumb from '../../assets/img/dragonBallthumb.jpg';
import jujutsuKaisenThumb from '../../assets/img/jujutsuKaisenThumb.jpg';

const categories = [
  { id: 1, image: onePieceThumb, title: 'One Piece' },
  { id: 2, image: dragonBallThumb, title: 'Dragon Ball' },
  { id: 3, image: jujutsuKaisenThumb, title: 'Jujutsu Kaisen' },
];

const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Header userData={user} emailData={email} />
      <Slider />
      <ProductSection />
      <CategoriesSection />
      {categories.map((category) => (
        <ProductList key={category.id} category={category} />
      ))}
      <Benerfit/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default Home;
