import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const blog = { author, title, body };
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then( () => {
            setIsPending(false);
            setAuthor('');
            setTitle('');
            setBody('');
            console.log('New Blog Added');
        });

        history.push("/");
    }

    return(
        <div className="create">
            <h2>Create A Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Author: </label>
                <input type="text" value={author} onChange={ (e)=> setAuthor(e.target.value) }></input>
                <label>Title: </label>
                <input type="text" value ={ title } onChange={ (e)=> setTitle(e.target.value) }></input>
                <label>Blog Content: </label>
                <textarea value={ body } onChange={ (e)=> setBody(e.target.value) }></textarea>
                {!isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog</button> }
            </form>
        </div>
    );
}

export default Create;