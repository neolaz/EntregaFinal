import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar.jsx';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './ItemListContainer/ItemListContainer.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Checkout.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/> }/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting={"Bienvenido a MangaHouse!"}/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </>
      
  );
}

export default App;