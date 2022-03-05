import React, { useState, useRef } from "react";
import store from "../store";
import { getAllJobs, deleteJob } from "../actions";

const CrudJobs = () => {

    const [getJob, setJob] = useState({
        title: "topjob3",
        description_: "best job in the world",
        location: "London",
        startDate: "2022-02-04",
        endDate: "2022-02-06",
        user: {
            "id": 2
        }
    });

    const job = store.getState().job;

    // scrolling mechanism
    // const table = useRef(null)
    
    // const executeScroll = () => table.current.scrollIntoView({behavior: "smooth"})    

    // submission handlers
    const fetchJobs = async () => {
        const data = await fetch("http://localhost:80/jobs")
            .then((response) => response.json())
            .catch((err) => console.log("error with fetching"));
        store.dispatch(getAllJobs(data))
    };

    const saveJob = async () => {
        setJob({ id: null });
        const post = await fetch("http://localhost:80/jobs/admin/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: getJob.title,
                description_: getJob.description_,
                location: getJob.location,
                startDate: getJob.startDate,
                endDate: getJob.endDate,
                user: getJob.user,
            }),
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => fetchJobs())
            .catch((err) => console.log("something wrong with post"));
    };

    const updateJob = async () => {
        const post = await fetch("http://localhost:80/jobs/admin/" + getJob.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getJob),
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => fetchJobs())
            .catch((err) => console.log("something wrong with post"));
    };

    const deleteItem = async () => {
        const url = "http://localhost:80/jobs/admin/delete/" + getJob.id;
        const post = await fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => store.dispatch(deleteJob(getJob.id)))
            .catch((err) => console.log("something wrong with delete"));
    };

    const handleCreate = (event) => {
        console.log("post sent");
        saveJob();
    };

    const handleUpdate = (event) => {
        console.log("update sent")
        updateJob();
    }

    // change handlers
    const handleChangeId = (event) => {
        setJob({ ...getJob, id: event.target.value });
    };

    const handleChangeTitle = (event) => {
        setJob({ ...getJob, title: event.target.value });
    };

    const handleChangeDescription = (event) => {
        setJob({ ...getJob, description_: event.target.value });
    };

    const handleChangLocation = (event) => {
        setJob({ ...getJob, location: event.target.value });
    };

    const handleChangeStartDate = (event) => {
        setJob({ ...getJob, startDate: event.target.value });
    };

    const handleChangeEndDate = (event) => {
        setJob({ ...getJob, endDate: event.target.value });
    };

    const handleChangeUser = (event) => {
        setJob({ ...getJob, user: event.target.value });
    };

    return (
        <div className="buttons">
            <form>
                <div className="row">
                    <span>
                        <label htmlFor="id">Id</label>
                        <input
                            className="basic-slide"
                            id="id"
                            type="text"
                            placeholder="Job user id"
                            onChange={handleChangeId}
                        />
                    </span>
                    <span>
                        <label htmlFor="forename">Title</label>
                        <input
                            className="basic-slide"
                            id="title"
                            type="text"
                            placeholder="Job Title"
                            onChange={handleChangeTitle}
                        />
                    </span>
                    <span>
                        <label htmlFor="surname">Description</label>
                        <input
                            className="basic-slide"
                            id="description_"
                            type="text"
                            placeholder="Job Description"
                            onChange={handleChangeDescription}
                        />
                    </span>
                    <span>
                        <label htmlFor="dob">Location</label>
                        <input
                            className="basic-slide"
                            id="location"
                            type="text"
                            placeholder="Job Location"
                            onChange={handleChangLocation}
                        />
                    </span>
                    <span>
                        <label htmlFor="email">Start Date</label>
                        <input
                            className="basic-slide"
                            id="start-date"
                            type="text"
                            placeholder="Job Start Date"
                            onChange={handleChangeStartDate}
                        />
                    </span>
                    <span>
                        <label htmlFor="phoneNum">End Date</label>
                        <input
                            className="basic-slide"
                            id="end-date"
                            type="text"
                            placeholder="Job End Date"
                            onChange={handleChangeEndDate}
                        />
                    </span>
                    <span>
                        <label htmlFor="position">Assigned User ID</label>
                        <input
                            className="basic-slide"
                            id="user"
                            type="text"
                            placeholder="Job Assigned User ID"
                            onChange={handleChangeUser}
                        />
                    </span>
                </div>
            </form>
            <div className="row">
                <button onClick={fetchJobs}>Refresh</button>
                <button onClick={handleCreate}>Create</button>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
            <div ></div>
        </div>
    );
};

export default CrudJobs;
