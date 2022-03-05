import _ from "lodash";
import C from "../constants";

export const jobs = (state=[], action) => {
    switch(action.type) {
        case C.GET_ALL_JOBS:
            return action.payload
        case C.DELETE_JOB_BY_ID:
            const newState = [...state]
            console.log(newState[0].id)
            console.log(action.payload)
            return state.filter(job => job.id != action.payload)
        case C.UPDATE_JOB:
            state.filter(job => job.id != action.payload)
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}