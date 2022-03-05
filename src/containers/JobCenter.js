import PostJob from "../components/Post-Jobs.js";
import Crud from "../components/Crud-Users.js";
import CrudJobs from "../components/Crud-Jobs.js";

function Home (props) {

    return (
        <div>
            <CrudJobs />
            <PostJob />
        </div>
    )

}

export default Home;