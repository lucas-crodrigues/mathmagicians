import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import './Page.css';

const App = () => (
  <div className="app">
    <Header />
    <h3
      style={{
        margin: '0 3vw',
        fontSize: '30px',
      }}
    >
      Let&apos;s do some math!
    </h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
      }}
    >
      <div
        style={{
          padding: '0 5vw 5vh 0',
          height: '75vh',
          width: '65vw',
        }}
      >
        <Calculator />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
