import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from "./home.css";
const Home = () => {

    const scheduleData = [
        { day: 'MON', time: '9:00am - 10:00am', class: 'FITNESS' },
        { day: 'MON', time: '10:00am - 11:00am', class: 'BODY BUILDING' },
        { day: 'MON', time: '4:00pm - 5:00pm', class: 'RUNNING' },
        { day: 'MON', time: '6:00pm - 7:00pm', class: 'FITNESS' },
        { day: 'TUE', time: '9:00am - 10:00am', class: 'BOXING' },
        { day: 'TUE', time: '11:00am - 12:00pm', class: 'BODY BUILDING' },
        { day: 'TUE', time: '1:00pm - 2:00pm', class: 'BOXING' },
        { day: 'WED', time: '9:00am - 10:00am', class: 'CYCLING' },
        { day: 'WED', time: '10:00am - 11:00am', class: 'BODY BUILDING' },
        { day: 'WED', time: '1:00pm - 2:00pm', class: 'MEDITATION' },
        { day: 'WED', time: '4:00pm - 5:00pm', class: 'RUNNING' },
        { day: 'THUR', time: '9:00am - 10:00am', class: 'FITNESS' },
        { day: 'THUR', time: '10:00am - 11:00am', class: 'BODY BUILDING' },
        { day: 'THUR', time: '1:00pm - 2:00pm', class: 'BOXING' },
        { day: 'FRI', time: '10:00am - 11:00am', class: 'KARATE' },
        { day: 'FRI', time: '1:00pm - 2:00pm', class: 'BOXING' },
        { day: 'SAT', time: '10:00am - 11:00am', class: 'BODY BUILDING' },
        { day: 'FRI', time: '6:00am - 7:00am', class: 'FITNESS' },
        ];
    


        


        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        







return (

    <div>
    <div className='home_photo'>
    <img src={require("../images/home_background_4.jpg")} alt='i'/>
    </div>

    <div className='home_paragraph'>
        <p className='p'>FIND YOUR ENERGY</p>
        <h1>
        MAKE YOUR BODY HEALTHY & FIT
        </h1>
        <p className='home_paragraph_p2'>
        Gym an unknown printer took a galley of type and scrambled.It has survived known printer centuries.
        </p>
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

    {/*About*/}

<div className='home_about'>
    <div className='home_about_photo'>
        <img className='runner_background' src={require("../images/runner_background-removebg-preview.png")} alt='i'/>
<img className='home_runner_man' src={require("../images/home_runner_man-removebg-preview.png")} alt='i'/>
    </div>

    <div className='home_about_paragraph'>
        <p className='home_about_paragraph_p1'>ABOUT GYM</p>
        <h1>
        We Can Give A Shape Of Your Body Here!
        </h1>
        <p className='home_about_paragraph_p2'>
        Gym an unknown printer took a galley of type and scraey 
        aretea bled make a type specimen book. 
        May has survived not onlyive centuries but also the leap electronic.
        </p>
        <div className='home_about_Equipment'>
            <img src={require("../images/dumbbell.png")} alt='i'/>
            <div>
                <h4>Modern Equipment</h4>
                <p>Gym an unknown printer took a galley of type and scraey.</p>
            </div>
        </div>

        <div className='home_about_Fitness'>
            <img src={require("../images/ball.png")} alt='i'/>
            <div>
                <h4>Body Fitness</h4>
                <p>Gym an unknown printer took a galley of type and scraey.</p>
            </div>
        </div>
    </div>
</div>


    {/*why choose us*/}

    <div className='home_choose_us'>
    <div className='home_choose_us_photo'>
<img className='male-boxer-posing' src={require("../images/male-boxer-posing-t-shirt-with-arms-crossed.jpg")} alt='i'/>
    </div>

    <div className='home_choose_us_paragraph'>
        <p className='home_choose_us_paragraph_p1'>WHY CHOOSE US</p>
        <h1>
        Why Choose Us to Join Our Classes
        </h1>
        <p className='home_choose_us_paragraph_p2'>
        Gym an unknown printer took galle type anscraey 
        aretea bled make a type specimen bookayurvived 
        not onlyive centuries.Gym an unknown printer took galle type anscraey.
        </p>
        <div className='home_choose_us_Equipment_and_Balance'>
        <div className='home_choose_us_Equipment'>
            <img src={require("../images/dumbbell.png")} alt='i'/>
            <div>
                <h4>Modern Equipment</h4>
                <p>Gym an unknown printer took a galley of type and scraey.</p>
            </div>
        </div>

        <div className='home_choose_us_Balance'>
            <img src={require("../images/item.png")} alt='i'/>
            <div>
                <h4>Weight Balance</h4>
                <p>Gym an unknown printer took a galley of type and scraey.</p>
            </div>
        </div>
        </div>



    </div>


</div>

{/*trainers*/}


<div className='home_trainers'>

<div className='home_trainers_paragraph'>

<p className='home_trainers_paragraph_p1'>TOP TRAINERS</p>
<h1>Meet Our Experienced
Cool Trainers</h1>
</div>

<div className='home_trainers_top_trainers'>

<div className='top_yoga_trainers'>
<img className='trainer_background' src={require("../images/trainer_background.jpg")} alt='i'/>
<div className='top_yoga_trainers_div'>
    <div>
    <h4>Dorian Yates</h4>
    <p>Yoga Trainer</p>
    <div className='trainers_social_media'>
    <li><i class="fa-brands fa-facebook-f"></i></li>
    <li><i class="fa-brands fa-instagram"></i></li>
    <li><i class="fa-brands fa-behance"></i></li>
    <li><i class="fa-brands fa-x-twitter"></i></li>
    </div>
    </div>
    <div>
        <img className='yoga_trianer' src={require("../images/yoga_trianer.png")} alt='i'/>
    </div>
</div>

<img className='trainer_background' src={require("../images/trainer_background.jpg")} alt='i'/>
<div className='top_yoga_trainers_div'>
    <div>
    <h4>Flex Wheeler</h4>
    <p>Yoga Trainer</p>
    <div className='trainers_social_media'>
    <li><i class="fa-brands fa-facebook-f"></i></li>
    <li><i class="fa-brands fa-instagram"></i></li>
    <li><i class="fa-brands fa-behance"></i></li>
    <li><i class="fa-brands fa-x-twitter"></i></li>
    </div>
    </div>
    <div>
        <img className='yoga_trainer2' src={require("../images/yoga_trainer2.png")} alt='i'/>
    </div>
</div>


</div>

<div className='top_bodybuilder_trainers'>

<img className='trainer_background' src={require("../images/trainer_background.jpg")} alt='i'/>
<div className='top_bodybuilder_trainers_div'>
    <div>
    <h4>Stefi Cohen</h4>
    <p>Body Builder</p>
    <div className='trainers_social_media'>
    <li><i class="fa-brands fa-facebook-f"></i></li>
    <li><i class="fa-brands fa-instagram"></i></li>
    <li><i class="fa-brands fa-behance"></i></li>
    <li><i class="fa-brands fa-x-twitter"></i></li>
    </div>
    </div>
    <div>
        <img className='bodybuilder_trainer-Photoroom' src={require("../images/bodybuilder_trainer-Photoroom.png")} alt='i'/>
    </div>
</div>

<img className='trainer_background' src={require("../images/trainer_background.jpg")} alt='i'/>
<div className='top_bodybuilder_trainers_div'>
    <div>
    <h4>Shawn Ray</h4>
    <p>Body Builder</p>
    <div className='trainers_social_media'>
    <li><i class="fa-brands fa-facebook-f"></i></li>
    <li><i class="fa-brands fa-instagram"></i></li>
    <li><i class="fa-brands fa-behance"></i></li>
    <li><i class="fa-brands fa-x-twitter"></i></li>
    </div>
    </div>
    <div>
        <img className='bodybuilder_trainer2' src={require("../images/bodybuilder_trainer2.png")} alt='i'/>
    </div>
</div>

</div>


</div>

</div>

{/*schedule*/}
<div className='home_schedule'>
<p className='frist_p'>TIME & TABLE</p>
<h1>Weekly Class Schedule</h1>
<p>Gym an unknown printer took a galley of type and scrambled
make a type specimen book.</p>
</div>
<div className="schedule">
        {scheduleData.map((item, index) => (
        <div key={index} className="schedule-item">
            <div className="day">{item.day}</div>
            <div className="time">{item.time}</div>
            <div className="class">{item.class}</div>
        </div>
        ))}
    </div>


{/*Pricing*/}

<div className='home_Pricing'>
    <div className='home_Pricing_div'>
    <p className='frist_p'>PRICING CHART</p>
    <h1>Our Simple Pricing plans</h1>
    <p>Save <span>25%</span> on yearly Subscription Plan</p>
    </div>
    
    <div className='home_Pricing_div2'>

<Slider {...settings}>
        <div className="slider-item">
        <div className='div_container_in_slider'>
        <div className='Pricing_card'>
<img className='Pricing_card1' src={require("../images/Pricing_card1.jpg")} alt='i'/>
<p className='home_Pricing_slider_p1'>BASIC</p>
<div className='home_Pricing_slider_div'><h1>$100</h1>
<p className='home_Pricing_slider_p2'>/Mo</p></div>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Unlimited Access to Home Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free Fitness Training</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free training session with a Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Over 16 free group fitness classes</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free functional movement screen</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Movement screen</p>
<button style={{marginLeft:"10px",marginTop:"15px"}} class="animated-button">
    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
    <span class="text">PURCHASE NOW</span>
    <span class="circle"></span>
    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
</button>

</div>


<div className='Pricing_card'>
<img className='Pricing_card1' src={require("../images/Pricing_card2.jpg")} alt='i'/>
<p className='Pricing_card2_p1'>PREMIUM</p>
<div className='home_Pricing_slider_div'><h1>$200</h1>
<p className='home_Pricing_slider_p2'>/Mo</p></div>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Unlimited Access to Home Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free Fitness Training</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free training session with a Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Over 16 free group fitness classes</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free functional movement screen</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Movement screen</p>
<button style={{marginLeft:"10px",marginTop:"15px"}} class="animated-button">
    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
    <span class="text">PURCHASE NOW</span>
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
        <div className="slider-item">
        <div style={{display:"flex"}}>
        <div className='Pricing_card'>
<img className='Pricing_card1' src={require("../images/Pricing_card1.jpg")} alt='i'/>
<p className='home_Pricing_slider_p1'>BASIC</p>
<div className='home_Pricing_slider_div'><h1>$250</h1>
<p className='home_Pricing_slider_p2'>/Yr</p></div>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Unlimited Access to Home Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free Fitness Training</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free training session with a Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Over 16 free group fitness classes</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free functional movement screen</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Movement screen</p>
<button style={{marginLeft:"10px",marginTop:"15px"}} class="animated-button">
    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
    <span class="text">PURCHASE NOW</span>
    <span class="circle"></span>
    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
</button>

</div>


<div className='Pricing_card'>
<img className='Pricing_card1' src={require("../images/Pricing_card2.jpg")} alt='i'/>
<p className='Pricing_card2_p1'>PREMIUM</p>
<div className='home_Pricing_slider_div'><h1>$350</h1>
<p className='home_Pricing_slider_p2'>/Yr</p></div>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Unlimited Access to Home Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free Fitness Training</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free training session with a Club</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Over 16 free group fitness classes</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Free functional movement screen</p>
<p><i style={{margin:"auto 10px"}} class="fa-solid fa-check"></i> Movement screen</p>
<button style={{marginLeft:"10px",marginTop:"15px"}} class="animated-button">
    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
    <span class="text">PURCHASE NOW</span>
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
        
    </Slider>
    </div>

</div>

{/*blog*/}

<div className='home_blog_paragraph'>
    <p className='home_blog_paragraph_p1'>BLOG & NEWS</p>
    <h1>Our Latest Blog Posts</h1>
    <p className='home_blog_paragraph_p2'>Gym an unknown printer took galle type anscraey aretea bled make a
    type specimen book arrived not onlyive centuries.</p>
</div>

<div className='home_blog_container'>
<div className='home_blog_container_div1'>
<img className='yoga_blog' src={require("../images/yoga_blog.jpg")} alt='i'/>
<div className='home_blog_container_paragraph'>
<p className='home_blog_container_div_p1'>Yoga</p>
<h3>Yoga For Everyone in 2022</h3>
<div className='home_blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='home_blog_container_div_p2'> Admin</p>
<p className='home_blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>

<div className='home_blog_container_div2_2'>
<img className='yoga_blog' src={require("../images/bodybuilding_blog.jpg")} alt='i'/>
<div className='home_blog_container_paragraph'>
<p className='home_blog_container_div_p1'>Crossfit</p>
<h3>Getting Back Into CrossFit After Vacation</h3>
<div className='home_blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='home_blog_container_div_p2'> Admin</p>
<p className='home_blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>

<div className='home_blog_container_div3'>
<img className='yoga_blog' src={require("../images/fitness_blog.jpg")} alt='i'/>
<div className='home_blog_container_paragraph'>
<p className='home_blog_container_div_p1'>Fitness</p>
<h3>Meet Fitness Ambassador Grace</h3>
<div className='home_blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='home_blog_container_div_p2'> Admin</p>
<p className='home_blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>

</div>


{/*contact*/}

<div className='home_contact'>
<img className='home_contact_photo' src={require("../images/home_contact2.jpg")} alt='i'/>
<div className='home_contact_div'>
<h1>Need a Fitness Consultant?</h1>
<h2>Call:+130-5732458</h2>
<button style={{marginTop:"15px",position:"relative",left:"43%",backgroundColor:"#ff0336",color:"#fff"}} class="animated-button">
    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
    </svg>
    <span class="text">CONTACT WITH US</span>
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
)
}

export default Home






