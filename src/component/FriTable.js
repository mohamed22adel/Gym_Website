import React from 'react'
import { Link } from 'react-router-dom';
import time_table from "./time_table.css";
const FriTable = () => {
    return (
    <div className='table_container'>

<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Crossfit</h4>
</div>
<div>
    <p>Time</p>
    <h4>9:00am - 10:00am</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Jecy Deoko</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>


<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Karate</h4>
</div>
<div>
    <p>Time</p>
    <h4>10:00am - 11:00am</h4>
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
    <h4>Meditation</h4>
</div>
<div>
    <p>Time</p>
    <h4>1:00pm - 2:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Flex Wheeler</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>

<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Workout</h4>
</div>
<div>
    <p>Time</p>
    <h4>4:00pm - 5:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Shawn Ray</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>
    </div>
    )
}

export default FriTable