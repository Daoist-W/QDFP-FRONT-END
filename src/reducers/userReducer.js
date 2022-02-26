import C from "../constants";

export const user = (state={}, action) => {
    switch(action.type) {
        case C.CREATE_USER:
            console.log(state)
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
}
