import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
    <nav>
        <ul>
            <li><Link to = "/">Home</Link></li>
            {/* Add more links here */}

        </ul>
    </nav>
    );
}
export default Header;