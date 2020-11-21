import { ADD_USER, DELETE_USER } from './users.actions';

const initialState = {
    userList: []
}

export const usersReducer = (state = initialState, action) => {
    switch(type.action) {
        case ADD_USER:
            return {
                ...state,
                usersList: [
                    ...state.usersList,
                    action.payload.userData
                ]
            }

        case DELETE_USER:
            return {
                ...state,
                usersList: state.userList.filter(({id}) => id !== userId)
            }

        default:
            return state;
    }
}