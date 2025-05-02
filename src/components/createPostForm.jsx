import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './createPostForm.css'

export function createPostForm() {

    const [chosenUser, setUser] = useState(null);
    const [addedTags, addTag] = useState([]);

    return (
        <div className="">
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Content"></input>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select user
                </Dropdown.Toggle>

                {getUserDropDownItems()}
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Add tags
                </Dropdown.Toggle>

                {getTagDropDownItems()}
            </Dropdown>
            <button>Post</button>
        </div>
    );
}

function getUserDropDownItems(){
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    let dropdownItems = users.map(user => {
        return <Dropdown.Item href='#/user.id' {...user}>user.username</Dropdown.Item>;
    });

    return <Dropdown.Menu>
        {dropdownItems}
    </Dropdown.Menu>
}

function getTagDropDownItems(){
    let tags = JSON.parse(localStorage.getItem("tags") || "[]");

    let dropdownItems = tags.map(tag => {
        return <Dropdown.Item href='#/tag.id' {...tag}>tag</Dropdown.Item>;
    });

    return <Dropdown.Menu>
        {dropdownItems}
    </Dropdown.Menu>
}