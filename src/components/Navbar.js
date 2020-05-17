import React from 'react'
import logo from './logo.png'
import user from '../images/user.png'
function Navbar() {
    return (
        <nav className='navbar'>
            
            <h1>  <img src={logo} alt='ANALYTICA.IoT'/>Aalytica.IoT  <img src={logo}/></h1>
            
            <a href="https://www.w3schools.com">
            <img src={user}/>
            </a>
            <button>Demo</button>
           
            
          
            
        </nav>
    )
}
export default Navbar;
