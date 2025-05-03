import { useContext } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { DataContext } from "./DataProvider";
import { getItems } from "./local";
import MinPost from "./components/MinPost";
import "./page.css";

export function HomePage(){
    const { posts } = useContext(DataContext);
    if(posts === null && localStorage.getItem("posts") === null) return (<p>Loading posts...</p>);
    
    let postComponents = getItems("posts").map(post => {
        return <MinPost key={post.id} {...post} />;
    });

    return (
        <div className="page">
            <Header />
            <div className="main">
                <Sidebar />
                <div className="content">
                    {postComponents}
                </div>
            </div>
        </div>
    );
}

export default HomePage;