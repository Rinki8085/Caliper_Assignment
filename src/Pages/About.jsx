import React from 'react';
import './style.css';

function About(){
   return(
      <div>
         <div className='heading'>
            <h3 style={{color:'grey'}}>Why Choose Our</h3>
            <h3 style={{color:'green'}}>Hydroponics Farming Services in India</h3>
         </div>
         <div>
            <div className='services'>
               <div>
                  <h3 style={{color:'grey',fontSize:'27px'}}>Right To Consume</h3>
                  <h3 style={{color:'green',fontSize:'27px'}}>Nutritious Food</h3>
                  <p style={{fontSize:'20px',lineHeight:'1.5rem'}}>We are the champions of cause. The good cause of promoting all the benefits of Brio’s profitable hydroponics farming systems. At Brio Hydroponics we develop systems that empower all the citizens of India, with a right: The Right to have access to highly nutritious and 100% residual free food all around the year</p>
               </div>
               <div>
                  <div>
                     <img src='https://briohydroponics.com/images/image/bri16_small.jpg' alt='hydroponics'/>
                  </div>
               </div>
            </div>
            <div className='services'>
               <div>
                  <div>
                     <img src='https://briohydroponics.com/images/image/bri17_small.jpg' alt='hydroponics'/>
                  </div>
               </div>
               <div style={{textAlign:'left'}}>
                  <h3 style={{color:'grey',fontSize:'27px'}}>Right To Consume</h3>
                  <h3 style={{color:'green',fontSize:'27px'}}>Nutritious Food</h3>
                  <p style={{fontSize:'20px',lineHeight:'1.5rem'}}>We are the champions of cause. The good cause of promoting all the benefits of Brio’s profitable hydroponics farming systems. At Brio Hydroponics we develop systems that empower all the citizens of India, with a right: The Right to have access to highly nutritious and 100% residual free food all around the year</p>
               </div>
            </div>
        </div>
      </div>
   )
}

export default About;