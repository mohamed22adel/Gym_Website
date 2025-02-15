import React from 'react'
import { Link } from 'react-router-dom';
import blog from "./blog.css";
const Blog = () => {
    return (
    <div>




<div>
<img className='background_image' src={require("../images/background_image3.jpg")} alt='i'/>
        <div className='contact_background_div'>
            <h1>Blog</h1>
            <div className='contact_background_div_link'>
                <Link to="/"><p>GYM - </p></Link>
                <p style={{color:"#ff0336"}}> blog</p>
            </div>
        </div>
</div>

<div className='blog_divs'>

        <div className='blog_container'>
<div className='blog_container_div1'>
<img className='yoga_blog' src={require("../images/yoga_blog.jpg")} alt='i'/>
<div className='blog_container_paragraph'>
<p className='blog_container_div_p1'>Yoga</p>
<h3>Yoga For Everyone in 2022</h3>
<div className='blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='blog_container_div_p2'> Admin</p>
<p className='blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>


<div className='blog_container_div2_2'>
<img className='yoga_blog' src={require("../images/bodybuilding_blog.jpg")} alt='i'/>
<div className='blog_container_paragraph'>
<p className='blog_container_div_p1'>Crossfit</p>
<h3>Getting Back Into CrossFit After Vacation</h3>
<div className='blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='blog_container_div_p2'> Admin</p>
<p className='blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>

<div className='blog_container_div3'>
<img className='yoga_blog' src={require("../images/fitness_blog.jpg")} alt='i'/>
<div className='blog_container_paragraph'>
<p className='blog_container_div_p1'>Fitness</p>
<h3>Meet Fitness Ambassador Grace</h3>
<div className='blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='blog_container_div_p2'> Admin</p>
<p className='blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>

<div className='blog_container_div4'>
<img className='yoga_blog' src={require("../images/blog_metitation.jpg")} alt='i'/>
<div className='blog_container_paragraph'>
<p className='blog_container_div_p1'>Meditation</p>
<h3>The Best are European Maters Direct</h3>
<div className='blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='blog_container_div_p2'> Admin</p>
<p className='blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>

<div className='blog_container_div5'>
<img className='yoga_blog' src={require("../images/blog_boxing.jpg")} alt='i'/>
<div className='blog_container_paragraph'>
<p className='blog_container_div_p1'>Boxing</p>
<h3>Give your Fitness a Boost with our Gym</h3>
<div className='blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='blog_container_div_p2'> Admin</p>
<p className='blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>

<div className='blog_container_div6'>
<img className='yoga_blog' src={require("../images/blog_bodybuilding.jpg")} alt='i'/>
<div className='blog_container_paragraph'>
<p className='blog_container_div_p1'> Body Building</p>
<h3>Give your fitness a boost with our new</h3>
<div className='blog_container_div2'>
<img src={require("../images/admin.jpg")} alt='i'/>
<p className='blog_container_div_p2'> Admin</p>
<p className='blog_container_div_p3'> | March 22, 2022</p>
</div>
</div>
</div>
    </div>
    <div>
    
<div>
<form className='blog_form'>
    <input type='search' placeholder='search here...'/>
    <button type='submit'> <i class="fa-solid fa-magnifying-glass"></i> search </button>
</form>
</div>

<div className='blog_links_container'>
    <h4>Categories</h4>
    <i class="fa-solid fa-minus"></i>
    <div className='blog_links'>
    <div><i class="fa-solid fa-angle-right"></i> Body Building</div>
<p>(1)</p>
    </div>
    <div className='blog_links'>
    <div><i class="fa-solid fa-angle-right"></i> Boxing</div>
    <p>(1)</p>
    </div>
    <div className='blog_links'>
    <div><i class="fa-solid fa-angle-right"></i> Crossfit</div>
    <p>(1)</p>
    </div>
    <div className='blog_links'>
    <div><i class="fa-solid fa-angle-right"></i> Fitness</div>
    <p>(1)</p>
    </div>
    <div className='blog_links'>
    <div><i class="fa-solid fa-angle-right"></i> Meditation</div>
    <p>(1)</p>
    </div>
    <div className='blog_links'>
    <div><i class="fa-solid fa-angle-right"></i> Yoga</div>
    <p>(1)</p>
    </div>
</div>


    </div>

    </div>

    </div>
    )
}

export default Blog