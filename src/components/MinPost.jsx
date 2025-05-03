import '../page.css';
import default_icon from '../assets/def_icon.png';
import { Link } from 'react-router-dom';
import { getItem } from '../local';

export function MinPost({id, tags, userId, title, body}) {
    const user = getItem("users", userId);

    return (
        <div className="post-container" id='minPostContainer'>
            <div style={{ display: 'flex' }}>
                <img className="profile-pic" src={default_icon} width="32" height="32" />
                <p className="username">{user?.username}</p>
            </div>
            <p className="tags">{tags.join(", ")}</p>

            <Link to={"/post/" + id}>
                <h2 className="post-title">
                    {title}
                </h2>
            </Link>
    
            <p className="postText">
                {body.substring(0, 60) + '...'}
            </p>
            
        </div>
    );
}

export default MinPost;