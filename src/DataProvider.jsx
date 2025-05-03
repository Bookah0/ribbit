import { createContext, useEffect, useState } from "react";
import { fetch_posts, fetch_comments, fetch_users } from "./api_fetch";

export const DataContext = createContext(null);

export function DataProvider({children}) 
{
    const [posts, setPosts] = useState(null);
    const [comments, setComments] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem("posts") === null) {
                const fetchedPosts = await fetch_posts();
                setPosts(fetchedPosts);
                localStorage.setItem("posts", JSON.stringify(fetchedPosts));
            }

            if (localStorage.getItem("comments") === null) {
                const fetchedComments = await fetch_comments();
                setComments(fetchedComments);
                localStorage.setItem("comments", JSON.stringify(fetchedComments));
            }
    
            if (localStorage.getItem("users") === null) {
                const fetchedUsers = await fetch_users();
                setUsers(fetchedUsers);
                localStorage.setItem("users", JSON.stringify(fetchedUsers));
            }
        }

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ posts, comments, users }}>
          {children}
        </DataContext.Provider>
      );
}