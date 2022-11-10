import * as types from './actionType';

const initialState = {
   product:[],
   isLoading: false,
   isError:false,
};

export const reducer = (state = initialState, action) => {

   const {type, payload} = action;
   switch(type){
     case types.GET_PRODUCT_DATA_REQUEST:
      return {
         ...state,
         isLoading:true
      }
      case types.GET_PRODUCT_DATA_SUCCESS:
         return {
            ...state,
            isLoading:false,
            product:payload
         }
      case types.GET_PRODUCT_DATA_FAILURE:
         return {
            ...state,
            isError:true
         }
      case types.POST_PRODUCT_DATA_REQUEST:
         return {
            ...state,
            isLoading:true
         }
      case types.POST_PRODUCT_DATA_SUCCESS:
         return {
            ...state,
            isLoading:false,
            product:payload
         }
      case types.POST_PRODUCT_DATA_FAILURE:
         return {
            ...state,
            isError:true
         }
      default:
         return {
            ...state
         }
   }
}
