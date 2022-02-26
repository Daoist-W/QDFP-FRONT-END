import Post from "../components/Post.js";
import Crud from "../components/Crud-Users.js";
import CrudUsers from "../components/Crud-Users.js";

function Home (props) {

    return (
        <div>
            <CrudUsers />
            <Post />
        </div>
    )

}

export default Home;