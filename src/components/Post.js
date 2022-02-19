import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
// use state holds teh information, so acting like a redux store

const Post = (props) => {
    console.log(props);

    // we need to create something to hold these items in
    const [items, setItems] = useState({});

    const fetchItems = async () => {
        const data = await fetch("http://localhost:80/user/admin")
            .then((response) => response.json())
            .catch((err) => console.log("error with fetching"));
        // console.log(data);
        setItems(data); // stores objects inside object, with object id as key value pair
    };

    useEffect(() => {
        // this is set up to only run at the beginning but does not update, you need to set up thunk for that
        fetchItems();
        return () => {
            setItems({}); // This worked for me ... clean up function
        };
    }, []); // empty brackets means will only run when component mounts

    return (
        <section>
            <h1>User List</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>SURNAME</th>
                            <th>DOB</th>
                            <th>EMAIL</th>
                            <th>POSITION</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        {_.map(items, (user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <Link to={`/home/${user.id}`}>
                                    <td>{user.forename}</td>
                                </Link>
                                <td> {user.surname}</td>
                                <td>{user.dob}</td>
                                <td>{user.email}</td>
                                <td> {user.position_}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Post;

const test = () => {

};
