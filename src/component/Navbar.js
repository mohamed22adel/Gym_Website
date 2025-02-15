import React, { useState , useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import navbar from "./navbar.css";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 5) { 
        setScrolled(true);
        } else {
        setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

return (
    <div className='container'>

<nav onScroll={handleScroll} style={{backgroundColor:scrolled?"black":"transparent"}} className='navbar_container'>
    <div className='App_name'>GYM</div>
    <div className='nav_ul'>
        <ul>
            <NavLink to="/"><li className={({ isActive }) => (isActive ? 'active' : '')}>Home</li></NavLink>
            <NavLink to="/about"><li className={({ isActive }) => (isActive ? 'active' : '')}>About</li></NavLink>
            <NavLink to="/class"><li className={({ isActive }) => (isActive ? 'active' : '')}>Class</li></NavLink>
            <NavLink to="/schedule"><li className={({ isActive }) => (isActive ? 'active' : '')}>Schedule</li></NavLink>
            <NavLink to="/blog"><li className={({ isActive }) => (isActive ? 'active' : '')}>Blog</li></NavLink>
            <NavLink to="/contact"><li className={({ isActive }) => (isActive ? 'active' : '')}>Contact</li></NavLink>
        </ul>
    </div>



    <div className='nav_register_button'>
    <Link to="/contact"><button>Join Class Now</button></Link>
    </div>
</nav>
    


    </div>

    )
}

export default Navbar





