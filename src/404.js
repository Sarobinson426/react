import { Link } from "react-router-dom";

const _404 = () => {
    
    return(
        <div className="content _404-links">
            <p>This is embarassing. We just 404'd</p>
            <div className="content">
                <Link to="/">Go back to the home page!</Link>
            </div>
        </div>
    );
}

export default _404;