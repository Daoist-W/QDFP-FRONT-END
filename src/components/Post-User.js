import React, { useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import store from "../store";
import { getAllUsers } from "../actions";

const PostUser = (props) => {
    // setting up store configuration 
    const unsubscribe = store.subscribe(() => {
        console.log("Store updated!!", store.getState());
    });
    const users = store.getState().users;
    console.log(users)

    // setting up API calls 
    const fetchItems = async () => {
        const data = await fetch("http://localhost:80/user/admin")
            .then((response) => response.json())
            .catch((err) => console.log("error with fetching"));
        // console.log(data);
        store.dispatch(getAllUsers(data))
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
            <h1>User List</h1>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
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
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        {_.map(users, (user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td><Link to={`/user/${user.id}`}>{user.forename}</Link></td>
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

export default PostUser;

const test = () => {

};
