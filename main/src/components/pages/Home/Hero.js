import { Link } from 'react-router-dom';
import restaurantFoodImage from './assets/restaurant-food.jpg';
import './Hero.css';
import pages from '../../../utils/pages';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
          <Link className="button-primary" to={pages.get('bookings').path}>
            Reserve a table
          </Link>
        </div>
        <img
          className="hero-image"
          src={restaurantFoodImage}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};

export default Hero;
