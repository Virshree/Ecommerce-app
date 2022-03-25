import React from 'react'
import './Home.css';

function Home() {


  return (
    <div className='home'>
          <h3 className='fs-1 text-center'> Welcome to Amazon Home Page</h3>
          <div className='section2'>

            <h4 className='text-primary fs-1'>Shop With Us.</h4>
           <button className='btn btn-warning btn-lg fs-2 m-2'>Electronics</button>
            <button className='btn btn-success btn-lg fs-2 m-2' >Home Appilcances</button>
            <button className='btn btn-danger btn-lg fs-2 m-2'>Beauty</button>
            <button className='btn btn-dark btn-lg fs-2 m-2'>Foods</button>
        </div>

    
           

    </div>

         
  )
 
   
}

export default Home;