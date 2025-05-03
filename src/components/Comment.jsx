import '../page.css';
import default_icon from '../assets/def_icon.png';

export function Comment({ user, date, body }) {
    return (
        <div className="comment">
            <div className="comment-header">
                <img className="profile-pic" src={default_icon} width="32" height="32" />
                <div>
                    <p className="comment-username">{user.username}</p>
                    <p className="comment-date">{date}</p>
                </div>
            </div>
            <p className="comment-body">{body}</p>
        </div>
    );
}

export default Comment;