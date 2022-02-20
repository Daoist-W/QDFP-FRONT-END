import C from "../constants";


export const getAllUsers = (users) => {
    return {
        type: C.GET_ALL_USERS,
        payload: users
    }
}

export const createUser = (user) => {
    return {
        type: C.CREATE_USER,
        payload: user
    }
}

export const deleteUser = (id) => {
    return {
        type: C.DELETE_USER_BY_ID,
        payload: id
    }
}