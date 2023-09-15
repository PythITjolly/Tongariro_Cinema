import React from 'react';
import './../Styles/Movies.css';

// images for Movies
import Img1 from './../Pictures/5.jpg';
import Img2 from './../Pictures/31.jpeg';
import Img3 from './../Pictures/32.jpg';
import Img4 from './../Pictures/10.jpg';
import Img5 from './../Pictures/35.jpg';


const CardComponent = () => {
  return (
    <section className='Showing'>
           <h1>NOW SHOWING</h1>
    <div className='movie-type'>
    <div className="card" style={{ width: '18rem' }}>
      <img className="Card-img-top" src={Img1} alt="Avatar"  />
      <div className="card-body">
        <h4 className="card-title"> AVATAR</h4>
        
    <div className='card-description'>
        <p>The Way of Water follows the journey of Jake Sully and Neytiri's newfound family of children. </p>
        </div>
        <p className="card-text">
                Action | Fantasy <br/>
                Director: James Cameron <br/>
                Casts: Sam Worthington, Zoe Saldaña <br/>
                Duration: 3h 12m
        </p>
        <a href="./Components/Cart" className="btn btn-primary">
          Buy Ticket
        </a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
      <img className="Card-img-top" src={Img2} alt="Avatar"  />
      <div className="card-body">
        <h5 className="card-title">THE WHALE</h5>
    <div className='card-description'>
        <p>is a powerful and inspirational story about family, friends and the challenges we face while navigating this ever-changing and complicated world. </p>
        </div>
        <p className="card-text">
        Drama <br />
        Director: Darren Aronofsky <br />
        Casts: Brendan Fraser, Sadie Sink <br />
        Duration: 1h 56m
        </p>
        <a href="./Components/Cart" className="btn btn-primary">
          Buy Ticket
        </a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
      <img className="Card-img-top" src={Img3} alt="Jumanji"  />
      <div className="card-body">
        <h4 className="card-title"> JUMANJI</h4>
    <div className='card-description'>
        <p>Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game. </p>
        </div>
        <p className="card-text">
            Action | Adventure | Comedy <br />
            Director: Jake Kasdan <br />
            Casts: Dwayne Johnson, Karen Gillan, Kevin Hart <br />
            Duration: 3h 12m
        </p>
        <a href="./Components/Cart" className="btn btn-primary">
          Buy Ticket
        </a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
      <img className="Card-img-top" src={Img4} alt="Babylon"  />
      <div className="card-body">
        <h4 className="card-title"> BABYLON</h4>
    <div className='card-description'>
        <p>A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood. </p>
        </div>
        <p className="card-text">
            Comedy | Drama | History <br />
            Director: Damien Chazelle <br />
            Casts: Brad Pitt, Margot Robbie, Jean Smart <br />
            Duration: 3h 12m
        </p>
        <a href="./Components/Cart" className="btn btn-primary">
          Buy Ticket
        </a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
      <img className="Card-img-top" src={Img5} alt="Everything, Everywhere, All at Once"  />
      <div className="card-body">
        <h4 className="card-title"> EVERYTHING, EVERYWHERE ALL AT ONCE</h4>
    <div className='card-description'>
        <p>A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led. </p>
        </div>
        <p className="card-text">
            Adventure | Action <br />
            Director: Daniel Kwan <br />
            Casts: Michelle Yeoh, Ke Huy Quan <br />
            Duration: 2h 20m
        </p>
        <a href="./Components/Cart" className="btn btn-primary">
          Buy Ticket
        </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CardComponent;
