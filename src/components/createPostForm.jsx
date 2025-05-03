// TODO
// Test dropdowns & UI

import React, { useState } from 'react';
import { addItem, getItems } from '../local';
import '../page.css';

export function CreatePostForm() {

    const [chosenUser, setUser] = useState(null);
    const [addedTags, setAddedTags] = useState([]);
    const [titleText, setTitleText] = useState(null);
    const [bodyText, setBodyText] = useState([]);

    function handleUserChange(e) {
        const userId = e.target.value;
        setUser(userId);
    }

    function handleTagAdd(e) {
        const tag = e.target.value;
        if (tag && !addedTags.includes(tag)) {
            setAddedTags([...addedTags, tag]);
        }
    }

    function uploadPost()
    {
        let post = 
        {
            "id": Date.now(),
            "title": titleText,
            "body": bodyText,
            "tags": addedTags,
            "reactions": {
                "likes": 0,
                "dislikes": 0
            },
            "views": 0,
            "userId": chosenUser
        }

        addItem("posts", post);
    }

    let allTags = []
    getItems("posts").map(post => {
        allTags.push(...post.tags);
    });
    const uniqueTags = [...new Set(allTags)];
    console.debug(uniqueTags);

    return (
        <div className="form-body">
            <div>
                <input type="text" placeholder="Title..." onChange={(e) => setTitleText(e.target.value)} />
    
                <label>Select user: </label>
                <select onChange={handleUserChange}>
                    <option value="">-- Select user --</option>
                    {getItems("users").map(user => (
                        <option key={user.id} value={user.id}>
                            {user.username}
                        </option>
                    ))}
                </select>
            </div>
    
            <div>
                <label>Add tags: </label>
                <select onChange={handleTagAdd}>
                    <option value="">-- Select tag --</option>
                    {uniqueTags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
    
            <p>Tags: {addedTags.join(' ')}</p>
            <input type="text" placeholder="Body text" onChange={(e) => setBodyText(e.target.value)} />
            <button onClick={uploadPost}>Post</button>
        </div>
    );
}