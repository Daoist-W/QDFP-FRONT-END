import PostUser from "../components/Post-User.js";
import Crud from "../components/Crud-Users.js";
import CrudUsers from "../components/Crud-Users.js";

function Home (props) {

    return (
        <div>
            <CrudUsers />
            <PostUser />
        </div>
    )

}

export default Home;