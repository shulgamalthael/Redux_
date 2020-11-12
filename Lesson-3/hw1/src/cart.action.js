export const ADD_PRODUCT = 'PRODUCTS/ADD_PRODUCT';
export const DELETE_PRODUCT = 'PRODUCTS/DELETE_PRODUCT';

export const add_product = (productData) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            productData,
        }
    }
}

export const delete_product = (productId) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            productId
        }
    }
}