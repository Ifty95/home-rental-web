import React from 'react';
import "./component.css";
import { Link } from "react-router-dom";
import "../Components/aboutUs.css";
import { display } from '@mui/system';

function footer() {
  return (
    <div className='containerFooter'>
        <div className='footer-row'>
            <div className='footer-col'>
                <h3>Imporatnt Links</h3>
                <ul>
                 <li><Link to = "/aboutUs" style={
                   { textDecoration : "none", color: "white"}
                }> About Us </Link></li> 

                    <li><Link to="/faq" style={
                   { textDecoration : "none", color: "white"}
                }>FAQS</Link></li>
                    
                    
                </ul>
            </div>
            <div className='footer-col'>
                <h3>Contact Us</h3>
                <ul>
                    <p>Address: Road-11,Sector-13,Uttara Jashimuddin road,Dhaka-1212,Bangladesh</p>
                    <p>Mobile: +8801781122383</p>
                    <p>E-mail: rentit@gmail.com</p>
                </ul>
            </div>
            <div className='footer-col'>
                <h3>Follow us on</h3>
                <div className='social-links'>
                    <a className='fb' href='https://www.facebook.com/tabassum.ferdous.29'><i className='fab fa-facebook-f'></i></a>
                    <a className='insta' href='https://www.instagram.com/accounts/login/?'><i className='fab fa-instagram'></i></a>
                    <a className='linked' href='https://bd.linkedin.com/'><i className='fab fa-linkedin-in'></i></a>
                    <a className='wa' href='https://wa.me/+8801779118157'><i className='fab fa-whatsapp'></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer;