import Header from './components/Header';
import Footer from './components/Footer';

const Home = () => (
  <div
    className="home"
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Header />
    <div>
      <h3
        style={{
          margin: '4vh 2vw',
        }}
      >
        Welcome to our page!
      </h3>
      <p
        style={{
          margin: '4vh 2vw',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenean blandit, erat eget hendrerit gravida, ligula velit aliquet nisi,
        in placerat dui elit bibendum justo.
        Nulla a ipsum blandit, congue lacus in, sagittis mauris.
        Nullam placerat auctor ex. Ut a enim vitae lacus euismod tristique.
        Phasellus nec semper magna, facilisis malesuada purus.
        Morbi tincidunt vel nibh ut vehicula. Etiam vel neque orci.
        <br />
        Aenean quis enim vel nisl feugiat hendrerit. Maecenas ac faucibus magna.
        Quisque condimentum nibh a eros posuere, fringilla rutrum magna sagittis.
        Praesent eleifend volutpat libero ut mollis. Nam sit amet arcu est.
        Mauris at auctor sapien. Nunc volutpat aliquet facilisis. Morbi a interdum magna.
      </p>
    </div>
    <Footer />
  </div>
);

export default Home;
