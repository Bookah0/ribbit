import React from 'react';
import './header.css'

export function Header() {
    return (
        <div className="header">
            <p>Logo</p>
            <div style={{margin: "auto"}}>
                <input className="searchbar" type="text" placeholder="Search.." />
            </div>
            <button>Login button</button>
            <button>Hamburger</button>
        </div>
    );
}