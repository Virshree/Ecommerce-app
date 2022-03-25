
import './App.css';
import Nav from './Nav';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Product/Products';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {user}=useAuth0();
  return (
  
    <div className="App">
       {!user ? <Login/>: (
        <BrowserRouter>
              <Nav/>
              <div className='App-body'>
                  <Routes>
                    <Route path='/' element={<Home/>}>Home</Route>
                    <Route path='/about' element={<About/>}>About</Route>
                    <Route path='/products' element={<Products/>}>Products</Route>
                  </Routes>
                </div>
            </BrowserRouter>
    
    )}
     </div>
  );
}

export default App;
