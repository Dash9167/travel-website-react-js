import React, { useState } from "react";
import v1 from "../assets/travel1.mp4";
const Home = () => {
  const [value, setvalue] = useState(2000);
  const rangevalue = (event) => {
    setvalue(event.target.value);
  };
  return (
    <div className="home-home">
      <div className="home">
        <video muted autoPlay loop>
          <source src={v1}></source>
        </video>
        <div className="container">
          <span>Our Pakages</span>
          <h1>Search Your Holiday Location</h1>

          <div className="content">
            <div className="box">
              <label htmlFor=""> Destinition</label>
              <br />
              <input type="text" />
            </div>
            <div className="box">
              <label htmlFor="">Enter Date</label>
              <br />
              <input type="date" />
            </div>
            <div className="box">
              <label htmlFor="ragnevalue">Price {value}$</label>
              <br />
              <input
              id="ragnevalue"
                type="range"
                max="5000"
                min="100"
                value={value}
                onChange={rangevalue}
              />
            </div>
          </div>
          <button>search</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
