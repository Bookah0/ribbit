import React from 'react';
import '../page.css';

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <p>Topics</p>
                <p>V</p>
            </div>
            <div className="sidebar-content">
                <p>Viral</p>
                <p>V</p>
            </div>
            <div className="sidebar-content">
                <p>Games</p>
                <p>V</p>
            </div>
            <div className="sidebar-content">
                <p>Q&As</p>
                <p>V</p>
            </div>
            <p>See more</p>
        </div>
    );
}