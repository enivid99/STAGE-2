import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';


function App() {
  return (
    <>
      <Router>
          <Routes>
               <Route path='/' element={<ProductListingPage />} />
               <Route path='/cartpage' element={<CartPage />} />
          </Routes>
      </Router>
    </> 
  );
}

export default App;
