import React from "react";
import Header from './Components/Header';
import cityData from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Area  from "./Components/hotArea";
import NewArea from "./Components/newArea";
import record from './records.json';
import './Components/component.css';
import Search from "./Components/search";
import Banner from "./Components/banner";
import Footer from "./Components/footer";

function Main(){

    let items = [];

    items = record.map((item , key) => <Area image={item.icon} title={item.caption} desc1={item.text1} desc2={item.text2} />);


    return <div>   
      <body className="containerMain">
      <Header /> 
      <div className="searching">
            <Search data={cityData} />
      </div>
      <div className="section1">
        {items};
      </div>
      <div className="section2">
         <NewArea />
      </div>
      <div className="section3">
         <Banner />
      </div>
     <footer className="footer">
          <Footer />
     </footer>
      </body>
      
    </div>
 
}
export default Main;