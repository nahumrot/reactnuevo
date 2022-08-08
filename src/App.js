import './App.css';
import ItemListContainer from './component/ItemListContainer';
import ItemDetailContainer from './component/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './layouts/NavBar';



function App() {
  return( 
    <>
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/category/:idCategoria" element={<ItemListContainer/>} />
      <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
    </Routes>
  </BrowserRouter>
  </>
    );
};

export default App;
