import Bloglist from './Bloglist';
import useFetch from './useFetch.js';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return(
        <div>
            { error && <div className="content">{ error }</div> }
            { isPending && <div className="content">Loading...</div> }
            { blogs && <Bloglist blogs={ blogs } title="All Blogs" /> }
        </div>
    );
}

export default Home;