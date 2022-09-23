import { Route, Router, useParams } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
import { Routes } from 'react-router-dom/dist';


function App() {
  return (

    <div>
      <MainHeader />
    <Routes>

        <Route index path="/welcome" element={<Welcome/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product-detail:productId" element={<ProductDetail/>} />

    </Routes>

    </div>
  );
}

export default App;
