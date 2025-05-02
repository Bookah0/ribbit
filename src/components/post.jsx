import './post.css';
import default_icon from '../assets/def_icon.png';
import { Link } from 'react-router-dom';
//import { getUsername } from ".."

// getUsername(post.userID)

export function Post({postId, tags, userID, title, views, reactions, body}) {
    console.debug(title);

    return (
        <div className="post-container">
            <div style={{ display: 'flex' }}>
                <img id="profilePic" src={default_icon} width="32" height="32" />
                <div style={{ display: 'flex' }}>
                    <p id="thread">{tags.join(", ")}</p>
                    <p id="datePosted">Date</p>
                </div>
                <p id="username">username</p>
            </div>
            <Link to={"/post/" + postId}>
                <h2 id="postTitle" className="post-title">
                    {title}
                </h2>
            </Link>
            <div style={{ display: 'flex' }}>
                <p id="views">{views}</p>
                <p id="likes">{reactions.likes}</p>
                <p id="dislikes">{reactions.dislikes}</p>
            </div>
    
            <p id="postText" className="post">
                {body}
            </p>
            <Link to={"/post/" + postId}>
                <button>Show more</button>
            </Link>
            
        </div>
    );
}

export default Post;