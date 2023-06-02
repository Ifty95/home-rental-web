import React from 'react'
import "../Components/aboutUs.css"
import ifty from "./Images/ifty.jpg"
import shorna from "./Images/1shorna.jpeg"
import Header from "./Header";
import Footer from "./footer"

function aboutUs() {
    return (
        <div>
            <Header />
            <div className="about-section">
                <h1>About Us </h1>

                <p>We believe finding your new apartment is more than just a move. A step forward. A new beginning. Whether you’re moving across the country or across the street, you deserve to love where you land.
<br></br>
But today’s rental experience is broken. It’s outdated, exhausting, and slow. We spend hours of our lives searching just to settle for places that don’t feel like home. The nightmare ends now.
<br></br>  <b> RentIT</b> is on a mission to change the way you rent, forever. To make it easier, faster, and more human. By making this vision a reality, we’re creating opportunity for everyone to live better—from one fresh start to the next.</p>
            </div>
            <br></br>

           <div className='hedu'> <h1>Our Team</h1> </div> <br></br>
            <div className="rowabout">

                <div className="columnAbout">
                    <div className="cardAbout_about">
                        <img src={ifty} style={
                            {
                                height: "370px",
                                width: "370px"
                            }} />

                        <div className="container_about">
                            <h3>Fahmida Ahmed</h3>
                            <p className="title">Student</p>
                            <p>CSE, CUET</p>
                            <p>Enthusiastic to learn new things and acquire knowledge.</p>
                            <p>Email: u1804095@student.cuet.ac.bd</p>

                        </div>
                    </div>
                </div>
                <div className="columnAbout">
                    <div className="cardAbout_about">

                        <img src={shorna} style={
                            {
                                height: "370px",
                                width: "370px"
                            }} />

                        <div className="container_about" >
                            <h3>Tabassum Ferdous</h3>
                            <p className="title">Student</p>
                            <p>CSE, CUET</p>
                            <p>Love to explore new things and learn from them. </p>
                            <p>Email: u1804082@student.cuet.ac.bd</p>

                        </div>

                    </div>
                </div>



            </div>
            <div className='footer'>
                <Footer />
            </div>

        </div>
    )
}

export default aboutUs;