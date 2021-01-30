import image1 from "./images/image1.png";
import image2 from "./images/image4.png";
import haz1 from "./images/haz1.png";
import haz2 from "./images/haz2.png";
import haz3 from "./images/haz3.jpg";
import tune1 from "./media/tune1.mp3";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="headerBox">
        <img src={image1} className="image1" alt="logo" />
      </header>
      <div className="textBox">
        <p>
          Ready for a birthday tune? Pump up the volume and play these surprise
          tracks.
        </p>
      </div>
      <div className="hazImages">
        <div className="thumbnails">
          <img src={haz1} className="haz" alt="logo" />
          <audio controls src={tune1} className="audio">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
        <div className="thumbnails">
          <img src={haz2} className="haz" alt="logo" />
          <audio controls src={tune1} className="audio">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
        <div className="thumbnails">
          <img src={haz3} className="haz" alt="logo" />
          <audio controls src={tune1} className="audio">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      </div>
      <footer className="footerBox">
        <p className="textBox">
          Wishing you a very happy and hustlin' 30th birthday, Haz!
        </p>
        <img src={image2} className="image2" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
