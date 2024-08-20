import React from 'react'
import t1 from "../assets/travel2.mp4"

const Fotter = () => {

  return (
    <div className='Fotter'>

      <div className="main-fotter">
      <video muted autoPlay loop className='background-clip'>
        <source src={t1}></source>
      </video>
      <div className="container-fotter">
        <div className="row-1">
          <h1>Travel</h1>
          <p>As a content writing agency that focuses solely on the travel sector, 
            we know our onions when it comes to travel website content.
             From evergreen web page copy to interactive guides and infographics, 
             we’ve created all kinds of web copy for all kinds of travel companies, 
             including tour operators, travel agencies, 
             airlines, resorts, gastrobars,
              holiday rental companies and travel publications.
               </p>
               <div className="fotter-icon">
               <i className="fa-brands fa-square-twitter"></i>
               <i className="fa-brands fa-facebook"></i>
               <i className="fa-brands fa-instagram"></i>
               <i className="fa-solid fa-phone"></i>
               </div>

        </div>
        <div className="row-chalu">
        <div className="row-2">
          <div className="row-box">
            <ul>
            <h3 >Agency</h3>
           
    
              <li>  Service</li>
              <li>Insurance</li>
              <li>Agency</li>
              <li>Tourism</li>
              <li>Payment</li>
        

            </ul>
          </div>
          <div className="row-box">
            <ul>
              <h3>Partner</h3>
              <li>Banking</li>
              <li>Rental Car</li>
              <li>Health World</li>
              <li>Trivoga</li>
              <li>TripAdvisor</li>

            </ul>
          </div>
          <div className="row-box">
            <ul>
            <h3>Last minutes</h3>
              <li>Europe</li>
              <li>Indonesia</li>
              <li>California</li>
              <li>Maldives</li>
              <li>London</li>

            </ul>
          </div>

          </div>
          {/* <div className="fotter-bottom">
            <center>we are the best travel Agency</center>
          </div> */}
        </div>
       
          
      </div>
     
      </div>


    </div>
  )
}
export default Fotter;