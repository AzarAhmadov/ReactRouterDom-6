import React from 'react'

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/about'> About </Link></li>
                    <li><Link to='/contact'> Contact </Link></li>
                    <li><Link to='/galary'> Galary </Link></li>
                </ul>
            </nav>
        </header>
    )
}
