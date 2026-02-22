import {SubmitDispatchTypes, SAVE_PRODUCT, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_PRODUCT, CLEAR_CART} from '../actions/CartActionTypes';

interface DefaultStateI {
   fetching: boolean,
   results: any
}

const defaultState: DefaultStateI = {
    fetching: false,
    results: {
      products: []
    }
}

const cartReducer = (state: DefaultStateI = defaultState, action: SubmitDispatchTypes) => {
  switch (action.type) {
    case SAVE_PRODUCT:
    return {
      ...state,
      results: {
          // ...state.results,
          products: [...state.results?.products, action.data]
      }
    }
    case INCREASE_QUANTITY:{
      let oldState = state.results?.products.map( (product: Record<any, any>) => {
          if(product.id === action.data){
              Object.assign({}, state.results.products, {
                  quantity: product.quantity += 1
              })
          }
          return product;
      })
      return {
          ...state,
          results: {
              // ...state.results,
              products: [...oldState]
          }
        }
    }
    case DECREASE_QUANTITY:{
      let oldState = state.results.products.map( (product: Record<any, any>) => {
          if(product.id === action.data){
              Object.assign({}, state.results.products, {
                  quantity: product.quantity -= 1
              })
          }
          return product;
      })
      return {
          ...state,
          results: {
              // ...state.results,
              products: [...oldState]
          }
        }
    }
    case DELETE_PRODUCT:{
      let oldState = state.results.products.filter((product: Record<any, any>) => product.id !== action.data)
      return {
          ...state,
          results: {
              // ...state.results,
              products: [...oldState]
          }
        }
    }
    case CLEAR_CART:{
        return {
            ...state,
            results: {
                // ...state.results,
                products: []
            }
          }
    }
    default:
      return state;
  }
}

export default cartReducer;
  