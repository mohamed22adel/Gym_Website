import React from 'react'
import { Link } from 'react-router-dom';
import time_table from "./time_table.css";
const WedTable = () => {
    return (
    <div className='table_container'>

<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Cycling</h4>
</div>
<div>
    <p>Time</p>
    <h4>9:00am - 10:00am</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Dorian Yates</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>


<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Body Building</h4>
</div>
<div>
    <p>Time</p>
    <h4>11:00am - 12:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Steven Mark</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>


<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Fitness</h4>
</div>
<div>
    <p>Time</p>
    <h4>1:00pm - 2:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Janelle Cam</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>

<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Running</h4>
</div>
<div>
    <p>Time</p>
    <h4>4:00pm - 5:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Robert Louis</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>
    </div>
    )
}

export default WedTable