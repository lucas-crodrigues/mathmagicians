import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
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
    <h3>Welcome to our page!</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean blandit, erat eget hendrerit gravida, ligula velit aliquet nisi,
      in placerat dui elit bibendum justo.
      Nulla a ipsum blandit, congue lacus in, sagittis mauris.
      Nullam placerat auctor ex. Ut a enim vitae lacus euismod tristique.
      Phasellus nec semper magna, facilisis malesuada purus.
      Morbi tincidunt vel nibh ut vehicula. Etiam vel neque orci.
      Aenean quis enim vel nisl feugiat hendrerit. Maecenas ac faucibus magna.
      Quisque condimentum nibh a eros posuere, fringilla rutrum magna sagittis.
      Praesent eleifend volutpat libero ut mollis. Nam sit amet arcu est.
      Mauris at auctor sapien. Nunc volutpat aliquet facilisis. Morbi a interdum magna.
    </p>
  </div>
);

export default Home;
