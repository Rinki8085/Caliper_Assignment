import React,{useState} from 'react';
import './style.css';

function CartPage(){
   const [qty, setQty] = useState(1);
   let data = JSON.parse(localStorage.getItem('cart_product'));

   console.log(data);

   const handleIncrease = () =>{
      setQty(prev=>prev+1)
   }

   const handleDecrease = () =>{
     if(qty>1){
      setQty(prev=>prev-1);
     }else{
      alert('Quantity can not goes 0');
     }
   }

   return(
      <div>
         <br/>
         <br/>
         <br/>
         <div>
            <div className='cart_page'>
               <div>
                  <h1>Confirm Cart </h1>
               </div>
               <div>
                  <table className='product_list'>
                  <tr>
                     <th>Image</th>
                     <th>Product</th>
                     <th>Amount</th>
                     <th>Quantity</th>
                  </tr>
                  {data.map((item)=>
                  <tr key={item.price}>
                  <td><div style={{display:'flex',justifyContent:'center'}}>
                  <img src='https://store.brioagri.in/globalfile/images/f1aOH8ygcUm0qgqbtcYF0Q-200.jpg' width='70px' height='50px'  alt='plants' /></div></td>
                  <td style={{width:'500px'}}>{item.prd_name}</td>
                  <td>{`${item.price}` * `${qty}`}</td>
                  <td>
                     <div className='changeQty'>
                        <div>{qty}</div>
                        <div><button onClick={()=>handleDecrease(item)}>-</button><button onClick={()=>handleIncrease(item)}>+</button></div>   
                     </div>
                  </td>
               </tr>
                  )}
                  </table>
               </div>
            </div>
         </div>
         <br/>
         <br/>
         <br/>
      </div>
   )
}

export default CartPage;