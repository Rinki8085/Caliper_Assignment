import React from 'react';
import './style.css';

function ImageContent({item}){
   return(
      <div>
         <h1 style={{textAlign:"center"}}>{item.heading}</h1>
         <div className='farm_product_image'>
            <div>
               <img className='images' src={item.image_1} alt='Plants'/>
            </div>
            <div>
                <img className='images' src={item.image_2} alt='Plants'/>
            </div>
         </div>
         <div>
            <div className='vertical_farming'>
               <div>
                  {item.content}
               </div>
               <br/>
               <div style={{border:'1px solid lightgrey'}}></div>
            </div>
         </div>
      </div>
   )
}

export default ImageContent;