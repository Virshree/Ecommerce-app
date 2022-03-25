import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
function Nav() {
  const {logout}=useAuth0();
  return (
      
    <div className='nav'>

        <Link  style={{textDecoration:"none",color:"black"}}to="/">Home</Link>
        <Link style={{textDecoration:"none",color:"black"}}to="/about">About</Link>
        <Link style={{textDecoration:"none",color:"black"}}to="/products">Products</Link>
      <button type="button" className="btn btn-default btn-lg fs-2">
          <span className="glyphicon glyphicon-shopping-cart "></span>Cart
        </button> 
        <button onClick={()=>logout()} className='btn btn-dark mb-3 fs-3'>Logout</button>
         </div>
        
   
  )
}

export default Nav