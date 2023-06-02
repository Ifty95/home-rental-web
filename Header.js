import React, { useEffect  } from "react";
import "./component.css";
import { Link } from "react-router-dom";

function Header(){

      const user=localStorage.getItem('userToken');

      const handleClick = () =>{
            localStorage.removeItem('userToken');
            window.location.reload()
            console.log("clicked");
      } 

    return (<div className='Header'>
           <nav class="nav">
          <img src="image\logo1.jpeg" alt='logo' class="logo"></img>
          <ul class="nav-menu">
                  <li><Link to="/">  Home </Link></li>
                  <li><Link to="/allProperties"> All properties </Link> </li>
                  <li><Link to="/listing">Listing Property</Link> </li>
          </ul>

          <div class="menubar">
                  <ul>
                      {
                         user ?
                        <>
                            <button onClick={handleClick}><i class="fa-solid fa-arrow-right-to-bracket"></i> Log Out</button>
                        </>
                        :
                        <>
                           <li> <Link to="/logIn"> <i class="fa-solid fa-user-plus"></i>Sign-Up</Link></li>
              
                           {/* <li> <Link to="/logIn"> <i class="fa-solid fa-user-plus"></i>Sign In </Link></li> */}
                        </>
                      }
                      
                  </ul>
            </div>
            </nav>
            
            
 
      </div>);
}


export default Header;