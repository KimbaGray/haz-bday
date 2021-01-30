import image1 from "./images/image1.png";
import image2 from "./images/image4.png";
import haz1 from "./images/haz1.jpeg";
import haz2 from "./images/haz2.jpg";
import haz3 from "./images/haz3.jpg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="headerBox">
        <img src={image1} className="image1" alt="logo" />
      </header>
      <div className="textBox">
        <p>
          Looking for a birthday tune? Pump up the volume and play one of these
          surprise tracks.
        </p>
      </div>
      <p className="hazImages">
        <img src={haz1} className="haz" alt="logo" />
        <img src={haz2} className="haz" alt="logo" />
        <img src={haz3} className="haz" alt="logo" />
      </p>
      <footer className="footerBox">
        <p>Wishing you a very happy and hustlin' 30th birthday, Haz!</p>
        <img src={image2} className="image2" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
