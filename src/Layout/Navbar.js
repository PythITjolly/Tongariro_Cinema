import React, { useState } from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Homepage from '../Components/Homepage';
import Movies from '../Components/Movies';
import Events from '../Components/Events';
import Contact from '../Components/Contact';

// Import the CSS file for styling
import "./../Styles/Navbar.css";

function Navbar(){
  function toggleNav() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  return(
      <>
      <div className="topnav" id="myTopnav">
<Link to="/" className="active">Home</Link>
<Link to="/Movies">Movies</Link>
<Link to="/Events">Events</Link>
<Link to="/Contact">Contact Us</Link>
<a href="javascript:void(0);" class="icon" onClick={toggleNav}>
  <i class="fa fa-bars"></i>
</a>
</div>
     <Routes>
      <Route index element={ <Homepage />} />
      <Route path="/movies" element= {<Movies />} />
      <Route path="/contact" element= {<Contact Us />} />
      <Route path="/events" element= {<Events />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
     </>
   );
 }
 function NoMatch(){
  return(
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to Home page for more info</Link>
      </p>
    </div>
    );
  }
 export default Navbar;
 