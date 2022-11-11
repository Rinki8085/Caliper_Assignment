import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function ProductDetails(){
   const [qty,setQty] = useState(1);
   const navigate = useNavigate();
   let data = JSON.parse(localStorage.getItem('hydroponic'));
  // console.log(data);
   //console.log(qty)
//   const handleChange = ()=>{

//   }

   let arr = [];

   const handleClick=()=>{
      let payload = {
         "prd_name":data[0].product_name,
         "quantity":data[0].Quantity,
         "price":Number(data[0].price),
         "qty":Number(qty)
      }
      arr.push(payload);
      localStorage.setItem('cart_product',JSON.stringify(arr));
      navigate('/cart');
   }

   return(
      <div>
          <br/>
          <br/>
          <br/>
          <div>
            <div className='product_details'>
               <div>
                  <img src='https://store.brioagri.in/globalfile/images/f1aOH8ygcUm0qgqbtcYF0Q-280.jpg' alt=''/>
               </div>
               <div className='content'>
                  <h3>{data[0].product_name}</h3>
                  <div className='qtyPri'>
                     <p>
                        <span>Qunatity:</span>
                        <span>{data[0].Quantity}</span>
                     </p>
                     <p>
                        <span>Price:</span>
                        <span>₹ {data[0].price}</span>
                     </p>
                     <p>
                        <span>Size:</span>
                        <span>1 Set</span>
                     </p>
                  </div>
                  <p>All prices are including GST*</p>
                  <div className='qty'>
                     <p style={{lineHeight:'1rem'}}>Qty</p>
                     <select onChange={(e)=>setQty(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                     </select>
                  </div>
                  <div style={{marginTop:'10px'}}>
                     <button className='cart' onClick={()=>handleClick()}>Add To Cart</button>
                  </div>
               </div>
            </div>
          </div>
      </div>
   )
}

export default ProductDetails;