import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";

const Profile = (props) => {
    let params = useParams();

    // we need to create something to hold these users in
    const [user, setUser] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`http://localhost:80/user/admin/` + params.id);
        const user = await data.json();
        setUser(user); // stores objects inside object, with object id as key value pair
    };

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div>
            <h1>User {user.id}</h1>
            <div className="card">
                <img src="https://picsum.photos/300" alt={user.forename} />
                <h1>{user.forename} {user.surname}</h1>
                <p className="position">{user.position_}</p>
                <p>{user.email}</p>
                <p>{user.phoneNum}</p>
                <a className="profile-link" href="#">
                    <i className="fa fa-dribbble"></i>
                </a>
                <a className="profile-link" href="#">
                    <i className="fa fa-twitter"></i>
                </a>
                <a className="profile-link" href="#">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a className="profile-link" href="#">
                    <i className="fa fa-facebook"></i>
                </a>
                <p>
                    <button className="profileButton">Contact</button>
                </p>
            </div>
        </div>
    );
};

export default Profile;
