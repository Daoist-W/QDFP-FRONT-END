import _ from "lodash";
import C from "../constants";

export const users = (state=[], action) => {
    switch(action.type) {
        case C.GET_ALL_USERS:
            return action.payload
        case C.DELETE_USER_BY_ID:
            const newState = [...state]
            console.log(newState[0].id)
            console.log(action.payload)
            return state.filter(user => user.id != action.payload)
        case C.UPDATE_USER:
            state.filter(user => user.id != action.payload)
            return [
                ...state,
                action
            ]
        default:
            return state
    }
}
