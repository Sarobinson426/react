import { useParams } from 'react-router-dom';
import useFetch from './useFetch.js';

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    return(
        <div className="content">
            { isPending && <div>Pending...</div> }
            { error && <div>{ error }</div> }
            { data && (
               <div className="blog-details">
                   <article>
                       <h1>{ data.title }</h1>
                       <h2>Authored by: { data.author }</h2>
                       <p>{ data.body }</p>
                   </article>
               </div>
            )}
        </div>
    );
}

export default BlogDetails;