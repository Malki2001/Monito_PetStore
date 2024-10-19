import React , {useState , useEffect}from 'react'
import Logo from "../images/Logo.png";
import star from "../images/star.png"
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';



export default function Navbar() {
    const[navBackground, setnavBackground]= useState(true);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 50){
                setnavBackground(true);
            }
            else{
                setnavBackground(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return()=>{
            window.removeEventListener('scroll',handleScroll);
        };

    });

    return (
        <nav className={`navbar ${navBackground ? 'navbar-scrolled' : ''}`}>
            <div className='nav-logo'>
                <img src={Logo} alt='logo' />

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


                {/* <div className='navbar-search'>
                    <FaSearch /> */}
                    <input type='text' className='navbar-search' placeholder='Search something here !' />
                {/* </div> */}

                <button className='navbar-button'> Join the community</button>


                <select className='navbar-select'>
                    <img src={star} alt='star' />
                    <option value="VND"> VND</option>
                </select>
            </div>




        </nav>

    )
}
