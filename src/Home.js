import Header from './components/Header';
import Footer from './components/Footer';
import './Page.css';

const Home = () => (
  <div className="home">
    <Header />
    <div
      style={{
        paddingBottom: '20vh',
      }}
    >
      <h3
        style={{
          margin: '4vh 2vw',
          fontSize: '30px',
        }}
      >
        Welcome to our page!
      </h3>
      <p
        style={{
          margin: '4vh 3vw',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent lobortis urna quis metus interdum, sit amet tincidunt quam fringilla.
        Sed interdum est ornare ipsum faucibus, vitae aliquam nibh sodales.
        Aenean vestibulum nisl sit amet nunc aliquet blandit.
        Donec posuere enim et augue varius, eu pulvinar nunc aliquet.
        Nulla id blandit quam. Etiam porta laoreet nisl et laoreet.
        Pellentesque mollis quis ex consequat interdum.
        Morbi sodales lorem non neque consequat molestie.
        Donec finibus felis ut justo scelerisque gravida.
        Integer vel lectus sit amet ipsum pharetra pellentesque.
        <br />
        Nulla nibh lectus, blandit ut sem vitae, consectetur imperdiet erat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec euismod scelerisque odio, at interdum arcu laoreet vitae.
        Duis maximus mauris risus, rhoncus iaculis nibh pretium sit amet.
        Nunc quam libero, porttitor sed turpis id, cursus dictum elit.
        Aenean eu ultricies ligula, in porta dolor.
        Aenean posuere eleifend urna commodo tempor.
        Nulla condimentum leo est, in elementum augue vestibulum nec.
        Vestibulum fringilla vel sem in lobortis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In mattis lobortis augue, vitae blandit est varius eu.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent lobortis urna quis metus interdum, sit amet tincidunt quam fringilla.
        Sed interdum est ornare ipsum faucibus, vitae aliquam nibh sodales.
        Aenean vestibulum nisl sit amet nunc aliquet blandit.
        Donec posuere enim et augue varius, eu pulvinar nunc aliquet.
        Nulla id blandit quam. Etiam porta laoreet nisl et laoreet.
        Pellentesque mollis quis ex consequat interdum.
        Morbi sodales lorem non neque consequat molestie.
        Donec finibus felis ut justo scelerisque gravida.
        Integer vel lectus sit amet ipsum pharetra pellentesque.
        <br />
        Nulla nibh lectus, blandit ut sem vitae, consectetur imperdiet erat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec euismod scelerisque odio, at interdum arcu laoreet vitae.
        Duis maximus mauris risus, rhoncus iaculis nibh pretium sit amet.
        Nunc quam libero, porttitor sed turpis id, cursus dictum elit.
        Aenean eu ultricies ligula, in porta dolor.
        Aenean posuere eleifend urna commodo tempor.
        Nulla condimentum leo est, in elementum augue vestibulum nec.
        Vestibulum fringilla vel sem in lobortis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In mattis lobortis augue, vitae blandit est varius eu.
        <br />
      </p>
    </div>
    <Footer />
  </div>
);

export default Home;
