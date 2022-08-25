import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import RouteComponent from './Components/RouteComponent';

function App() {
  const [cartData, setCartData] = useState([]);
  const addToCart = (product) => {
    let productExist = false; 
    let newCartData = cartData.map((cart)=>{
      if(cart.id==product.id){
       productExist = true;
        return {
          ...cart,
          qty:cart.qty+1
        }
      }
      return cart;
    });
    if(!productExist) newCartData.push(product);
    console.log(newCartData);
    setCartData(newCartData);
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cartData.length}/>
      
      <div className='container'>
        <div className='row'>
          <RouteComponent cartData={cartData} addToCart={addToCart}/>
        </div>
      </div>
          
    
    </BrowserRouter>
    );
}

export default App;
