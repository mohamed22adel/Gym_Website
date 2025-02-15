import React from 'react'
import about from "./about.css";
import { Link } from 'react-router-dom'
const About = () => {
    return (
    <div>
            <div className='about_container'>
        <img className='background_image' src={require("../images/background_image3.jpg")} alt='i'/>
        <div className='contact_background_div'>
            <h1>About</h1>
            <div className='contact_background_div_link'>
                <Link to="/"><p>GYM - </p></Link>
                <p style={{color:"#ff0336"}}> about</p>
            </div>
        </div>
    </div>

<div className='about_paragraph_container'>

<div className='about_paragraph_image'>
<img src={require("../images/about_image_paragraph.jpg")} alt='i'/>
</div>

<div className='about_paragraph_paragraph'>
    <p className='about_paragraph_paragraph_p1'>WHO WE ARE</p>
    <h1>We Will Give You Strength and Health</h1>
    <p className='about_paragraph_paragraph_p2'>Gym an unknown printer took a galley type and 
        scraey aretea bled make a type specimen book. 
        May has survived not onlyive centuries but also 
        the leap electronic.Gym unknown printer took a galley 
        of type and scraey aretea.</p>
    
        <p>Gym an unknown printer</p>
        <p>Scraey aretea bled make a type</p>
        <p>Book has survived not onlyive</p>
        <p>Centuries but also the leap electronic.</p>
    
    <button style={{color:"#fff",backgroundColor:"#ff0336"}} class="animated-button">
    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
    <span class="text">OUR CLASSES</span>
    <span class="circle"></span>
    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
</button>
</div>
</div>



<div className='home_middle'>

<div className='home_middle_div'>
    <div className='home_middle_div1'>
    <h1>30+  <i class="fa-solid fa-dumbbell"></i></h1>
    <p>Expert Trainers</p>
    </div>
    <div>
        <img src={require("../images/image_in_about.jpg")} alt='i'/>
    </div>
</div>

<div className='home_middle_div'>
    <div className='home_middle_div1'>
    <h1>12k  <i class="fa-solid fa-dumbbell"></i></h1>
    <p>Total Members</p>
    </div>
    <div>
        <img src={require("../images/image_in_about2.jpg")} alt='i'/>
    </div>
</div>

</div>



<div className='about_history'>

<div>
    <div className='about_history_div'>
<img className='target' src={require("../images/target.png")} alt='i'/>
<h1>Our History</h1>
<p>Amet minim mollit non deserunt ullamco est 
    sit a liqua dolor do a met sint. Velit 
    officia consequat duis enim velit mollit 
    Exercitation veniam consequat.</p>
    </div>
    <div>
    <img className='about_image' src={require("../images/about_image.jpg")} alt='i'/>
    </div>
</div>

<div>
<div>
<img className='about_image2' src={require("../images/about_image2.jpg")} alt='i'/>
</div>
<div className='about_history_div'>
<img className='mission' src={require("../images/mission.png")} alt='i'/>
<h1>Our Mission</h1>
<p>Amet minim mollit non deserunt ullamco 
    est sit aliqua dolor do amet sint. 
    Velit officia consequat duis enim 
    velit mollit Exercitation veniam consequat.</p>
</div>
</div>
</div>


    </div>
    )
}

export default About