import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar({ isOpen, closeSidebar }) {
    const handleLinkClick = () => {
        closeSidebar();
    };
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className='nav-link' onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li>
                        <a href='#drop-constraint' className='nav-link' onClick={handleLinkClick}>Drop Constraint</a>
                    </li>
                    <li>
                        <a href='#row-count' className='nav-link' onClick={handleLinkClick}>Count of Rows</a>
                    </li>
                    <li>
                        <a href='#select-statement' className='nav-link' onClick={handleLinkClick}>Custom Statement</a>
                    </li>
                    <li>
                        <a href='#section-4' className='nav-link' onClick={handleLinkClick}>Comming Soon...</a>
                    </li>
                </ul>
            </nav>
            <div className='author'>
                <img src="./logo.png" alt="TheCodingCo" />
                <p>Developed by <b>TheCodingCo.</b></p>
            </div>
        </div>
    )
}
