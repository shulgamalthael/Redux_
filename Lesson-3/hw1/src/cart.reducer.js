import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.action';

const initialState = {
    productData: []
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {
                productData: state.productData.concat(action.payload.productData)
            }
        case DELETE_PRODUCT: {
            const newData = 
                state.productData.filter(({id}) => id !== action.payload.productId)
            return {
                ...state,
                newData
            }
        }
    }
}