import { useContext } from "react";
import Post from "./components/post";
import { DataContext } from "./DataProvider";

export function PostPage({post}){
    const { posts, comments, users } = useContext(DataContext);

    if(post === null) return (<p>Loading post...</p>);
    if(comments === null && localStorage.getItem("comments") === null) return (<p>Loading comments...</p>)
    let local_comments = JSON.parse(localStorage.getItem("comments") || "[]");

    let postComponent = <Post key={post.id} />;
    let commentComponents = local_comments.map(comment => {
        return <Comment key={comment.id} {...comment}/>
    })

    return (
        <div>
            <Header />
            <div className="body">
                <div><Sidebar/></div>
                <div>
                    {postComponent}

                    <div className="interactionField">
                        <div className="reactionField">
                            <p className="smiley">&#x263A</p>
                        </div>
                        <div className="commentField">
                            <p>Write a comment</p>
                            <input type="text"></input>
                            <button>Submit comment</button>
                        </div>
                    </div>

                    {commentComponents}
                </div>
                <div>Some bar</div>
            </div>
        </div>
    );
}