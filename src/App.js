import "./App.css";
import { useState, useEffect } from "react";
import flLeft from "./images/top_right_flowers-o.png";
import heart from "./images/heart.svg";
import topleft from "./images/topleft2-o.png";
import topcenter from "./images/topcenter2-o.png";
import topright from "./images/topright2-o.png";
import bottomleft from "./images/bottomleft-o.png";
import bottomcenter from "./images/bottomcenter-o.png";
import bottomright from "./images/bottomright-o.png";
import centerlf from "./images/center-fl-o.png";
import guestList from "./guests.json";

function App() {
  const [textVisible, setTextVisible] = useState("");
  const [flowerVisible, setFlowerVisible] = useState("");
  const [timingVisible, setTimingVisible] = useState("");
  const [topleftFl, setTopleftFl] = useState("");
  const [topCenterFl, setTopCenterFl] = useState("");
  const [topRightFl, setTopRightFl] = useState("");
  const [bottomLeftFl, setBottomLeftFl] = useState("");
  const [bottomCenterFl, setBottomCenterFl] = useState("");
  const [bottomRightFl, setBottomRightFl] = useState("");
  const [greetingWord, setGreetingWord] = useState("Любі");
  const [guestName, setGuestName] = useState("друзі");
  const [you, setYou] = useState("вас");

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("i");
    const guestData = guestList.find((g) => String(g.id) === String(id));
    if (guestData) {
      setGreetingWord(guestData.greeting);
      setGuestName(guestData.name);
      setYou(guestData.you);
    }

    setTimeout(() => {
      setTopleftFl("scaled");
    }, 0);
    setTimeout(() => {
      setTopCenterFl("scaled");
    }, 1500);
    setTimeout(() => {
      setTopRightFl("scaled");
    }, 2500);
    setTimeout(() => {
      setBottomRightFl("scaled");
    }, 3500);
    setTimeout(() => {
      setBottomCenterFl("scaled");
    }, 4500);
    setTimeout(() => {
      setBottomLeftFl("scaled");
    }, 5500);
    setTimeout(() => {
      setTextVisible("visible");
    }, 6500);
    setTimeout(() => {
      setFlowerVisible("visible");
    }, 7000);
    setTimeout(() => {
      setTimingVisible("visible");
    }, 7500);
  }, []);

  return (
    <div className="App">
      {/* Main picture */}
      <div className="main-picture">
        <img src={centerlf} alt="logo" className={`logo `} />

        <img
          src={topleft}
          className={`fl-main fl-top-left ${topleftFl}`}
          alt="flower"
        />
        <img
          src={topcenter}
          className={`fl-main fl-top-center ${topCenterFl}`}
          alt="flower"
        />
        <img
          src={topright}
          className={`fl-main fl-top-right ${topRightFl}`}
          alt="flower"
        />
        <img
          src={bottomleft}
          className={`fl-main fl-b-left ${bottomLeftFl}`}
          alt="flower"
        />
        <img
          src={bottomcenter}
          className={`fl-main fl-b-center ${bottomCenterFl}`}
          alt="flower"
        />
        <img
          src={bottomright}
          className={`fl-main fl-b-right ${bottomRightFl}`}
          alt="flower"
        />
        <div className={`text ${textVisible}`}>
          <div className="guest">
            {greetingWord} <div className="guest-name">{guestName}!</div>
          </div>
          Від щирого серця ми,
          <div className="bride">Тарас та Марта,</div>
          запрошуємо {you} на наше весілля
          <div>30 травня 2026</div>
          <div>
            <img src={heart} alt="heart" style={{ width: "20px" }} />
          </div>
        </div>
      </div>
      {/* Rombs */}
      <div className="flex-c">
        <div className="rombs-middle rombs-2"></div>
        <div className="rombs-middle"></div>
        <div className="rombs-middle rombs-2"></div>
      </div>
      {/* Timing */}
      <div className={`timing`}>
        <div className={`timing-title ${timingVisible}`}>Таймінг весілля</div>
        <div className={`timing-item ${timingVisible}`}>
          <div className="time">14:00</div>
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
            Етнічний стиль нашого весілля — це наша любов до рідної культури та
            шана традиціям
          </div>
        </div>
        <img
          src={topright}
          alt="flower"
          className={`flower picture-visible two ${flowerVisible}`}
        />
        <img
          src={flLeft}
          alt="flower"
          className={`flower picture-visible three`}
        />
      </div>
    </div>
  );
}

export default App;
