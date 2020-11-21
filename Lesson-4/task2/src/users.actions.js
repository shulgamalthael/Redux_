export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const add_user = userData => {
    return {
        type: ADD_USER,
        payload: {
            userData
        }
    }
}

export const delete_user = id => {
    return {
        type: DELETE_USER,
        payload: {
            userId
        }
    }
}