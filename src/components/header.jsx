import React from 'react';
import '../page.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="header">
            <p>Ribbit</p>
            <div style={{margin: "auto"}}>
                <input className="searchbar" type="text" placeholder="Search.." />
            </div>
            <Link to={"/createPost/"}>
                <button>Make post</button>
            </Link>
            <button>Hamburger</button>
        </div>
    );
}