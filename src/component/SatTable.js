import React from 'react'
import { Link } from 'react-router-dom';
import time_table from "./time_table.css";
const SatTable = () => {
    return (
    <div className='table_container'>

<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Power Lifting</h4>
</div>
<div>
    <p>Time</p>
    <h4>9:00am - 10:00am</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Stefi Cohen</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>


<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Boxing</h4>
</div>
<div>
    <p>Time</p>
    <h4>1:00pm - 2:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Monica Jand</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>


<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Yoga</h4>
</div>
<div>
    <p>Time</p>
    <h4>6:00pm - 7:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Madison Froning</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>
    </div>
    )
}

export default SatTable