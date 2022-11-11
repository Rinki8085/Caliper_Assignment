import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Homepage from './HomePage';
import HydroponicFarm from './HydroponicFarm';
import Growers from './Growers';
import Buyers from './Buyers';
import ProductDetails from './ProductDetails';
import CartPage from './CartPage';

function AllRoutes(){
   return(
      <Routes>
         <Route path='/' element={<Homepage/>} />
         <Route path='/farm' element={<HydroponicFarm/>} />
         <Route path='/buyer' element={<Buyers/>} />
         <Route path='/grower' element={<Growers/>} />
         <Route path='/product_details/:id' element={<ProductDetails/>} />
         <Route path='/cart' element={<CartPage/>} />
      </Routes>
   )
}

export default AllRoutes;