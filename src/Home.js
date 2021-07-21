import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch('http://localhost:8000/blogs')
            .then( (response) => {
                if(response.ok !== true) {
                    throw Error('The resource could not be loaded');
                }
                return response.json();
            })
            .then( (data) => {
                setIsPending(false);
                setBlogs(data);
            })
            .catch( (err) => {
                setError(err.message);
                setIsPending(false);
            });
    }, []);

    return(
        <div>
            { error && <div className="content">{ error }</div> }
            { isPending && <div className="content">Loading...</div> }
            { blogs && <Bloglist blogs={ blogs } title="All Blogs" /> }
        </div>
    );
}

export default Home;