import React from 'react'
import Logo from "../images/Logo.png";
import star from "../images/star.png"
import { Link } from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';



export default function Navbar() {
    return (
        <nav className='navbar'>
                <div className='nav-logo'>
                      <img src={Logo} alt='logo'/>
                      
                </div>

                <ul className='navbar-menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/category'>Category</Link>
                    </li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className='navbar-actions'>

                   
                    {/* <FaSearch className='search-icon'/> */}
                       <input type='text' className='navbar-search' placeholder='Search something here !'/>
                    

                  

                    <button className='navbar-button'> Join the community</button>

                   
                    <select className='navbar-select'>
                        <img src={star} alt='star' />
                        <option value="VND"> VND</option>
                    </select>
                </div>



            
        </nav>

    )
}
