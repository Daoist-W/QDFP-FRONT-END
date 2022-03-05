import {createStore} from "redux";
import { combineReducers } from "redux";
import {users} from "../reducers/usersReducer";
import {user} from "../reducers/userReducer";
import { jobs } from "../reducers/jobsReducer";
import { job } from "../reducers/jobReducer";

const initialState = {
    users: [
        {
            id: 1,
            position_: "initial",
            forename: "initial",
            surname: "inital",
            dob: "1991-09-15",
            email: "don@youmail.com",
            phoneNum: "+4475649589",
            jobs: [],
            availabilities: []
        },
        {
            id: 2,
            position_: "initial",
            forename: "initial",
            surname: "initial",
            dob: "1991-09-15",
            email: "don@youmail.com",
            phoneNum: "+4475649589",
            jobs: [],
            availabilities: []
        },
        {
            id: 3,
            position_: "initial",
            forename: "initial",
            surname: "initial",
            dob: "1991-09-15",
            email: "don@youmail.com",
            phoneNum: "+4475649589",
            jobs: [],
            availabilities: []
        }
    ],
    user: {
        id: 1,
        position_: "initial",
        forename: "don",
        surname: "brand",
        dob: "1991-09-15",
        email: "don@youmail.com",
        phoneNum: "+411111111",
        jobs: [],
        availabilities: []
    },
    jobs: [
        {
            id: 1,
            title: "topjob3",
            description_: "best job in the world",
            location: "London",
            startDate: "2022-02-04",
            endDate: "2022-02-06",
            user: {
                id: 2
            }
        }
    ],
    job: {
        id: 1,
        title: "topjob3",
        description_: "best job in the world",
        location: "London",
        startDate: "2022-02-04",
        endDate: "2022-02-06",
        user: {
            id: 2
        }
    }
}

const store = createStore(combineReducers({users, user, jobs, job}), initialState);
// the names of the reducers should ideally match the key values inside your store
// redux will pick this up and assign the names accordingly
// https://stackoverflow.com/questions/40053159/redux-unexpected-key-found-in-preloadedstate-argument-passed-to-createstore

export default store;