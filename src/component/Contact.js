import React from 'react'
import contact from "./contact.css";
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
        
    <div className='contact_container'>
        <img className='background_image' src={require("../images/background_image3.jpg")} alt='i'/>
        <div className='contact_background_div'>
            <h1>Contact</h1>
            <div className='contact_background_div_link'>
                <Link to="/"><p>GYM - </p></Link>
                <p style={{color:"#ff0336"}}> Contact</p>
            </div>
        </div>
    </div>

<div className='contact_body'>
<div>
<div className='contact_body_paragraph'>
<h1>We are here for help you! To Shape Your Body.</h1>
<p>when an unknown printer took a galley of type 
    and scrambled it to make a type specimen book. 
    It has survived not only five centuries, 
    but also the leap into electronic types eating.
    type specimen It has survived not only five centuries, 
    but also the type specimen book.</p>
</div>

<div className='contact_body_paragraph_div1'>

<div>
    <h4>New York City, USA</h4>
    <i class="fa-solid fa-minus"></i>
        <p>85 Briston Mint Street,</p>
        <p>London, E1 8LG, USA</p>
</div>

<div>
    <h4>Opening Hours</h4>
    <i class="fa-solid fa-minus"></i>
        <p>Mon to Fri: 7:30 am — 1:00 am</p>
        <p>Mon to Fri: 7:30 am — 1:00 am</p>
</div>

</div>

<div className='contact_body_paragraph_div2'>

<div>
    <h4>Information</h4>
    <i class="fa-solid fa-minus"></i>
        <p>+800-123-4567</p>
        <p>gym@yourname.com</p>
</div>

<div className='contact_body_paragraph_div2_2'>
    <h4>Follow Us On</h4>
    <i class="fa-solid fa-minus"></i>
        <p>Mon to Fri: 7:30 am — 1:00 am</p>
        <p>Mon to Fri: 7:30 am — 1:00 am</p>
        <div>
        
<div className='contact_body_paragraph_div2_btn'>
    <button className="Btn1">
    <span className="svgContainer1">
    <svg viewBox="0 0 320 512" height="1.3em" xmlns="http://www.w3.org/2000/svg" className="svgIcon" fill="white">
    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </svg>
    </span>
    <span className="BG1" />
    </button>

    <button className="Btn3">
    <span className="svgContainer3">
    <svg viewBox="0 0 384 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
    </svg>
    </span>
    <span className="BG3" />
    </button>

    <button className="Btn2">
    <span className="svgContainer2">
    <svg viewBox="0 0 512 512" height="1.7em" xmlns="http://www.w3.org/2000/svg" className="svgIcon" fill="white">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
    </span>
    <span className="BG2" />
    </button>

    <button className="Btn4">
    <span className="svgContainer4">
    <svg viewBox="0 0 576 512" fill="white" height="1.6em" xmlns="http://www.w3.org/2000/svg">
    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
    </span>
    <span className="BG4" />
    </button>
</div>


        </div>
</div>

</div>

</div>


<div className='contact_body_form'>
    <div>
    <h2>Leave Us Your Info</h2>
    <i class="fa-solid fa-minus"></i>
    </div>
<form>
    <input type='text' placeholder='Full Name*'/>
    <input type='email' placeholder='Your Email*'/>
    <input type='text' placeholder='Select Class*'/>
    <input className='Comment' type='textarea' placeholder='Comment*'/>
    <button className='contact_body_form_btn' type='submit'>Submit</button>
</form>
</div>

</div>


<div>
<div style={{width: '100%', marginTop:"150px"}}><iframe width="100%" height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=new%20york+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.gps.ie/"&gt;gps trackers&lt;/a&gt;</iframe></div>

</div>

    </div>
    )
}

export default Contact