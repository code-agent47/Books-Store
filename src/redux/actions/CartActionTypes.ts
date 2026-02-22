export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CLEAR_CART = 'CLEAR_CART';

export interface SaveProduct {
    type: typeof SAVE_PRODUCT
    data: any
}

export interface IncreaseQuantity {
    type: typeof INCREASE_QUANTITY
    data: any
}

export interface DecreaseQuantity {
    type: typeof DECREASE_QUANTITY,
    data: any
}
export interface DeleteProduct {
    type: typeof DELETE_PRODUCT,
    data: any
}

export interface ClearCart {
    type: typeof CLEAR_CART
    data: any
}

export type SubmitDispatchTypes = SaveProduct | IncreaseQuantity | DecreaseQuantity | DeleteProduct | ClearCart