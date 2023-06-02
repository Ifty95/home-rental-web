import React from 'react'
import "../Components/faq.css"
import Header from "./Header";
import Footer from "./footer";

function faq() {

    return (

        <div>
            <Header />
            <h1 className="faq-heading">FAQ'S</h1>
            <section className="faq-container">

                <div className="faq-one">

                    <h1 className="faq-page"> What is RentIT? </h1>

                    <div className="faq-body">
                        <p>RentIT is a dedicated rental portal in Bangladesh.
                            It’s a platform where tenant can get his required
                            residential or commercial properties within his
                            preferred areas, time frame & budget. By the by
                            property owner rent out his space without any hassle.
                            Our objective is very clear ‘make simple and hassle free’.</p>
                    </div>
                </div>
                <hr className="hr-line" />


                <div className="faq-two">

                    <h1 className="faq-page"> How it works? </h1>
                    <div className="faq-body">
                        <p>Through PropTech (property technology) we manage our
                            property inventory and try to serve prospect tenants requirements.</p>
                    </div>
                </div>
                <hr className="hr-line" />


                <div className="faq-three">
                    <h1 className="faq-page"> What services available on Rents? </h1>


                    <div className="faq-body">
                        <p>We provide all rental solution, e.i Residential apartment,
                            Furnished apartment, Service apartment, Commercial space
                            and full building searching, arrange property viewing,
                            price negotiation and helps to prepare rental agreement
                            for owner and tenant.</p>
                    </div>
                </div>
                <hr className="hr-line" />

                <div className="faq-four">
                    <h1 className="faq-page">How do I place my requirements?</h1>
                    <div className="faq-body">
                        <p>Very simple…. just visit our web portal, search
                            properties in your required areas and place it
                            through whatsapp, email or direct call.</p>
                    </div>
                </div>
                <hr className="hr-line" />

                <div className="faq-five">
                    <h1 className="faq-page"> Should I pay any fees? </h1>
                    <div className="faq-body">
                        <p>Our system does not allow to take any fees
                            from tenant.</p>
                    </div>
                </div>
                <hr className="hr-line" />

                <div className="faq-six">
                    <h1 className="faq-page"> Which area RentIT cover in Bangladesh?</h1>
                    <div className="faq-body">
                        <p>Right now RentIT team cover only Dhaka Zone.</p>
                    </div>
                </div>



            </section>
            <div className='footer'>
                <Footer />
            </div>
            {/* <script src="main.js"></script> */}

        </div>
    )
}

export default faq



