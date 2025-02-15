import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import blogClass from "./blogClass.css";
const Class = () => {



    return (
    <div>

        <div className='class_container'>
        <img className='background_image' src={require("../images/background_image3.jpg")} alt='i'/>
        <div className='contact_background_div'>
            <h1>Class</h1>
            <div className='contact_background_div_link'>
                <Link to="/"><p>GYM - </p></Link>
                <p style={{color:"#ff0336"}}> class</p>
            </div>
        </div>
        </div>


<div className='class_div_container'>

<div className='class_div'>
<img src={require("../images/blog_bodybuilding.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>Body Building</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Dorian Yates</p>
    <p><i class="fa-regular fa-clock"></i>Wed: 9:00 am</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/blog_boxing.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>boxing</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Flex Wheeler</p>
    <p><i class="fa-regular fa-clock"></i>Fri: 1:00 pm</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/blog_metitation.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>metitation</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Dorian Yates</p>
    <p><i class="fa-regular fa-clock"></i>Sun: 6:00 pm</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/fitness_blog.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>fitness</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Janelle Cam</p>
    <p><i class="fa-regular fa-clock"></i>Fri: 10:00 am</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/home_class_running.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>running</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Stefi Cohen</p>
    <p><i class="fa-regular fa-clock"></i>Sat: 9:00 am</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/yoga_blog.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>yoga</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Shawn Ray</p>
    <p><i class="fa-regular fa-clock"></i>Fri: 4:00 pm</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/class_karate.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>karate</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Jenifer Alex</p>
    <p><i class="fa-regular fa-clock"></i>Tue: 6:00 pm</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/class_crossfit.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>crossfit</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Junifor Jonas</p>
    <p><i class="fa-regular fa-clock"></i>Mon: 4:00 pm</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

<div className='class_div'>
<img src={require("../images/class_workout.jpg")} alt=''/>
<div  className='class_paragraph'>
<h3>workout</h3>
<i class="fa-solid fa-minus"></i>
<div className='class_p_div'>
    <p><i class="fa-regular fa-user"></i>Becky Lynch</p>
    <p><i class="fa-regular fa-clock"></i>Thur: 1:00 pm</p>
</div>
<button style={{color:"#fff",backgroundColor:"#ff0336",marginTop:"-1px"}} class="animated-button">
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

</div>


    </div>
    )
}

export default Class