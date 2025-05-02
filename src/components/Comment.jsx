export function Comment({ comment }) {
    return (
        <div>
            <div className="comment-container">
                <img src="def_icon.png"></img>
                <p>{comment.user.username}</p>
                <p>{comment.date}</p>
            </div>
            <p>comment.body</p>
        </div>
    );
}