import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { yearGenerate } from "../../../../utils/yearGenerate";

import { trucksBrands, craneArmBrands } from "./data/trucksBrands";

export const generateTrucks = (): IAdsTemplate[] => {
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
          fieldTitle: "VIN, номер кузова или SN",
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
          data: trucksBrands,
          validationMessage: "Укажите марку",
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
          fieldTitle: "Есть кран-манипулятор*",
          data: ["Да", "Нет"],
          optionKey: "craneArmIncluded",
          validationMessage: "Укажите кран-манипулятор",
          optional: {
            "Да": [
              {
                type: "SelectField",
                fieldTitle: "Марка КМУ*",
                data: craneArmBrands,
                optionKey: "yearOfIssue",
                validationMessage: "Укажите марку КМУ",
              },
            ],
          },
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Разрешённая максимальная масса",
          optionKey: "maxWeight",
          after: "кг",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Грузоподъёмность",
          optionKey: "loadCapacity",
          after: "кг",
        },
        {
          type: "SelectField",
          fieldTitle: "Колёсная формула",
          data: ["4x2", "4x4", "6x2", "6x4", "6x6", "8x2", "8x4", "8x6", "8x8", "10x2", "10x4", "10x6", "10x8", "12x4", "12x8"],
          optionKey: "tractionClass",
        },
        {
          type: "SelectField",
          fieldTitle: "Тип двигателя",
          data: ["Бензин", "Дизель", "Электро", "Газ", "Газ/Бензин", "Газ/Дизель"],
          optionKey: "tractionClass",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Мощность",
          optionKey: "power",
          after: "Вт",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Объём двигателя",
          optionKey: "engineCapacity",
          after: "см³",
        },
        {
          type: "SelectField",
          fieldTitle: "Экологический класс",
          data: ["Евро 0", "Евро 1", "Евро 2", "Евро 3", "Евро 4", "Евро 5", "Евро 6"],
          optionKey: "ecoClass",
        },
        {
          type: "SelectField",
          fieldTitle: "Коробка передач",
          data: ["Автомат", "Механика", "Полуавтомат"],
          optionKey: "transmission",
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
              {
                type: "FieldWithInput",
                fieldTitle: "Моточасы",
                optionKey: "motoHours",
                after: "ч",
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
              {
                type: "FieldWithInput",
                fieldTitle: "Моточасы",
                optionKey: "motoHours",
                after: "ч",
              },
            ],
          },
        },
        {
          type: "RadioButtonsChoose",
          fieldTitle: "ПТС или ПСМ",
          data: ["Оригинал", "Дубликат", "Нет"],
          optionKey: "vehiclePassport",
          validationMessage: "Укажите ПТС или ПСМ",
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
          type: "PriceWithPicker",
          fieldTitle: "Цена*",
          data: ["Да", "Нет"],
          optionKey: "price",
          validationMessage: "Укажите цену",
          tip: {
            type: "Цена",
          },
        },
        {
          type: "RadioButtonsChoose",
          fieldTitle: "НДС включён",
          data: ["Да", "Нет"],
          optionKey: "isNDSinclude",
          validationMessage: "Укажите НДС",
          tip: {
            type: "НДС",
          },
        },
        {
          type: "File", optionKey: "photo", validationMessage: "Выберите хотя бы 1 фото",
        },
        {
          type: "Description", optionKey: "description", validationMessage: "Укажите описание",
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