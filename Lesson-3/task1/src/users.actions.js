export const USER_ADD = 'USERS/USER_ADD';
export const USER_DELETE = 'USERS/USER_DELETE';
export const user_update = 'USERS/USER_UPDATE';

export const user_add = (userData) => {
    return {
        type: USER_ADD,
        payload: {
            userData
        }
    }
}

export const user_delete = (userId) => {
    return {
        type: USER_DELETE,
        payload: {
            userId
        }
    }
}

export const user_update = (userId, userData) => {
    return {
        type: USER_USER,
        payload: {
            userData,
            userId
        }
    }
}