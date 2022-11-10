import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { getProductList, postProductData } from '../Redux/action';
import './style.css';

function Buyers(){
   const dispatch = useDispatch();
   const product = useSelector((store)=>store.product);

   console.log(product);

   useEffect(()=>{
      dispatch(getProductList());
   },[])

   return(
      <div>
         <br/>
         <br/>
         <br/>
         <br/>
         <div className='product_card'>
            {product.map((item)=>
               <div>
                  <img src='https://store.brioagri.in/globalfile/images/f1aOH8ygcUm0qgqbtcYF0Q-280.jpg' />
                  <p style={{lineHeight:'1.3rem'}}>{item.product_name}</p>
                  <div style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
                     <p style={{lineHeight:'0.1rem'}}>₹ {item.price}</p>
                     <p>{item.Quantity}</p>
                  </div>
                  <button className='cart'>ADD TO CART</button>
               </div>
            )}
         </div>
      </div>
   )
}

export default Buyers;