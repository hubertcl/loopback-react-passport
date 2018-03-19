import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { removeCookies } from '../services/AuthAccess'

class Navbar extends Component {

	handleClick(e) {
		console.log("Target click "+e.target.value);
		if (e.target.value === "log out") {
			
		} 
		e.preventDefault();
	}

    render() {
		let loginPage = false;
		if(window.location.href.indexOf("login") > -1) {
			loginPage = true;
		}
        return (
            <div>
               <nav className="blue darken">
			    <div className="nav-wrapper">
			      {/*<a href="/" className="brand-logo">Meetupz</a>*/}
			      <a data-activates="main-menu" className="button-collapse show-on-large">
			      	<i className="fa fa-bars"></i>
			      </a>
				  { loginPage ? (
					  <ul id="" className="right hide-on-small-only">
					  <li><Link to="/login" ><i className="fa fa-sign-out"></i> Sign up</Link></li>{/* à revoir */}					
					</ul>
				  ) : ( 
					<ul id="" className="right hide-on-small-only">
					<li><Link to="/login" ><i className="fa fa-sign-up"></i> Sign out</Link></li>{/* à revoir */}					
			      </ul>
				   )}
			      <ul className="side-nav" id="main-menu">
			        <li><Link to="/meetups"><i className="fa fa-users"></i>Meetups</Link></li>
			        <li><Link to="/meetups/add"><i className="fa fa-plus"></i>Add Meetup</Link></li>
			        <li><Link to="/about"><i className="fa fa-question-circle"></i>About</Link></li>
			      </ul>
			    </div>
			   
			</nav>
            </div>
        )
    }
}

export default Navbar;