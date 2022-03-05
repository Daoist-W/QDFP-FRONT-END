import C from "../constants";


export const getAllUsers = (users) => {
    return {
        type: C.GET_ALL_USERS,
        payload: users
    }
}

export const createUser = (Job) => {
    return {
        type: C.CREATE_USER,
        payload: Job
    }
}

export const deleteUser = (id) => {
    return {
        type: C.DELETE_USER_BY_ID,
        payload: id
    }
}

export const findUser = (id) => {
    return {
        type: C.GET_USER_BY_ID,
        payload: id
    }
}


export const getAllJobs = (jobs) => {
    return {
        type: C.GET_ALL_JOBS,
        payload: jobs
    }
}

export const createJob = (Job) => {
    return {
        type: C.CREATE_JOB,
        payload: Job
    }
}

export const deleteJob = (id) => {
    return {
        type: C.DELETE_JOB_BY_ID,
        payload: id
    }
}

export const findJob = (id) => {
    return {
        type: C.GET_JOB_BY_ID,
        payload: id
    }
}