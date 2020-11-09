const ADD_USER = 'USERS/ADD_USER';
const DELETE_USER = 'USERS/DELETE_USER';

export const addUser = () => {
    return {
        type: ADD_USER
    }
}

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
}

export const initialState = {
    usersList: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          usersList: [
            ...state.usersList,
            action.userData
          ]
        }
      case DELETE_USER:
  
        return {
          ...state,
          usersList: state.usersList.filter(({id}) => id !== action.id)
        }
      default:
        return state;
    }
}

export const store = createStore(reducer);