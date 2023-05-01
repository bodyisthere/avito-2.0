//импорт внешних пакетов
import { FC, useState } from "react";

//импорт стилей
import styles from "./PaymentBoost.module.scss";

//импорт типов
import { TBoosts } from "../Payment";
import { IAdsBoost } from "../../data/adsBoost.data";
import { TBooster } from "../../data/adsBoost.data";

//импорт функционала
import { adsBoost } from "../../data/adsBoost.data";

//импорт компонентов
import { OnOff, Button } from "../../../../../ui";

interface IPaymentBoostFirst {
  setTotal: React.Dispatch<React.SetStateAction<number>>
  setBoostPackage: React.Dispatch<React.SetStateAction<TBoosts>>
  boostPackage: TBoosts
}

type TMode = 1 | 7

export const PaymentBoostFirst: FC<IPaymentBoostFirst> = ( { setTotal, boostPackage, setBoostPackage } ) => {
  const [ activeBooster, setActiveBooster ] = useState<TBooster | null>(null);

  const [ prices, setPrices ] = useState<{ priceOne: number, priceSeven: number }>({ priceOne: 0, priceSeven: 0 });
  const [ price, setPrice ] = useState<number>(0);
  
  const [ mode, setMode ] = useState<TMode>(1);

  const clickOnXBoost = (boost: IAdsBoost) => {
    if(boost.name === activeBooster) return;
    
    const actualPrice = mode === 7 ? +boost.priceSeven : +boost.priceOne;

    setPrices({ priceOne: +boost.priceOne, priceSeven: +boost.priceSeven });
    setBoostPackage(prev => isBoostActive ? prev : [...prev, "viewBoost"]);
    setActiveBooster(boost.name);
    setPrice(actualPrice);
    setTotal(prev => prev = prev - price + actualPrice);
  };

  const changeMode = (type: TMode) => {
    setMode(type);
    if(!activeBooster) return;

    const priceChange = () => {
      if(type === 7) {
        return prices.priceSeven;
      } else {
        return prices.priceOne;
      }
    };

    const priceActual = priceChange();

    setPrice(prev => {
      prev = priceActual;
      return prev;
    },
    );
    setTotal(prev => prev = prev - price + priceActual);
  };

  const isBoostActive = boostPackage.includes("viewBoost");
  
  const toggleBoost = () => {
    const isActive = isBoostActive;
    setBoostPackage(prev => {
      if(isActive) {
        return prev.filter(el => el !== "viewBoost");
      } else {
        return [...prev, "viewBoost"];
      }
    },
    );
    setTotal(prev => {
      if(isActive) {
        return prev - price;
      } else {
        return prev + price;
      }
    });
  };

  return (
    <div className={styles.boost}>
      <div className={styles.top}>
        <div className={styles.info}>
          <p>Увеличить количество просмотров</p>
          <p>Ваше объявление будет чаще попадать на верхние строчки в поиске и рекомендациях.</p>
        </div>
        <div className={styles.total}>
          <p>{ price } ₽</p>
          <OnOff onChange={toggleBoost} checked={isBoostActive}/>
        </div>
      </div>
      <div className={styles.middle}>
        <Button 
          onClick={() => changeMode(1)} 
          size="small" 
          background="gray" 
          className={mode === 1 ? styles["button--active"] : ""}>
            На 1 день
        </Button>
        <Button 
          onClick={() => changeMode(7)} 
          size="small" 
          background="gray" 
          className={mode === 7 ? styles["button--active"] : ""}>
          На 7 дней
        </Button>
      </div>
      <div className={styles.bottom}>
        {
          adsBoost.map((el, index) => {
            return (
              <div 
                onClick={() => clickOnXBoost(el)}
                key={index} 
                style={{"background": el.background}} 
                className={`${styles["card-boost"]} ${activeBooster === `${el.name}` && isBoostActive ? styles["card-boost--active"] : ""}`}
              >
                <img src={el.img} alt="Дополнительные услуги" />
                <p>{mode === 7 ? el.priceSeven : el.priceOne} ₽</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
