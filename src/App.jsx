import { useEffect, useState, useContext } from 'react'
import Post from './components/post'
import { DataContext } from "./DataProvider";
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

function App() {

  const { posts, comments, users } = useContext(DataContext);

  if(posts === null && localStorage.getItem("posts") === null) return (<p>Loading posts...</p>);

  let local_posts = JSON.parse(localStorage.getItem("posts") || "[]");
  console.debug(local_posts);

  let postComponents = local_posts.map(post => {
    return <Post key={post.id} {...post} />;
  });

  console.debug("nPosts: " + postComponents.length);

  return (
      <div>
          <Header />
          <div className="body">
              <div><Sidebar/></div>
              <div className="posts">{postComponents}</div>
              <div>Some bar</div>
          </div>
      </div>
  );
}

export default App
