import { Link } from 'react-router-dom';
import Calculator from './components/Calculator';

const App = () => (
  <div className="App">
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
    <h3>Let&apos;s do some math!</h3>
    <Calculator />
  </div>
);

export default App;
