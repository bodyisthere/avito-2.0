//импорт внешних пакетов
import { FC, useState, useEffect } from "react";

//импорт стилей
import styles from "./CarConditionWImg.module.scss";

//импорт типов

//импорт функционала
import { damaged, damagedData } from "../data/carBody.data";

//импорт компонентов
import { CarConditionCheckbox } from "./CarConditionCheckbox";
import { CarConditionFBLR } from "./CarConditionFBLR";

interface ICarConditionWImg {
  setOption: (key: string, value: any) => void
  optionKey: string
}

interface IActiveSlideCategory {
  title: string,
  points: {id: string, title: string}[],
  id: string,
  class: string,
}

export const CarConditionWImg: FC<ICarConditionWImg> = ( { optionKey, setOption } ) => {
  //активный основной слайд - спереди, сзади и тд...
  const [activeSlide, setActiveSlide] = useState<string>(damaged[0].id);
  //активная позиция слайда - передний бампер, правое зеркало и тд...
  const [activeSlideCategory, setActiveSlideCategory] = useState<IActiveSlideCategory | null>(null);
  const [activeSpans, setActiveSpans] = useState<string[]>([]);

  const [damagedPlaces, setDamagedPlaces] = useState(damagedData);

  const toggleCheckbox = (el: string) => {
    setDamagedPlaces(prev => {
      for(let i = 0; i < prev.length; i++) {
        if(prev[i].id === activeSlide) {
          const prevPosition = prev[i];
          for(let j = 0; j < prevPosition.places.length; j++) {
            if(prevPosition.places[j].id === activeSlideCategory?.id) {
              const prevPositionPlace = prevPosition.places[j];
              //проверка на пустой(null) массив
              if(!prevPositionPlace.points || prevPositionPlace.points === null) {
                prev[i].places[j].points = [el];
                setActiveSpans(prev => {return [...prev, el];});
                return prev;
              }
              if(prevPositionPlace.points?.includes(el)) {
                prev[i].places[j].points = prevPositionPlace.points.filter(e => e !== el);
                setActiveSpans(prev => prev.filter(e => e !== el));
                return prev;
              } else {
                prev[i].places[j].points = [...prevPositionPlace.points, el];
                setActiveSpans(prev => {return [...prev, el];});
                return prev;
              }
            }
          }
        }
      }
      return prev;
    });
    
  };

  useEffect(() => {
    setOption(optionKey, damagedPlaces);
  }, [damagedPlaces]);

  const classConfig = (id: string): string => {
    return `${styles["car-condition-w-img__control-item"]} ${activeSlide === id ? styles["car-condition-w-img__control-item--active"] : ""}`;
  };

  return (
    <div className={styles["car-condition-w-img"]}>
      <div className={styles["car-condition-w-img__slides"]}>
        {
          damaged.map(el => {
            if(el.id === activeSlide) {
              return (
                <CarConditionFBLR 
                  damagedPlaces={damagedPlaces}
                  activeSpans={activeSpans} 
                  data={el} 
                  activeSlideCategory={activeSlideCategory} 
                  setActiveSlideCategory={setActiveSlideCategory} 
                  key={el.id}/>
              );
            }
            return undefined;
          })
        }
      </div>
      <div className={styles["car-condition-w-img__control"]}>
        {
          damaged.map(el => {
            return (
              <button 
                className={classConfig(el.id)} 
                onClick={() => {setActiveSlide(el.id); setActiveSlideCategory(null);}} 
                key={el.id}
              >
                <img src={el.img} alt={el.position} />
                {el.position}
              </button>
            );
          })
        }
      </div>
      <div className={styles["car-condition-w-img__select"]}>
        {
          activeSlideCategory !== null
            ?
            <CarConditionCheckbox 
              data={{title: activeSlideCategory.title, data: activeSlideCategory.points}}
              dataReady={activeSpans}
              changeFunction={toggleCheckbox}
            />
            :
            ""
        }
      </div>
    </div>
  );
};