import { Dispatch } from 'redux';
import {
  SubmitDispatchTypes,
  SAVE_PRODUCT,
  INCREASE_QUANTITY,
  DELETE_PRODUCT,
  DECREASE_QUANTITY,
  CLEAR_CART
} from './CartActionTypes';

export const saveProduct = (data: object) => {
  return (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
      dispatch({ 
          type: SAVE_PRODUCT,
          data
      });
  };
};

export const increaseQuantity = (data: object) => {
    return (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
        dispatch({ 
            type: INCREASE_QUANTITY,
            data
        });
    };
};

export const decreaseQuantity = (data: object) => {
    return (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
        dispatch({ 
            type: DECREASE_QUANTITY,
            data
        });
    };
};

export const deleteProduct = (data: object) => {
    return (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
        dispatch({ 
            type: DELETE_PRODUCT,
            data
        });
    };
};

export const clearCart = () => {
  return (dispatch: Dispatch<SubmitDispatchTypes | any>) => {
      dispatch({ 
          type: CLEAR_CART
      });
  };
};