import React from 'react';
import './style.css';

function CartPage(){
   let data = JSON.parse(localStorage.getItem('cart_product'));

   console.log(data);

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
                     <th>Price</th>
                     <th>Qunatity</th>
                     <th>Amount</th>
                     <th></th>
                  </tr>
                  <tr>
                     <td><img src='' width='50px' height='50px'  alt='plants' /></td>
                     <td>Product Name</td>
                     <td>30000</td>
                     <td>
                        <div>
                           <div><button>-</button><button>+</button></div>
                           <div></div>
                        </div>
                     </td>
                     <td></td>
                  </tr>
                  </table>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartPage;