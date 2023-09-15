import hero1 from "./../Pictures/Movie.jpg";

import { Link as RouterLink } from "react-router-dom";
import "./../Styles/Homepage.css";



const Homepage = (props) =>{
  return (
    <>
    <section className="Section1-Home">
        <div className="Container-Card-Home">
          <h4 className="tagline">
          Experience an ultimate cinema destination where every visit feels like an opening day.
          </h4>
          </div>
      </section>
    <section className="Section2-Home">
        <div className="slider">
          {[ 
            {img: hero1, buttonHref: '/Movies'},
          ].map((item, index) => (
            <div className="item" key={index} interval={index === 0 ? 2000 : 500}>
              <RouterLink to={item.buttonHref}>
                <img
                  className="d-block w-100 HeroImg"
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                />
              </RouterLink>
              <div className='description'>
                <p>Jake Sully lives with his new found family formed on the extrasolar moon Pandora. <br />Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri <br />and the army of the Na'vi race to protect their home.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
 
  );
}
export default Homepage;
