import React, { useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import store from "../store";
import { getAllJobs } from "../actions";

const PostJob = (props) => {
    // setting up store configuration 
    const unsubscribe = store.subscribe(() => {
        console.log("Store updated!!", store.getState());
    });
    const jobs = store.getState().jobs;
    console.log(jobs)

    // setting up API calls 
    const fetchItems = async () => {
        const data = await fetch("http://localhost:80/jobs")
            .then((response) => response.json())
            .catch((err) => console.log("error with fetching"));
        // console.log(data);
        store.dispatch(getAllJobs(data))
    };

    // executing and unsubscribing from store 
    useEffect(() => {
        // this is set up to only run at the beginning but does not update, 
        // you need to set up thunk for automatic updates from database
        fetchItems();
    }, []); // empty brackets means will only run when component mounts
    unsubscribe()


    return (
        <section>
            <h1>Jobs List</h1>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>DESCRIPTION</th>
                            <th>LOCATION</th>
                            <th>START DATE</th>
                            <th>END DATE</th>
                            <th>ASSIGNED USER ID</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        {_.map(jobs, (job) => (
                            <tr key={job.id}>
                                <td>{job.id}</td>
                                <td><Link to={`/job/${job.id}`}>{job.title}</Link></td>
                                <td> {job.description_}</td>
                                <td>{job.location}</td>
                                <td>{job.startDate}</td>
                                <td> {job.endDate}</td>
                                <td><Link to={`/user/${1}`}>user</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PostJob;

const test = () => {

};
