import React,{useState,useEffect} from 'react';
import './style.css';
import { useSelector , useDispatch} from 'react-redux';
import { getProductList,postProductData } from '../Redux/action';

function Growers(){
   const [name,setName] = useState('');
   const [quantity,setQuantity] = useState('');
   const [price,setPrice] = useState(0);
   const dispatch = useDispatch();
   const product = useSelector((store)=>store.product);

   console.log(product)

   const handleSubmit = (event)=>{
      event.preventDefault()
      let payload = {
         product_name:name,
         Quantity:quantity,
         price:price
      }
      dispatch(postProductData(payload));
      alert("Posted Successfully!");
   }

   useEffect(()=>{
      dispatch(getProductList());
   },[])

   return(
      <div>
         <br/>
         <br/>
         <br/>
         <div className='grower_form'>
            <form>
               <div>
                  <label>Product Name</label>
                  <input type='text' id='name' placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)} />
               </div>
               <div>
                  <label>Quantity</label>
                  <input type='text' id='name' placeholder='Enter Quantity' onChange={(e)=>setQuantity(e.target.value)} />
               </div>
               <div>
                  <label>Price</label>
                  <input type='number' id='name' placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)} />
               </div>
               <div>
                  <div></div>
                  <button className='bttn' onClick={(e)=>handleSubmit(e)}>Submit</button>
               </div>
            </form>
         </div>
      </div>
   )
}



export default Growers;