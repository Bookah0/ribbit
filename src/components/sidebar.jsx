import React from 'react';
import './sidebar.css'

export function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <p>Topics</p>
                <p className="arrow">Arrow</p>
            </div>
            <div className="sidebar-content">
                <p>Viral</p>
                <p className="arrow">Arrow</p>
            </div>
            <div className="sidebar-content">
                <p>Games</p>
                <p className="arrow">Arrow</p>
            </div>
            <div className="sidebar-content">
                <p>Q&As</p>
                <p className="arrow">Arrow</p>
            </div>
            <p>See more</p>
        </div>
    );
}