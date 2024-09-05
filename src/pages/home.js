// Import các component bạn đã tạo
import Header from '../components/header';
import Slider from '../components/slider';
import ProductSection from '../components/boxprouct';
import Footer from '../components/footer';
import CategoriesSection from '../components/categories';

// Component Home sử dụng đúng
function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductSection />
      <CategoriesSection />
      <Footer />
    </div>
  );
}
export default Home;