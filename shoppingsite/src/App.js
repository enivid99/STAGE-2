import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import ProductListingPage from './pages/ProductListingPage';


function App() {
  return (
    <>
      <Router>
          <Routes>
               <Route path='/' element={<ProductListingPage />} />
          </Routes>
      </Router>
    </> 
  );
}

export default App;
