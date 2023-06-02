import React from 'react';
import "./cardDetails.css";
import "../Components/component.css"
import dataSlider from "./dataSlider";
import Slider from "react-slick";
import Header from "../Components/Header";
import Footer from "../Components/footer";

import 'react-slideshow-image/dist/styles.css';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const PreviousBtn=(props)=>{
    return(
      <div>
        <faArrowAltCircleLeft />
      </div>
    )
}

const NextBtn=(props)=>{
  return(

  
    <div>
      <faArrowAltCircleRight />
    </div>
  )
}

function cardDetails() {
  return (
    <div className='container-slider'>
      <div className='header'>
      <Header />
      </div>
 
<Slider autoplay autoplaySpeed={2000} dots initialSlide={2} infinite prevArrow={<PreviousBtn/>} nextArrow={<NextBtn/>}
      customPaging={(i)=> {
        return(
          <div>
            <img src={dataSlider[i]} 
             style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "10px"}}
            />
          </div>
        )
      }}
      dotsClass="slick-dots custom-indicator"
      >
      {
        dataSlider.map(item => (
          <div>
             <img src={item} className="img-slider" style={{ width: "90%", height: "600px", marginLeft: "90px", padding: "20px" }}/>
          </div>
        ))
       }
      </Slider>

      <div className='cardDesc'>
        <h2>Details :</h2>
        <br />
        <p> Area: Bashundhara </p>
        <p> Details: 3 bedrooms, 2 washrooms, 2 balcony and a join dining drawing room</p>
        <p> Address: Bashundhara R/A Dhaka 1229 Bangladesh</p>
        <p> Contact through - <Button type="button" class="btnnn btn-primary" className='btn'><Link to=""><i class="fa-solid fa-phone"></i></Link>Call</Button> <Button type="button" class="btnn btn-primary" className='btn'><Link to=""><i className='fab fa-whatsapp'></i></Link>Whats App</Button></p> 
        </div>
<div className='footer'>
<Footer />
</div>
       

           </div>
       
  )
}

export default cardDetails;