import "./App.css";
import { useState, useEffect } from "react";
import orn from "./images/red-flow.jpg";
import Calendar from "react-calendar";
import letter from "./images/letter.png";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [imgStyle, setImgStyle] = useState("img-visible");
  const [pictureStyle, setPictureStyle] = useState("picture-hidden");
  const [textStyle, setTextStyle] = useState("");
  const [butterflyMove, setButterflyMove] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setPictureStyle("picture-visible");
    }, 3000);
    setTimeout(() => {
      setTextStyle("visible");
    }, 6000);
    setTimeout(() => {
      setButterflyMove("move");
    }, 4000);
  }, []);

  const handleHideModal = () => {
    setImgStyle("img-modified");
    setTimeout(() => setModalIsOpen(false), 2000);
  };

  return (
    <div className="App">
      {modalIsOpen ? (
        <div className={"modal"} onClick={handleHideModal}>
          <img src={letter} className={imgStyle} alt="letter"/>
        </div>
      ) : (
        <>
          {/* Main picture */}
          <div className="main-picture">
            <img src={orn} alt="logo" className={`logo ${pictureStyle}`} />
            <div className={`text ${textStyle}`}>
              <div className="guest">
                Любі <div className="guest-name">Дмитро, Тетяна і Сашко!</div>
              </div>
              Від щирого серця ми,
              <div className="bride">
                <div className="taras">Тарас</div>
                <div className="and">та</div>
                <div className="marta">Марта,</div>
              </div>
              запрошуємо вас на наше весілля!
            </div>
            <div></div>
          </div>
          {/* Calendar */}
          <div className="calendar">
            <div className={`calendar-title ${butterflyMove}`}>
              Травень 2026
            </div>
            <Calendar
              defaultValue={new Date(2026, 4, 30)}
              tileClassName="wedding-day"
              showNavigation={false}
            />
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
          </div>
          {/* Dress code */}
          <div className="dress">
            <div className="dress-title">Dress Code</div>
            <div className="dress-text">
              Друзі! У цей складний час наша країна захищає не тільки землю
              предків, але й нашу багатогранну самобутню культуру. Ми вирішили,
              що наше весілля матиме етнічну родзинку. Але дрес-коду немає.
              Найважливіше для нас - ваша присутність!
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

