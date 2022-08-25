
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import Profile from './Pages/Profile';
import NotFound from './Pages/NotFound';

const RouteComponent = (props) => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart cartData={props.cartData}/>} />
          <Route path="/category/:category" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail addToCart={props.addToCart}/>} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouteComponent;