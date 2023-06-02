import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./component.css";

function search({ data }) {

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.names.toLowerCase().includes(searchWord.toLowerCase());
    })
    if (searchWord == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

  }
  return (
    <div>
      <div className="searchbar">
        <h1 className="typed-out">Find  Your  Fresh  Start ......</h1>
        <div className="search-input">
          <input type="text" placeholder="Find your area .." className="search" onChange={handleFilter} />

        </div>

        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <div className="city"><Link to="/allProperties"> {value.names} </Link></div>
              );
            })}
          </div>
        )}

      </div>
      <div className="heading">
        <p>Exclusive Areas</p>
      </div>
    </div>
  )
}

export default search;