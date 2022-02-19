import React, { useState, useEffect } from "react";

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

    // submission handlers
    const fetchItems = async () => {
        const data = await fetch("http://localhost:80/user/admin")
            .then((response) => response.json())
            .catch((err) => console.log("error with fetching"));
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
            .catch((err) => console.log("something wrong with delete"));
    };

    const deleteAll = async () => {
        const url = "http://localhost:80/user/admin/delete/" + getItem.id;
        const post = await fetch(url, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((result) => console.log(result))
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
                <div class="row">
                    <span>
                        <input
                            class="basic-slide"
                            id="id"
                            type="text"
                            placeholder="Your user id"
                            onChange={handleChangeId}
                        />
                        <label for="id">Id</label>
                    </span>
                    <span>
                        <input
                            class="basic-slide"
                            id="forename"
                            type="text"
                            placeholder="Your first name"
                            onChange={handleChangeFName}
                        />
                        <label for="forename">Forename</label>
                    </span>
                    <span>
                        <input
                            class="basic-slide"
                            id="surname"
                            type="text"
                            placeholder="Your surname"
                            onChange={handleChangeSName}
                        />
                        <label for="surname">Surname</label>
                    </span>
                    <span>
                        <input
                            class="basic-slide"
                            id="dob"
                            type="text"
                            placeholder="Your date of birth"
                            onChange={handleChangeDob}
                        />
                        <label for="dob">DOB</label>
                    </span>
                    <span>
                        <input
                            class="basic-slide"
                            id="email"
                            type="text"
                            placeholder="Your email"
                            onChange={handleChangeEmail}
                        />
                        <label for="email">Email</label>
                    </span>
                    <span>
                        <input
                            class="basic-slide"
                            id="phonenum"
                            type="text"
                            placeholder="Your contact number"
                            onChange={handleChangePhone}
                        />
                        <label for="phoneNum">Phone</label>
                    </span>
                    <span>
                        <input
                            class="basic-slide"
                            id="position"
                            type="text"
                            placeholder="Your position"
                            onChange={handleChangePosition}
                        />
                        <label for="position">Position</label>
                    </span>
                </div>
            </form>
            <div class="row">
                <button onClick={fetchItems}>Refresh</button>
                <button onClick={handleSubmit}>Create</button>
                <button onClick={handleSubmit}>Update</button>
                <button onClick={deleteItem}>Delete</button>
                <button onClick={deleteItem}>Delete All</button>
            </div>
        </div>
    );
};

export default Crud;

