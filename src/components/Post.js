import React, {useState, useEffect} from "react";
import _ from 'lodash';
import { Link } from "react-router-dom";
// use state holds teh information, so acting like a redux store

const Post = ({match}) => {
    console.log(match.url)


    // we need to create something to hold these items in 
    const [items, setItems] = useState({});

    const fetchItems = async () => {
        const data = await fetch('http://localhost:80/user/admin')
        .then(response => response.json())
        setItems(data); // stores objects inside object, with object id as key value pair
    }


    useEffect(() => { // this is set up to only run at the beginning but does not update, you need to set up thunk for that
        fetchItems();
        setItems(_.mapKeys(items, 'id'))
        console.log(items);
        return () => {
            setItems({}); // This worked for me ... clean up function 
          };
      }, []); // empty brackets means will only run when component mounts 

    return (
        <div>
            {_.map(items, user => (
                <div key={user.id} className="post">
                    <p>ID: {user.id} </p>
                    <Link to={`/home/${user.id}`}><p>Name: {user.forename} </p></Link>
                    <p>Position: {user.position_} </p>
                </div>))
            }
        </div>
    )
}


export default Post;