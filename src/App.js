import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/products/:id' element={<Products/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
