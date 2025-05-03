import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { CreatePostForm } from "./components/createPostForm";
import "./page.css";

export function CreatePostPage() {
    return (
        <div className="page">
            <Header />
            <div className="main">
                <div>
                    <Sidebar />
                </div>
                <div className="content">
                    <CreatePostForm />
                </div>
            </div>
        </div>
    );
}

export default CreatePostPage;