import React, { useState, useEffect } from 'react';
import data from './allPropertyData';
import { Link } from "react-router-dom";
import "./component.css";
import "./properties.css";
import { Button } from '@mui/material';

function propertyCard() {
   const [filter, setFilter] = useState('');
   const [value, setValue] = useState();
   const [value2, setValue2] = useState();
   const [value3, setValue3] = useState();
   const [filterData, setFilterData] = useState();

   let apartmentData = [];

   const fetchData = async () => {
      try {
         const res = await fetch('http://localhost:4000/apartment/all');
         const response = await res.json();
         console.log(response.data);
         apartmentData = response.data;
         console.log(apartmentData);
      } catch (error) {
         console.log(error);
      }
   }

   //    useEffect( ()=>{
   //       fetch('http://localhost:4000/apartment')
   //       .then(res => res.json())
   //       .then(datas =>{ 

   //           setFilterData(datas)
   //           console.log(datas);
   //       });
   //   }, [])

   const searchArea = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value);
   }

   const searchDis = (e) => {
      console.log(e.target.value)
      setValue(e.target.value);
   }

   const selectMin = (e) => {
      console.log(e.target.value)
      setValue2(e.target.value);
   }

   const selectMax = (e) => {
      console.log(e.target.value)
      setValue3(e.target.value);
   }


   useEffect(()=>{
      fetchData();
   }, [])

   
   useEffect(() => {
      // fetchData();
      const fData = data.proertyData.filter((item) => {
         const d = (item.desc === value || value === undefined);
         const max = (item.price <= value3 || value3 === undefined);
         const min = (item.price >= value2 || value2 === undefined);
         const are = (item.address.toLowerCase().includes(filter.toLowerCase()) || filter === '');
         return (d && max && min && are)
      })
      setFilterData(fData)
      // console.log(apartmentData);
   }, [filter, value, value2, value3])


   return (
      <section className="py-4 containerProperty">

         <div className='searchContainer'>
            <div className="dropdown1">
               <h6>Division</h6>
               <select value={value} onChange={searchDis}>
                  <option selected value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Mymensingh">Mymensingh</option>
               </select>
            </div>

            <div className='area'>
               <h6>Area</h6>
               <input type="text" placeholder="Area" value={filter} onChange={searchArea} />
            </div>

            <div className="dropdown2">
               <h6>Min Price</h6>
               <select onClick={selectMin}>
                  <option selected value={5000}>5000</option>
                  <option value={10000}>10000</option>
                  <option value={15000}>15000</option>
                  <option value={20000}>20000</option>
                  <option value={25000}>25000</option>
               </select>
            </div>

            <div className="dropdown3">
               <h6>Max Price</h6>
               <select onClick={selectMax}>
                  <option selected value={10000}>10000</option>
                  <option value={20000}>20000</option>
                  <option value={25000}>25000</option>
                  <option value={30000}>30000</option>
                  <option value={35000}>35000</option>
                  <option value={40000}>40000</option>
                  <option value={45000}>45000</option>
                  <option value={50000}>50000</option>
               </select>
            </div>

         </div>

         <div className="rowProperty justify-content-center">

            {filterData && filterData.map((item, index) => {
               return (
                  <div className="colProperty">
                     <div className='cardProperty h-100 shadow'>
                        <Link to="/cardDetails">
                           <img src={item.img} alt="" style={
                              {
                                 height: "200px",
                                 width: "300px"
                              }
                           } />
                        </Link>

                        <span className="bodyPart">
                           <p>Rent: {item.price}</p>
                           <p>Division:{item.desc}</p>
                           <p>Address:{item.address}</p>
                           <p>Area Size:{item.area} , Total Room:{item.totalRoom}</p>
                           <br></br>
                           <a href='#'>Please click on the picture for more details and on whatsApp to contact...</a>
                           <br />
                           <div className='icon'><i class="fa-duotone fa-garage"></i></div>
                           <Button type="button" class="btnn btn-primary" className='btn'><a href='https://wa.me/+8801779118157'><i className='fab fa-whatsapp'>Whats App</i></a></Button>

                        </span>
                     </div>
                  </div>
               )
            })}

         </div>
      </section>
   )
}

export default propertyCard;