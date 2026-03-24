import "./App.css";
import { useState, useEffect } from "react";
import orn from "./images/red-flowers.png";
import flLeft from "./images/top_right_flowers.png";
import flCenter from "./images/top_right_flowers.png";
import heart from "./images/heart.svg";

function App() {
  const [imgScaled, setImgScaled] = useState("");
  const [textVisible, setTextVisible] = useState("");
  const [flowerVisible, setFlowerVisible] = useState("");
  const [rombVisible, setRombVisible] = useState("");
  const [timingVisible, setTimingVisible] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setImgScaled("scaled");
    }, 0);
    setTimeout(() => {
      setTextVisible("visible");
    }, 3000);
    setTimeout(() => {
      setFlowerVisible("visible");
    }, 5000);
    setTimeout(() => {
      setRombVisible("visible");
    }, 6000);
    setTimeout(() => {
      setTimingVisible("visible");
    }, 7000);
  }, []);

  return (
    <div className="App">
      {/* Main picture */}
      <div className="main-picture">
        <img
          src={orn}
          alt="logo"
          className={`logo picture-visible first ${imgScaled}`}
        />
        <div className={`text ${textVisible}`}>
          <div className="guest">
            Любі <div className="guest-name">Дмитро, Тетяна і Сашко!</div>
          </div>
          Від щирого серця ми,
          <div className="bride">
            <div className="taras">Тарас та Марта,</div>
            <div className="and"></div>
            <div className="marta"></div>
          </div>
          запрошуємо вас на наше весілля
          <div>30 травня 2026</div>
          <div><img src={heart} alt="heart" style={{width: "20px"}}/></div>
        </div>
      </div>
      {/* Timing */}
      <div className={`timing`}>
        <div className={`timing-title ${timingVisible}`}>Таймінг весілля</div>
        <div className={`timing-item ${timingVisible}`}>
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
        <div className={`timing-item ${timingVisible}`}>
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
        <div className={`wed-style ${timingVisible}`}>
          <div className={`timing-title ${timingVisible}`}>Стиль весілля</div>
          <div>
            Етнічний стиль нашого весілля — це наша шана традиціям, любов до
            рідної культури, та віра у світле майбутнє
          </div>
        </div>
        <img
          src={flCenter}
          alt="flower"
          className={`flower picture-visible two ${flowerVisible}`}
        />
        <img
          src={flLeft}
          alt="flower"
          className={`flower picture-visible three`}
        />
        <div className={`rombs ${rombVisible}`}></div>
        <div className="rombs-two"></div>
      </div>
    </div>
  );
}

export default App;
