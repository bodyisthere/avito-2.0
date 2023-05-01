import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { allTerrainVehicleBrands } from "./data/allTerrainVehicleBrands";

import { yearGenerate } from "../../../../utils/yearGenerate";

export const generateAllTerrainVehicle = (): IAdsTemplate[] => {
  return ([
    {
      title: "Название объявления",
      fields: [
        {
          type: "FieldWithInput",
          fieldTitle: "Название объявления*",
          optionKey: "name",
          validationMessage: "Укажите название объявления",
        },
      ],
    },
    {
      title: "Регистрационные данные",
      fields: [
        {
          type: "FieldWithInput",
          fieldTitle: "VIN или номер рамы",
          optionKey: "VIN",
          tip: {
            type: "VIN(номер кузова)",
          },
        },
      ],
    },
    {
      title: "Технические характеристики",
      fields: [
        {
          type: "SelectField",
          fieldTitle: "Марка*",
          optionKey: "brand",
          data: allTerrainVehicleBrands,
          validationMessage: "Укажите марку",
        },
        {
          type: "SelectField",
          fieldTitle: "Тип*",
          optionKey: "type",
          data: ["Гусеничный", "Колёсный", "Самодельный"],
          validationMessage: "Укажите тип",
        },
        {
          type: "SelectField",
          fieldTitle: "Год выпуска*",
          data: yearGenerate(1905, 2023),
          optionKey: "yearOfIssue",
          validationMessage: "Укажите год выпуска",
        },
        {
          type: "RadioButtonsChoose",
          fieldTitle: "Тип двигателя*",
          data: ["Бензин", "Дизель"],
          optionKey: "typeOfEngine",
          validationMessage: "Укажите тип двигателя",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Мощность*",
          optionKey: "power",
          validationMessage: "Укажите мощность двигателя",
          after: "л.с.",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Объём двигателя*",
          optionKey: "engineCapacity",
          validationMessage: "Укажите объём двигателя",
          after: "см³",
        },
        {
          type: "RadioButtonsChoose",
          fieldTitle: "Подача топлива",
          data: ["Карбюратор", "Инжектор"],
          optionKey: "fuelSupply",
        },
        {
          type: "RadioButtonsChoose",
          fieldTitle: "Тип привода",
          data: ["Цепь", "Ремень", "Кардан"],
          optionKey: "typeOfDrive",
        },
        {
          type: "RadioButtonsChoose",
          fieldTitle: "Число тактов",
          data: ["2", "4"],
          optionKey: "numberOfCycles",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Максимально пассажиров*",
          optionKey: "maxPassengers",
          after: "чел",
          validationMessage: "Укажите максимальное кол-во пассажиров",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Грузоподъёмность",
          optionKey: "loadCapacity",
          after: "кг",
        },
      ],
    },
    {
      title: "История эксплаутации и состояние",
      fields: [
        {
          type: "RadioButtonsChoose",
          fieldTitle: "Доступность",
          data: ["В наличии", "Под заказ"],
          optionKey: "availability",
          validationMessage: "Укажите доступность",
        },
        {
          type: "RadioButtonsChoose",
          fieldTitle: "Состояние*",
          data: ["Новое", "Б/У", "На запчасти"],
          optionKey: "condition",
          validationMessage: "Укажите состояние",
          optional: {
            "Б/У": [
              {
                type: "FieldWithInput",
                fieldTitle: "Пробег*",
                optionKey: "mileage",
                after: "км",
                validationMessage: "Укажите пробег",
              },
            ],
            "На запчасти": [
              {
                type: "FieldWithInput",
                fieldTitle: "Пробег*",
                optionKey: "mileage",
                after: "км",
                validationMessage: "Укажите пробег",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Место осмотра",
      fields: [
        {
          type: "Map",
          optionKey: "location", validationMessage: "Выберите точку встречи",
        },
      ],
    },
    {
      title: "Подробности",
      fields: [
        {
          type: "FieldWithInput",
          fieldTitle: "Цена*",
          optionKey: "price",
          validationMessage: "Укажите цену",
          after: "₽",
        },
        {
          type: "Description", optionKey: "description", validationMessage: "Укажите описание",
        },
        {
          type: "File", optionKey: "photo", validationMessage: "Выберите хотя бы 1 фото",
        },
        {
          type: "VideoLink",
          optionKey: "video",
        },
      ],
    },
    {
      title: "Контакты",
      fields: [
        {
          type: "Contacts", optionKey: "contacts",
        },
      ],
    },
  ]);
};