import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$11.99',
    description: `A renowned Greek salad featuring crisp lettuce, peppers, olives, and our special Chicago-style feta cheese, accompanied by crispy garlic and rosemary-infused croutons.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$4.99',
    description: `Our Bruschetta comprises grilled bread adorned with garlic, sprinkled with salt, and drizzled with olive oil.`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$4.99',
    description: `This recipe is directly from grandma's cookbook, with each ingredient carefully selected to maintain its authenticity.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};

export default WeekSpecials;
