import Post from "../components/Post.js";
import Crud from "../components/Crud-Users.js";

function Home (props) {

    return (
        <div>
            <Crud />
            <Post />
        </div>
    )

}

export default Home;