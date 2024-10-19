import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Details from './pages/Details';

import Navbar from './components/Navbar';


function App() {
  return (
    <div>
    
      <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:slug' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
