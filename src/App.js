import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Class from "./component/Class";
import Schedule from "./component/Schedule";
import Contact from "./component/Contact";
import SunTable from "./component/SunTable";
import SatTable from "./component/SatTable";
import MonTable from "./component/MonTable";
import TueTable from "./component/TueTable";
import ThuTable from "./component/ThuTable";
import FriTable from "./component/FriTable";
import WedTable from "./component/WedTable";
import ScrollToTopButton from "./component/ScrollToTopButton";
import Footer from "./component/Footer";
export default function App(){
    return(
        
<div>
<ScrollToTopButton/>
<Navbar/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/class" element={<Class/>}/>
    <Route path="/schedule" element={<Schedule/>}>
    <Route path="sunday" element={<SunTable/>}/>
    <Route path="saturday" element={<SatTable/>}/>
    <Route path="monday" element={<MonTable/>}/>
    <Route path="tuesday" element={<TueTable/>}/>
    <Route path="wednesday" element={<WedTable/>}/>
    <Route path="thursday" element={<ThuTable/>}/>
    <Route path="friday" element={<FriTable/>}/>
    </Route>
</Routes>
<Footer/>
</div>
    );
}

/*<i className="fa-solid fa-star"></i> */

/*<i class="fa-solid fa-paper-plane"></i> contact send*/ 
/*<i class="fa-solid fa-envelope"></i> signin message*/
/*<i class="fa-solid fa-user"></i> signin user */
/*<i class="fa-solid fa-lock"></i> signin locker */
/*<i class="fa-solid fa-phone-volume"></i> contact telephone */
/*<i class="fa-solid fa-house"></i> contact home address */