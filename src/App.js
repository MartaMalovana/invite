import "./App.css";
import { useState, useEffect } from "react";
import orn from "./images/white-flow.png";
import flLeft from "./images/flower_center.png";
import flCenter from "./images/flower_left.png";

function App() {
  // const [modalIsOpen, setModalIsOpen] = useState(true);
  // const [imgStyle, setImgStyle] = useState("img-visible");
  // const [pictureStyle, setPictureStyle] = useState("picture-hidden");
  // const [textStyle, setTextStyle] = useState("");
  // const [butterflyMove, setButterflyMove] = useState("");
  const [imgScaled, setImgScaled] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setImgScaled("scaled");
    }, 0);
  }, []);

  // const handleHideModal = () => {
  //   setImgStyle("img-modified");
  //   setTimeout(() => setModalIsOpen(false), 2000);
  // };

  return (
    <div className="App">
      {/* Main picture */}
      <div className="main-picture">
        <img src={orn} alt="logo" className={`logo picture-visible first ${imgScaled}`} />
        <div className={`text visible`}>
          <div className="guest">
            Любі <div className="guest-name">Дмитро, Тетяна і Сашко!</div>
          </div>
          Від щирого серця ми,
          <div className="bride">
            <div className="taras">Тарас та Марта,</div>
            <div className="and"></div>
            <div className="marta"></div>
          </div>
          запрошуємо вас на наше весілля!
          <div>30 травня 2026</div>
        </div>

        <div></div>
      </div>
      {/* Timing */}
      <div className="timing">
        <div className="timing-title">Таймінг весілля</div>
        <div className="timing-item">
          <div className="time">11:00</div>
          <div>Вінчання</div>
          <div>Церква Св. Петра і Павла, </div>
          <div>вул.Львівська, Зимна Вода</div>
          <button>
            <a
              href="https://maps.app.goo.gl/K9gsUFfQKRnWMBAV6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Дивитись на мапі
            </a>
          </button>
        </div>
        <div className="timing-item">
          <div className="time">15:00</div>
          <div>Церемонія одруження. Бенкет</div>
          <div>Meat Club,</div>
          <div>вул.Городоцька 12, Зимна Вода</div>
          <button>
            <a
              href="https://maps.app.goo.gl/AHbYqrJPzfic9Y6k9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Дивитись на мапі
            </a>
          </button>
        </div>
        <img src={flCenter} alt="logo" className={`logo picture-visible two ${imgScaled}`} />
        <img src={flLeft} alt="logo" className={`logo picture-visible three`} />
      </div>
    </div>
  );
}

export default App;
