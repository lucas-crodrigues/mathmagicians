import { Link } from 'react-router-dom';

const Header = () => (
  <header
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '4vh 2vw',
      backgroundColor: 'lightgray',
      borderBottom: '1px solid gray',
    }}
  >
    <h1
      style={{
        fontSize: '40px',
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
          fontSize: '20px',
        }}
      >
        <Link to="/">Home</Link>
      </nav>
      <div
        style={{
          borderLeft: '1px solid gray',
          height: '5vh',
        }}
      />
      <nav
        style={{
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        <Link to="/calculator">Calculator</Link>
      </nav>
      <div
        style={{
          borderLeft: '1px solid gray',
          height: '5vh',
        }}
      />
      <nav
        style={{
          cursor: 'pointer',
          fontSize: '20px',
        }}
      >
        <Link to="/quote">Quote</Link>
      </nav>
    </div>
  </header>
);

export default Header;
