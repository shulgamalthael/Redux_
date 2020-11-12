import { USER_ADD, USER_DELETE, USER_UPDATE  } from './users.actions';

const initialState = {
    usersList = []
}

export const usersReducer = (initialState = state, action) => {
    switch(action.type) {
        case USER_ADD:
            return {
                ...state,
                usersList = usersList.concat(action.payload.userData)
            }
        
        case USER_DELETE: {
                const newList = 
                    state.usersList.filter(user => user.id !== action.payload.userId
                );

                return {
                    ...state,
                    usersList: newList
                }
        }

        case USER_UPDATE: {
            const newList = state.usersList.map(user => {
                if ( user.id === action.payload.userId )
                    return {
                        ...user,
                        ...action.payload.userData
                    }
                });

                return {
                    ...state,
                    usersList: newList
                }
        }

        default:
            return state
    }
}

export default userReducer;