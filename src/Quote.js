import { Link } from 'react-router-dom';

const Quote = () => (
  <div className="quote">
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/calculator">Calculator</Link>
      </nav>
      <nav>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
    <h3>“Sometimes the questions are complicated and the answers are simple.” – Dr. Seuss</h3>
  </div>
);

export default Quote;
