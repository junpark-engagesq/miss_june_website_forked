import './App.css';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Watch from './Watch/Watch.js';
import Merch from './Merch/Merch.js';
import Tour from './Tour/Tour.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Watch />
      <Merch />
      <Tour />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
