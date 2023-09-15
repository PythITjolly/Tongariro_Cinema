import React from "react";

import "./../Styles/Events.css";

import slide1 from './../Pictures/Movie.jpg';
import slide2 from './../Pictures/Moriarty.jpg';
import slide3 from './../Pictures/Member.jpg';
import slide4 from './../Pictures/Special.jpg';

export default function Events() {
        return (
          <div>
            {/* First row */}
            <section className="Eventsimage">
              <div className="description">
                  <h2>Check out our Featured Movie</h2>
                  <h4> Avatar: The Way of Water</h4>
                  <p>
                    Jake Sully lives with his new found family formed on the extrasolar moon Pandora. <br />Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri <br />and the army of the Na'vi race to protect their home.
                  </p>
                  <a href="./Components/Cart" className="btn btn-primary">
                        Buy Ticket
                  </a>
                <div className="Eventsimage-col">
                  <a href="./Components/Cart"><img src={slide1} alt="Featured Movie" /></a>
                </div>
        
                <div className="description">
                  <h2>Enjoy Moriarty Café</h2>
                  <h4> The only food catering the Tingariro Cinema trusts.</h4>
                  <p>If you want to have a good time and experience true fun in Wellington,<br /> Tongariro Cinemas should be in your radar as we offer not only the best cinema experience <br />but café that offers the best food and a variety of timely fun activity.<br />Keep an eye on this page for updates. </p>
                  <a href="./Components/Moriarty Café" className="btn btn-primary">
                    Reserve Seat
                </a>
                <div className="Eventsimage-col">
                  <a href=""><img src={slide2} alt="Café" /></a>
                </div>
                
                </div>
              </div>
            </section>
      
            <section className="Eventsimage">
            <div className="description">
                <h2>Be One of US!</h2>
                <h4> Become a Member</h4>
                <p>Enjoy amazing benefits and support our community-run cinema. Your loyalty means so much and it's just right that you're rewarded. <br />
            </p>
            <a href="./Components/Rewards" className="btn btn-primary">
          Pre-register
        </a>
                <div className="Eventsimage-col">
                    
                  <a href=""><img src={slide3} alt="Members" /></a>
                </div>
                
                <div className="column"></div>
                <div className="description">
                <h2>
              Monthly Movie Special
            </h2>
            <br />
            <h4> Let's go back in time! </h4>
              <br />
            <p>
            Wanting to see an old all-time favourite movie? <br />Keep an eye on this space and you might be surprised to have the opportunity<br/>to watch one of your favourite movies on the big screen. <br />
            </p>
            <a href="./Components/What's On" className="btn btn-primary">
          Book Now
        </a>

                <div className="Eventsimage-col">
                  <a href=""><img src={slide4} alt="Special" /></a>
                </div>
                
                </div>
              </div>
            </section>
          </div>
        );
      }
      