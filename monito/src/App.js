
import './App.css';
import {Route , Switch} from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Details from './pages/Details';



function App() {
  return (
    <div>
      <Route exact path='/' component={ Home } />
      <Route exact path='/category' component={ Category } />
      <Route exact path='/details' component={ Details } />
            
             
    </div>
  );
}

export default App;
