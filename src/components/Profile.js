import React, {useState, useEffect} from "react";
import _ from 'lodash';
// use state holds teh information, so acting like a redux store


const Profile = ({match}) => {
    console.log(match);

    // we need to create something to hold these users in 
    const [user, setUser] = useState({});

    const fetchItem = async () => {
        const data = await fetch(`https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01`)
        const user = await data.json();
        setUser(user); // stores objects inside object, with object id as key value pair
    }


    useEffect(() => { // this is set up to only run at the beginning but does not update, you need to set up thunk for that
        fetchItem();
        // return () => {
        //     setUser({}); // This worked for me ... clean up function 
        //   };
      }, []); // empty brackets means will only run when component mounts 

    return (
        <div>
            <h1>User {user.id}</h1>
        </div>
    )
}


export default Profile;

