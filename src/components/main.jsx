import React from "react";
import img from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img7 from "../assets/img7.jpeg";
import img6 from "../assets/img6.jpeg";

import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";


const data = [
  {
    id: 1,
    imgsrc: img,
    title: "Taj Mahal",
    location: "Agar, Uttarpradesh",
    price: "500$",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal",
  },
  {
    id: 2,
    imgsrc: img4,
    title: "Anadaman and Nichobar",
    location: "Bay of Bengal",
    price: "3000$",
    description:
      "These islands are known for their pristine beaches, crystal-clear waters, and rich marine life. Radhanagar Beach on Havelock Island is particularly famous for its beauty."
  },
  {
    id: 3,
    imgsrc: img5,
    title: "Ladak ",
    location: "jammu and kashmir",
    price: "900$",
    description:
     "Leh-Ladakh is known for its breathtaking landscapes, rugged mountains, and Buddhist monasteries. It's a haven for adventure enthusiasts with activities like trekking, biking, and river rafting."
  },
  {
    id: 4,
    imgsrc: img3,
    title: "Gate of india",
    location: "Agar, Uttarpradesh",
    price: "500$",
    description:
      "The Gateway of India is an arch monument built during the 20th century in Bombay, India. The monument was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911.",
  },
  {
    id: 5,
    imgsrc: img6,
    title: "Red fort",
    location: "Agar, Uttarpradesh",
    price: "500$",
    description:
     "The Red Fort or Lal Qila is a historic fort in Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1639"
  },
  {
    id: 6,
    imgsrc: img7,
    title: "Goa",
    location: "Goa",
    price: "2000$",
    description:
     "Known for its beautiful beaches, vibrant nightlife, and Portuguese heritage, Goa is a popular destination for relaxation and adventure. Key attractions include Baga Beach, Anjuna Beach, and the historic churches of Old Goa."
  },
  {
    id: 7,
    imgsrc: img8,
    title: "Kerla BackWater",
    location: "Kerla",
    price: "550$",
    description:
      "The Kerala Backwaters offer a serene experience with a network of interconnected canals, rivers, and lakes. Houseboat cruises provide an idyllic way to explore the region's natural beauty."
  },
  {
    id: 8,
    imgsrc: img9,
    title: "Varansi",
    location: "varansi, Uttarpradesh",
    price: "300$",
    description:
     "Varanasi, one of the oldest cities in the world,cities in the world, is a spiritual hub in India. It is famous for its ghats along the Ganges River, where pilgrims perform rituals, and the evening Ganga Aarti."
  },
  
  {
    id: 9,
    imgsrc: img10,
    title: "Jaipur (Pink City)",
    location: "Agar, Uttarpradesh",
    price: "1100$",
    description:
     "Jaipur is known for its vibrant culture, historic forts, palaces, and the unique pink-colored buildings. Key attractions include the Amber Fort, Hawa Mahal, and City Palace."
  }
  ,
  {
    id: 10,
    imgsrc: img2,
    title: "Lonavala",
    location: "Pune, Maharashtra",
    price: "400$",
    description:
     "Lonavala is a popular hill station located in the state of Maharashtra, India. Nestled in the Western Ghats, it is known for its lush green valleys, scenic views, waterfalls, making it a perfect getaway for nature lovers  and bustle of city life."
  }
  , {
    id: 11,
    imgsrc: img11,
    title: "Mysore",
    location: "Karnataka",
    price: "800$",
    description:
     "Mysore is famous for its royal heritage, particularly the magnificent Mysore Palace. The city is also known for its Dussehra festival, which is celebrated with great pomp and show."
  }
  
];
export const Main = () => {
  return (
    <div className="main">
      <div className="title-card">
          <center>
           
            <h3>Most Visited places in this session</h3>
          </center>
        </div>
      <div className="main-content">
        
      
          {data.map(({ id, location, imgsrc, title, price, description }) => {
            return (
            

              <div className="card">
             
                <div className="card-container">
                  <img src={imgsrc} alt="" />
                  <div className="card-content">
                    <h3>{title}</h3>
                    <h3><i class="fa-solid fa-location-dot"></i>{location}</h3>

                    <p>{
                           
                         description.length > 100? description.substring(0,100)+"..." : description
                      }</p>
                    <h2>{price}</h2>
                   <center> <button>Detailes</button></center>
                  </div>
                </div>
              </div>
            );
          })}
      
      </div>
    </div>
  );
};
