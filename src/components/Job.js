import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";

const Profile = (props) => {
    let params = useParams();

    // we need to create something to hold these users in
    const [job, setJob] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`http://localhost:80/jobs/` + params.id);
        const job = await data.json();
        setJob(job); // stores objects inside object, with object id as key value pair
    };

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div>
            <h1>Job {job.id}</h1>
            <div className="card-job">
                <img src="https://picsum.photos/600/300" alt={job.forename} />
                <h1>{job.title}</h1>
                <p className="position">{job.location}</p>
                <p className="position">{job.description_}</p>
                <p>{job.startDate}</p>
                <p>{job.endDate}</p>
                <p>
                    <button className="profileButton">Contact</button>
                </p>
            </div>
        </div>
    );
};

export default Profile;
