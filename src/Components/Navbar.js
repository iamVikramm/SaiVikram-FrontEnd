import React from 'react';

function Navbar() {


  
    return (
        <nav className="nav">   
            <div className='logo-img'>
            </div>
            <div className='nav-links'>
                <h4 style={{cursor:"pointer"}}>FALCON 9</h4>
                <h4 style={{cursor:"pointer",textDecoration:"underline",textUnderlineOffset:"0.7rem"}}>DRAGON</h4>
            </div>
           
            <div></div>
        </nav>
    );
}

export default Navbar;