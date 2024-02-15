import _ from "lodash";
import uniqueId from "lodash/uniqueId.js";
import chunk from "lodash/chunk.js";
import cloneDeep from "lodash/cloneDeep.js";
import { useTranslation } from "react-i18next";
import i18n, { changeLanguage } from "i18next";
import { useSpring, animated } from "@react-spring/web";
// import { useSpring, animated } from "@react-spring/web";

function App() {
  // console.log(_.uniqueId())
  // console.log(uniqueId())

  // CHUNK Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
  // const arr = [1, 2, 3, 4, 5]
  // console.log(chunk(arr, 2))

  // // cloneDeep
  // const obj1 = {key: {key2: 2}}
  // const obj2 = cloneDeep(obj1)
  // console.log(obj1, obj2)

  // // random

  // const getRandomInRange = (min = 0, max = 100) => {
  //   return Math.floor(min + Math.random() * (max-min+1));
  // };

  // console.log(getRandomInRange())

  const item1 = uniqueId("item-");
  const item2 = uniqueId("item-");

  console.log(item1);

  const { t, i18n } = useTranslation();

  const changeLanguageToRU = () => {
    i18n.changeLanguage("ru");
  };

  const changeLanguageToEN = () => {
    i18n.changeLanguage("en");
  };

  const spring = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    // delay: 555
    config: {duration: 3000}
  });
  return (
    <>
      <header>
        <a href="#">{t("linkToHome")}</a>
        <button>{t("regButtonText")}</button>
        <animated.button style={{ ...spring }} onClick={changeLanguageToRU}>
          {t("changeLanguageButtonRU")}
        </animated.button>
        <animated.button style={{ ...spring }} onClick={changeLanguageToEN}>
          {t("changeLanguageButtonEN")}
        </animated.button>
      </header>
      <p>{t("text")}</p>
      <div className={item1}>1</div>
      <div className={item2}>2</div>
    </>
  );
}

export default App;
