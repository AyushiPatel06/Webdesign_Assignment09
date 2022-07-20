import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home' ;
import AboutUs from './AboutUs';
import ContactUs from './ContactUs' ;
import Jobs from './Jobs' ;

class App extends React.Component {
  render()  {
   return(
     <HashRouter>
       <div>
         <div>
         <h1>Taste of Tea Shop</h1>
         <ul className ='header'>
           <li><NavLink to = "/">Home</NavLink></li>
           <li><NavLink to = "/aboutUs">About Us</NavLink></li>
           <li><NavLink to = "/Jobs">Jobs</NavLink></li>
           <li><NavLink to = "/contactUS">Contact Us</NavLink></li>
         </ul>
        </div>
        <div className = 'content '>
         <Routes>
           <Route exact path = '/' component = {Home}></Route>
           <Route exact path = '/aboutUs' component = {AboutUs}></Route>
           <Route exact path = '/contactUs' component = {ContactUs}></Route>
           <Route exact path = '/Jobs' component = {Jobs}></Route>
         </Routes>
       
        </div> 
        
        </div>
     </HashRouter>
    )
 
  }
 }
 
 export default App;
