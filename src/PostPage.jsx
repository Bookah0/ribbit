import { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataProvider";
import { useParams } from "react-router-dom";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Comment from "./components/Comment";
import { addItem, getItem, getItems } from "./local";
import "./page.css";
import Post from "./components/post";

export function PostPage() {
    const { id } = useParams();
    const { comments } = useContext(DataContext);
    const [commentText, setCommentText] = useState("");
    const [post, setPost] = useState(getItem("posts", parseInt(id)));

    if (post === null) return (<p>Loading post...</p>);
    if (comments === null && localStorage.getItem("comments") === null) return (<p>Loading comments...</p>);

    let commentComponents = getItems('comments').reverse().map(comment => {
        return <Comment key={comment.id} {...comment} />
    });

    function likePost() {
        const posts = getItems("posts");
        posts[id - 1].reactions.likes += 1;
        localStorage.setItem("posts", JSON.stringify(posts));
        setPost(posts[id - 1]);
    }

    function dislikePost() {
        const posts = getItems("posts");
        posts[id - 1].reactions.dislikes += 1;
        localStorage.setItem("posts", JSON.stringify(posts));
        setPost(posts[id - 1]);
    }

    function submitComment() {
        let comment =
        {
            "id": Date.now(),
            "body": commentText,
            "postId": parseInt(id),
            "likes": 0,
            "user": getItem("users", 1)
        };

        addItem("comments", comment);

        const posts = getItems("posts");
        setPost(posts[id - 1]);
    }


    useEffect(() => {
        const updatedPost = getItem("posts", parseInt(id));
        setPost(updatedPost);
    }, [id]);

    return (
        <div className="page">
            <Header />
            <div className="main">
                <Sidebar />

                <div className="content">
                    <Post key={post.id} {...post} />

                    <div className="interaction-field">
                        <button onClick={likePost}>Like</button>
                        <button onClick={dislikePost}>Dislike</button>
                        <p>&#x263A;</p>
                    </div>

                    <div className="comment-field">
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button onClick={submitComment}>Submit</button>
                    </div>

                    <div className="comment-section">
                        {commentComponents}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;
