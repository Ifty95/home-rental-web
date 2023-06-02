import React from 'react';
import Header from './Components/Header';
import Footer from './Components/footer';
import PropertyCard from './Components/propertyCard';
import './Components/component.css';


function allProperties() {

  return (
    <div>

      <div>
        <Header />
      </div>
      <div>
        <PropertyCard />
      </div>
      <div className="footer">
        <Footer />
      </div>

    </div>
  )
}

export default allProperties;