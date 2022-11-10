import React from 'react';
import Navbar from '../Component/Navbar';
import About from './About';
import Services from './Services';
import Footer from '../Component/Footer';

function Homepage(){
   return(
      <div>
         <br/><br/>
         <About/>
         <Services/>
      </div>
   )
}

export default Homepage;