import C from "../constants";

export const job = (state={}, action) => {
    switch(action.type) {
        case C.CREATE_JOB:
            console.log(state)
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
}