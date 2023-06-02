import React from "react";
import { Link } from "react-router-dom";
import "./component.css";

function area(props) {

return <div className="container">
       <div className="row">
     
            <div className="col">      
               <Link to="/allProperties"><img src={props.image} alt="" /></Link>  
                  <span className="bodyPart">
                        <h4>{props.title}</h4>
                        <p>{props.desc1}</p>
                        <p>{props.desc2}</p>
                   </span>
            </div> 
      </div>
      </div>  
}

export default area;