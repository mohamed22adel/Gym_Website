import React from 'react'
import { Link } from 'react-router-dom';
import time_table from "./time_table.css";
const ThuTable = () => {
    return (
    <div className='table_container'>

<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Crossfit</h4>
</div>
<div>
    <p>Time</p>
    <h4>10:00am - 11:00am</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Ellie Watson</h4>
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
    <h4>11:00am - 12:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Jonh Lewis</h4>
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
    <h4>Becky Lynch</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>
    </div>
    )
}

export default ThuTable