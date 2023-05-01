import { IAdsTemplate } from "../types/IAdsTemplate";

import { 
  generateAutoNew,
  generateAutoRun,

  generateBoatsAndYachts, 
  generateJetSkis, 
  generateMotorboatsAndMotors,
  generateRowingBoats, 

  generateATVsAndBuggies, 
  generateAllTerrainVehicle, 
  generateKarting, 
  generateMopenAndScooter,  
  generateMotorcycles, 
  generateSnowmobiles, 

  generateBus, generateAgriculturalMachinery,
  generateAttachments, generateBulldozers,
  generateConstructionEngineering, generateExcavators,
  generateLightCommercialVehicles,generateLoaders,
  generateLoggingEq, generateMotorhome,
  generateMunicipalEq, generateOther, 
  generateTractors, generateTrailers,
  generateTruckCrane, generateTrucks,

  generateSparePartsAndAccessories,
} from "../components/generate/Transport"; 

interface ICategory {
  key: string[]
  generateFunction: () => IAdsTemplate[]
  customForm?: {
    [key: string]: any
  }
}

export const categories: ICategory[] = [
  {
    key: ["Транспорт", "Автомобили", "С пробегом"],
    generateFunction: generateAutoRun,
    customForm: {
      additional: {
        powerSteering: null,
        climatControl: {select: null, checkbox: null},
        salon: {select: null, checkbox: null},
        heating: null,
        powerWindows: null,
        electricDrive: null,
        settingsMemory: null,
        drivingAssistance: null,
        antiThiefSystem: null,
        airbags: null,
        activeSafety:  null,
        multimedia: null,
        audioSystem: {select: null, checkbox: null},
        headlights: {select: null, checkbox: null},
        tiresWheels: {select: null, checkbox: null},
      },
      carBody: [
        {
          position: "спереди", 
          id: "cef1a2ea-8467-41b1-8434-eaa09bf315da",
          places: [
            {title: "Крыша", id: "2cd2e683-4523-4f6f-b337-80a745eecd94", points: null},
            {title: "Лобовое стекло", id: "0c4935a4-a0dd-4f5c-a8b0-609019d4aecb", points: null},
            {title: "Капот", id: "c9dc290e-e54d-47af-b274-2a115a1dea31", points: null},
            {title: "Передний бампер", id: "884bfbab-448b-40ac-873e-1b8bc02e8596", points: null},
            {title: "Передняя правая фара", id: "62c59e24-2349-4f3e-91da-8fdf9d53d2ba", points: null},
            {title: "Передняя левая фара", id: "3ef0d376-78c0-40f4-974f-c676cf421cee", points: null},
            {title: "Правое зеркало", id: "5793f514-b3ee-4f43-85bd-b94a1c7ad64a", points: null},
            {title: "Левое зеркало", id: "475a33fe-7390-418f-962f-604fdaefc337", points: null},
          ],
        },
        {
          position: "сзади", 
          id: "a2e2ff1f-29ee-4f89-ba20-b8b319887c42",
          places: [
            {title: "Заднее стекло", id: "ec19788d-b8c3-4979-ae25-5c8f19a85683", points: null},
            {title: "Дверь багажника", id: "b31e3838-c16f-4ea4-978a-ee516a95fc82", points: null},
            {title: "Задняя левая фара", id: "85e43e41-2759-4b34-b9d1-584b334b3fbd", points: null},
            {title: "Задняя правая фара", id: "7a6730c9-2137-460f-964b-963009cca2f9", points: null},
            {title: "Задний бампер", id: "6470937e-e4d9-4f19-beb0-8c0f6761d945", points: null},
          ],
        },
        {
          position: "слева", 
          id: "659a5410-3593-464f-afcc-1c72b41f7d0f",
          places: [
            {title: "Переднее левое крыло", id: "51e53624-c5f4-4690-a4c8-7c7b5185fc51", points: null},
            {title: "Задняя левая дверь", id: "a714589a-d835-4581-8bb6-ed0805e7c6d3", points: null},
            {title: "Передняя левая дверь", id: "f8298c61-98a2-4939-b5a1-2490a01089f7", points: null},
            {title: "Заднее левое крыло", id: "3861cafc-ed3a-4012-ad01-c0ecb967bd9d", points: null},
          ],
        },
        {
          position: "справа", 
          id: "24c22de3-116c-4fee-9f32-27040b9c980d",
          places: [
            {title: "Заднее правое крыло", id: "d790c257-cfb4-4f7c-99ee-ed322b87dcf8", points: null},
            {title: "Передняя правая дверь", id: "18ea0ef1-0fc1-43c7-96e3-c883758b84c2", points: null},
            {title: "Задняя правая дверь", id: "f45728cf-6f5e-4ce7-9797-c2c06f345dd9", points: null},
            {title: "Переднее правое крыло", id: "f4e68e20-1003-4e73-9cbe-0900cf09e4da", points: null},
          ],
        },
      ],
    },
  },
  {
    key: ["Транспорт", "Автомобили", "Новый"],
    generateFunction: generateAutoNew,
    customForm: {
      additional: {
        powerSteering: null,
        climatControl: {select: null, checkbox: null},
        salon: {select: null, checkbox: null},
        heating: null,
        powerWindows: null,
        electricDrive: null,
        settingsMemory: null,
        drivingAssistance: null,
        antiThiefSystem: null,
        airbags: null,
        activeSafety:  null,
        multimedia: null,
        audioSystem: {select: null, checkbox: null},
        headlights: {select: null, checkbox: null},
        tiresWheels: {select: null, checkbox: null},
      },
    },
  },

  {
    key: ["Транспорт", "Водный транспорт", "Весельные лодки"],
    generateFunction: generateRowingBoats,
  },
  {
    key: ["Транспорт", "Водный транспорт", "Гидроциклы"],
    generateFunction: generateJetSkis,
  },
  {
    key: ["Транспорт", "Водный транспорт", "Катера и яхты"],
    generateFunction: generateBoatsAndYachts,

  },
  {
    key: ["Транспорт", "Водный транспорт", "Моторные лодки и моторы"],
    generateFunction: generateMotorboatsAndMotors,
  },

  {
    key: ["Транспорт", "Мотоциклы и мототехника", "Вездеходы"],
    generateFunction: generateAllTerrainVehicle,
  },
  {
    key: ["Транспорт", "Мотоциклы и мототехника", "Картинг"],
    generateFunction: generateKarting,
  },
  {
    key: ["Транспорт", "Мотоциклы и мототехника", "Квадроциклы и багги"],
    generateFunction: generateATVsAndBuggies,
  },
  {
    key: ["Транспорт", "Мотоциклы и мототехника", "Мопеды и скутеры"],
    generateFunction: generateMopenAndScooter,
  },
  {
    key: ["Транспорт", "Мотоциклы и мототехника", "Мотоциклы"],
    generateFunction: generateMotorcycles,
  },
  {
    key: ["Транспорт", "Мотоциклы и мототехника", "Снегоходы"],
    generateFunction: generateSnowmobiles,
  },

  {
    key: ["Транспорт", "Грузовики и спецтехника", "Автобусы"],
    generateFunction: generateBus,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Автодома"],
    generateFunction: generateMotorhome,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Автокраны"],
    generateFunction: generateTruckCrane,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Бульдозеры"],
    generateFunction: generateBulldozers,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Грузовики"],
    generateFunction: generateTrucks,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Коммунальная техника"],
    generateFunction: generateMunicipalEq,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Лёгкий коммерческий транспорт"],
    generateFunction: generateLightCommercialVehicles,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Навесное оборудование"],
    generateFunction: generateAttachments,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Погрузчики"],
    generateFunction: generateLoaders,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Прицепы"],
    generateFunction: generateTrailers,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Сельхозтехника"],
    generateFunction: generateAgriculturalMachinery,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Строительная техника"],
    generateFunction: generateConstructionEngineering,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Техника для лесозаготовки"],
    generateFunction: generateLoggingEq,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Тягачи"],
    generateFunction: generateTractors,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Эскаваторы"],
    generateFunction: generateExcavators,
  },
  {
    key: ["Транспорт", "Грузовики и спецтехника", "Другое"],
    generateFunction: generateOther,
  },

  {
    key: ["Транспорт", "Запчасти и аксессуары", "Запчасти"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Шины, диски, колёса"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Аудио- и видеотехника"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Аксессуары"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Тюнинг"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Багажники и фаркопы"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Инструменты"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Прицепы"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Экипировка"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Масла и автохимия"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "Противоугонные устройства"],
    generateFunction: generateSparePartsAndAccessories,
  },
  {
    key: ["Транспорт", "Запчасти и аксессуары", "GPS-навигаторы"],
    generateFunction: generateSparePartsAndAccessories,
  },

  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Интернет-магазины и IT"],
  //   generateFunction: Test
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Общественное питание"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Производство"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Развлечения"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Сельское хозяйство"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Строительство"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Сфера услуг"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Магазины и пункты выдачи заказов"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Автобизнес"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Красота и уход"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Стоматология и медицина"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Туризм"],
  //   generateFunction: ReadlyBusiness
  // },
  // {
  //   key: ["Бизнес и оборудование", "Готовый бизнес", "Другое"],
  //   generateFunction: ReadlyBusiness
  // },
  
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Промышленное"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Для магазина"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Ресепшеные и офисная мебель"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Для ресторана"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Для салона красоты"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Майнинг"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Расчётно-кассовое"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Киоски и передвижные сооружения"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Лабораторное"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Медицинское"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Телекоммуникационное"],
  //   generateFunction: BusinessEquipment
  // },
  // {
  //   key: ["Бизнес и оборудование", "Оборудование для бизнеса", "Другое"],
  //   generateFunction: BusinessEquipment
  // },

  // {
  //   key: ["Животные", "Собаки"],
  //   generateFunction: Dogs
  // },
  // {
  //   key: ["Животные", "Кошки"],
  //   generateFunction: Cats
  // },
  // {
  //   key: ["Животные", "Птицы"],
  //   generateFunction: Birds
  // },
  // {
  //   key: ["Животные", "Аквариумы"],
  //   generateFunction: Aqua
  // },
  // {
  //   key: ["Животные", "Товары для животных"],
  //   generateFunction: EqForAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "Амфибии"],
  //   generateFunction: OtherAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "Грызуны"],
  //   generateFunction: OtherAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "Кролики"],
  //   generateFunction: OtherAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "Лошади"],
  //   generateFunction: OtherAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "С/х животные"],
  //   generateFunction: OtherAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "Хорьки"],
  //   generateFunction: OtherAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "Рептилии"],
  //   generateFunction: OtherAnimals
  // },
  // {
  //   key: ["Животные", "Другие животные", "Другое"],
  //   generateFunction: OtherAnimals
  // },

  // {
  //   key: ["Электроника", "Телефоны", "Мобильные телефоны"],
  //   generateFunction: Phones
  // },
  // {
  //   key: ["Электроника", "Телефоны", "Аксессуары"],
  //   generateFunction: Phones
  // },
  // {
  //   key: ["Электроника", "Телефоны", "Рации"],
  //   generateFunction: Phones
  // },
  // {
  //   key: ["Электроника", "Телефоны", "Стационарные телефоны"],
  //   generateFunction: Phones
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Телевизоры и проекты"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Наушники"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Акустика, колонки, сабвуферы"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Аксессуары"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Музыкальные центры, магнитолы"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Усилители и ресиверы"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Видеокамеры"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Видео, DVD и Blu-ray плееры"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Кабели и адаптеры"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Музыка и фильмы"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "Микрофоны"],
  //   generateFunction: AudioVideo
  // },
  // {
  //   key: ["Электроника", "Аудио и видео", "MP3-плееры"],
  //   generateFunction: AudioVideo
  // },

];