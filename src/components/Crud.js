import React, { useState, useEffect } from "react";
import store from "../store";
import { getAllUsers, deleteUser } from "../actions";

const Crud = () => {
    const [getItem, setItem] = useState({
        position_: "staff",
        forename: "test",
        surname: "testing",
        dob: "1991-09-15",
        email: "test:youmail.com",
        phoneNum: "+123465789",
        jobs: [],
    });

    const user = store.getState().user;



    // submission handlers
    const fetchItems = async () => {
        const data = await fetch("http://localhost:80/user/admin")
            .then((response) => response.json())
            .catch((err) => console.log("error with fetching"));
        store.dispatch(getAllUsers(data))
    };

    const saveItems = async () => {
        setItem({ id: null });
        const post = await fetch("http://localhost:80/user/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(getItem),
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => fetchItems())
            .catch((err) => console.log("something wrong with post"));
    };

    const deleteItem = async () => {
        const url = "http://localhost:80/user/admin/delete/" + getItem.id;
        const post = await fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
            .then(() => store.dispatch(deleteUser(getItem.id)))
            .catch((err) => console.log("something wrong with delete"));
    };

    const handleSubmit = (event) => {
        console.log("post sent");
        saveItems();
    };

    // change handlers
    const handleChangeId = (event) => {
        setItem({ ...getItem, id: event.target.value });
    };

    const handleChangeFName = (event) => {
        setItem({ ...getItem, forename: event.target.value });
    };

    const handleChangeSName = (event) => {
        setItem({ ...getItem, surname: event.target.value });
    };

    const handleChangeDob = (event) => {
        setItem({ ...getItem, dob: event.target.value });
    };

    const handleChangeEmail = (event) => {
        setItem({ ...getItem, email: event.target.value });
    };

    const handleChangePhone = (event) => {
        setItem({ ...getItem, phoneNum: event.target.value });
    };

    const handleChangePosition = (event) => {
        setItem({ ...getItem, position_: event.target.value });
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
                <button onClick={fetchItems}>Refresh</button>
                <button onClick={handleSubmit}>Create</button>
                <button onClick={handleSubmit}>Update</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
};

export default Crud;
