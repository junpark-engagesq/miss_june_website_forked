import './App.css';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import Watch from './Watch/Watch.js';
import Merch from './Merch/Merch.js';
import Shows from './Shows/Shows.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Watch />
      <Merch />
      <Shows />
      <About />
      <Contact />
    </div>
  );
}

export default App;
