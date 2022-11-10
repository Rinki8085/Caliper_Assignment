import React from 'react';
import {Link} from 'react-router-dom';

function Services(){
   return(
      <div className='box_service'>
         <div className='box_1'>
            <div className='box_2'>
               <div className='buyers'>
                  <div className='serve'>
                     <p>Exponentially increasing profitability</p>
                     <h3>For Growers</h3>
                     <button><Link to='/grower'>Read More</Link></button>
                  </div> 
               </div>
               <div className='growers'>
                  <div className='serve'>
                     <p>Distinctive taste, Distinctive Quality</p>
                     <h3>For Buyers</h3>
                     <button><Link to='/buyer'>Read More</Link></button>
                  </div> 
               </div>
            </div>
         </div>
      </div>
   )
}

export default Services;