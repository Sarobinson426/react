const Bloglist = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return(
        <div className="content">
            <h2>{ title }</h2>
            { blogs.map( (blog) => (
                <div className="blog-preview" key={ blogs.id }>
                    <h2>{ blog.title }</h2>
                    <p>Authored By: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;