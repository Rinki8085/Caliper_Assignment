import * as types from './actionType';
import axios from 'axios';

const getProductList = ()=>(dispatch)=>{
   dispatch({type:types.GET_PRODUCT_DATA_REQUEST});
   return axios.get('https://new-json-server-rinki.herokuapp.com/product')
         .then((r)=>{
            dispatch({type:types.GET_PRODUCT_DATA_SUCCESS,payload:r.data})
         })
         .catch((e)=>{
            dispatch({type:types.GET_PRODUCT_DATA_FAILURE,payload:e});
         })
}

const postProductData = (data)=>(dispatch)=>{
   dispatch({type:types.POST_PRODUCT_DATA_REQUEST});
   return axios.post('https://new-json-server-rinki.herokuapp.com/product',data)
      .then((r)=>{
         dispatch({type:types.POST_PRODUCT_DATA_SUCCESS,payload:r.data});
         dispatch(getProductList());
      })
      .catch((e)=>{
         dispatch({type:types.POST_PRODUCT_DATA_FAILURE,payload:e})
      })
}

export {getProductList,postProductData};