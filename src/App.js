import './App.css';
import ItemListContainer from './component/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './layouts/NavBar';
import CartProvider from './context/CartContext'



function App() {
  return( 
    <>
  <BrowserRouter>
  <CartProvider>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:idCategoria" element={<ItemListContainer/>} />
        <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
      </Routes>
  </CartProvider>
  </BrowserRouter>
  </>
    );
};

export default App;
