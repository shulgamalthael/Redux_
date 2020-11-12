export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';
export const UPDATE_USER = 'USERS/UPDATE_USER';

export const user_add = (userData) => {
    return {
        type: ADD_USER,
        payload: {
            userData
        }
    }
}

export const user_delete = (userId) => {
    return {
        type: DELETE_USER,
        payload: {
            userId
        }
    }
}

export const user_update = (userId, userData) => {
    return {
        type: UPDATE_USER,
        payload: {
            userData,
            userId
        }
    }
}