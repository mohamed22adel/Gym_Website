import React from 'react'
import schedule from "./schedule.css";
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const Schedule = () => {
    return (
    <div className='schedule_container'>

<div>
<img className='background_image' src={require("../images/background_image3.jpg")} alt='i'/>
<div>
            <div className='contact_background_div'>
            <h1>Schedule</h1>
            <div className='contact_background_div_link'>
                <Link to="/"><p>GYM - </p></Link>
                <p style={{color:"#ff0336"}}> schedule</p>
            </div>
        </div>
</div>
</div>


<div className='schedule_container_days'>
    <NavLink to="/schedule/saturday"><div className={({ isActive }) => (isActive ? 'active' : '')}>Saturday</div></NavLink>
    <NavLink to="/schedule/sunday"><div className={({ isActive }) => (isActive ? 'active' : '')}>Sunday</div></NavLink>
    <NavLink to="/schedule/monday"><div className={({ isActive }) => (isActive ? 'active' : '')}>Monday</div></NavLink>
    <NavLink to="/schedule/tuesday"><div className={({ isActive }) => (isActive ? 'active' : '')}>Tuesday</div></NavLink>
    <NavLink to="/schedule/wednesday"><div className={({ isActive }) => (isActive ? 'active' : '')}>Wednesday</div></NavLink>
    <NavLink to="/schedule/thursday"><div className={({ isActive }) => (isActive ? 'active' : '')}>Thursday</div></NavLink>
    <NavLink to="/schedule/friday"><div className={({ isActive }) => (isActive ? 'active' : '')}>Friday</div></NavLink>


</div>

<Outlet/>



    </div>
    )
}

export default Schedule