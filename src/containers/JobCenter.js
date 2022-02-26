import Post from "../components/Post.js";
import Crud from "../components/Crud-Users.js";
import CrudJobs from "../components/Crud-Jobs.js";

function Home (props) {

    return (
        <div>
            <CrudJobs />
            <Post />
        </div>
    )

}

export default Home;