// Import các component bạn đã tạo
import Header from '../components/headerComponent';
import Benerfit from '../components/benerfitComponent';
// import ProductSection from '../components/boxprouctComponent';
import ProductAll from '../components/pageproductComponent';
import Footer from '../components/footerComponent';

function ProductPgae() {
  return (
    <div>
      <Header/>
      <ProductAll/>
      <Benerfit/>
      <Footer />
    </div>
  );
}
export default ProductPgae;