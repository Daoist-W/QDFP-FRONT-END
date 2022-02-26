import React, { useState, useRef } from "react";
import store from "../store";
import { getAllUsers, deleteUser } from "../actions";

const CrudJobs = () => {
    const [getUser, setUser] = useState({
        position_: "staff",
        forename: "test",
        surname: "testing",
        dob: "1991-09-15",
        email: "test:youmail.com",
        phoneNum: "+123465789",
        jobs: [],
    });

    const user = store.getState().user;

    // scrolling mechanism
    const table = useRef(null)
    
    const executeScroll = () => table.current.scrollIntoView({behavior: "smooth"})    

    // submission handlers
    const fetchUsers = async () => {
        const data = await fetch("http://localhost:80/user/admin")
            .then((response) => response.json())
            .catch((err) => console.log("error with fetching"));
        store.dispatch(getAllUsers(data))
    };

    const saveUser = async () => {
        setUser({ id: null });
        const post = await fetch("http://localhost:80/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                position_: getUser.position_,
                forename: getUser.forename,
                surname: getUser.surname,
                dob: getUser.dob,
                email: getUser.email,
                phoneNum: getUser.phoneNum,
                jobs: getUser.jobs,
            }),
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => fetchUsers())
            .catch((err) => console.log("something wrong with post"));
    };

    const updateUser = async () => {
        const post = await fetch("http://localhost:80/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getUser),
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => fetchUsers())
            .catch((err) => console.log("something wrong with post"));
    };

    const deleteItem = async () => {
        const url = "http://localhost:80/user/admin/delete/" + getUser.id;
        const post = await fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => store.dispatch(deleteUser(getUser.id)))
            .catch((err) => console.log("something wrong with delete"));
    };

    const handleCreate = (event) => {
        console.log("post sent");
        saveUser();
    };

    const handleUpdate = (event) => {
        console.log("update sent")
        updateUser();
    }

    // change handlers
    const handleChangeId = (event) => {
        setUser({ ...getUser, id: event.target.value });
    };

    const handleChangeFName = (event) => {
        setUser({ ...getUser, forename: event.target.value });
    };

    const handleChangeSName = (event) => {
        setUser({ ...getUser, surname: event.target.value });
    };

    const handleChangeDob = (event) => {
        setUser({ ...getUser, dob: event.target.value });
    };

    const handleChangeEmail = (event) => {
        setUser({ ...getUser, email: event.target.value });
    };

    const handleChangePhone = (event) => {
        setUser({ ...getUser, phoneNum: event.target.value });
    };

    const handleChangePosition = (event) => {
        setUser({ ...getUser, position_: event.target.value });
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
                            placeholder="Your user id"
                            onChange={handleChangeId}
                        />
                    </span>
                    <span>
                        <label htmlFor="forename">Forename</label>
                        <input
                            className="basic-slide"
                            id="forename"
                            type="text"
                            placeholder="Your first name"
                            onChange={handleChangeFName}
                        />
                    </span>
                    <span>
                        <label htmlFor="surname">Surname</label>
                        <input
                            className="basic-slide"
                            id="surname"
                            type="text"
                            placeholder="Your surname"
                            onChange={handleChangeSName}
                        />
                    </span>
                    <span>
                        <label htmlFor="dob">DOB</label>
                        <input
                            className="basic-slide"
                            id="dob"
                            type="text"
                            placeholder="Your date of birth"
                            onChange={handleChangeDob}
                        />
                    </span>
                    <span>
                        <label htmlFor="email">Email</label>
                        <input
                            className="basic-slide"
                            id="email"
                            type="text"
                            placeholder="Your email"
                            onChange={handleChangeEmail}
                        />
                    </span>
                    <span>
                        <label htmlFor="phoneNum">Phone</label>
                        <input
                            className="basic-slide"
                            id="phonenum"
                            type="text"
                            placeholder="Your contact number"
                            onChange={handleChangePhone}
                        />
                    </span>
                    <span>
                        <label htmlFor="position">Position</label>
                        <input
                            className="basic-slide"
                            id="position"
                            type="text"
                            placeholder="Your position"
                            onChange={handleChangePosition}
                        />
                    </span>
                </div>
            </form>
            <div className="row">
                <button onClick={fetchUsers, executeScroll}>Refresh</button>
                <button onClick={handleCreate, executeScroll}>Create</button>
                <button onClick={handleUpdate, executeScroll}>Update</button>
                <button onClick={deleteItem, executeScroll}>Delete</button>
            </div>
            <div ref={table}></div>
        </div>
    );
};

export default CrudJobs;
