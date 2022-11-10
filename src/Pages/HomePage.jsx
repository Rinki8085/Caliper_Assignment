import React from 'react';
import Navbar from '../Component/Navbar';
import About from './About';
import Footer from '../Component/Footer';

function Homepage(){
   return(
      <div>
         <Navbar/>
         <br/><br/>
         <About/>
         {/* <Footer/> */}
      </div>
   )
}

export default Homepage;