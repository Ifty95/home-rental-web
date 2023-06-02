import React from 'react'
import { Link } from 'react-router-dom';


function banner() {
  return (
    <div className="banner" >
        <div className="banner1  container-fluid">
            <p>Now it's much more easier to rent home and get a home. So enlist your home now and get a perfect tanent easily.</p>

            <Link to="./listing"> <button className="btn">Know more</button> </Link> 
        </div>    
    </div>
  );
}

export default banner;