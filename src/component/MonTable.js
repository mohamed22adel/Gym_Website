import React from 'react'
import { Link } from 'react-router-dom';
import time_table from "./time_table.css";
const MonTable = () => {
    return (
    <div className='table_container'>

<div className='table_container_div'>

<div>
    <p>Class Name</p>
    <h4>Body Building</h4>
</div>
<div>
    <p>Time</p>
    <h4>10:00am - 11:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Paul Weight</h4>
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
    <h4>9:00am - 10:00am</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>David Vila</h4>
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
    <h4>Junifor Jonas</h4>
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
    <h4>6:00pm - 7:00pm</h4>
</div>
<div>
    <p>Trainer</p>
    <h4>Brock Lesnar</h4>
</div>
<Link to="/contact"><button>Join Now</button></Link>

</div>
    </div>
    )
}

export default MonTable