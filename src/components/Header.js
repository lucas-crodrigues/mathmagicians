import { Link } from 'react-router-dom';

const Header = () => (
  <header
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <h1
      style={{
        marginLeft: '2vw',
      }}
    >
      Math Magicians
    </h1>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '25vw',
      }}
    >
      <nav
        style={{
          cursor: 'pointer',
        }}
      >
        <Link to="/">Home</Link>
      </nav>
      <nav
        style={{
          cursor: 'pointer',
        }}
      >
        <Link to="/calculator">Calculator</Link>
      </nav>
      <nav
        style={{
          cursor: 'pointer',
        }}
      >
        <Link to="/quote">Quote</Link>
      </nav>
    </div>
  </header>
);

export default Header;
