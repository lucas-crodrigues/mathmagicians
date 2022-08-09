import Header from './components/Header';
import Footer from './components/Footer';
import './Page.css';

const Quote = () => (
  <div className="quote">
    <Header />
    <h3
      style={{
        margin: '4vh 2vw',
        fontSize: '40px',
        paddingBottom: '30vh',
      }}
    >
      “Sometimes the questions are complicated and the answers are simple.” – Dr. Seuss
    </h3>
    <Footer />
  </div>
);

export default Quote;
