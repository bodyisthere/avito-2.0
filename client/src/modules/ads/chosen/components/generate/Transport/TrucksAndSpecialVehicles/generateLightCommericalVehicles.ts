import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { yearGenerate } from "../../../../utils/yearGenerate";

import { lightCommercialBrands, lightCommercialCraneArmBrands } from "./data/lightCommercialBrands";

export const generateLightCommercialVehicles = (): IAdsTemplate[] => {
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
      title: "Внешний вид",
      fields: [
        {
          type: "File", optionKey: "photo", validationMessage: "Выберите хотя бы 1 фото",
        },
        {
          type: "ColorChoose",
          optionKey: "color",
          validationMessage: "Укажите цвет",
        },
        {
          type: "VideoLink",
          optionKey: "video",
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
          data: lightCommercialBrands,
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
          fieldTitle: "Руль*",
          data: ["Левый", "Правый"],
          optionKey: "steeringWheel",
          validationMessage: "Укажите руль",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Грузоподъёмность",
          optionKey: "loadCapacity",
          after: "кг",
        },
        {
          type: "SelectField",
          fieldTitle: "Количество мест",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
          optionKey: "numberOfSeats",
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
                data: lightCommercialCraneArmBrands,
                optionKey: "yearOfIssue",
                validationMessage: "Укажите марку КМУ",
              },
            ],
          },
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
                type: "RadioButtonsChoose",
                fieldTitle: "Состояние б/у*",
                data: ["Битый", "Не битый"],
                optionKey: "conditionBU",
                validationMessage: "Укажите состояние б.у.",
              },
              {
                type: "FieldWithInput",
                fieldTitle: "Пробег*",
                optionKey: "mileage",
                after: "км",
                validationMessage: "Укажите пробег",
              },
              {
                type: "RadioButtonsChoose",
                fieldTitle: "Владельцев по ПТС*",
                data: ["1", "2", "3", "4+"],
                optionKey: "vehiclePassportOwners",
                validationMessage: "Укажите владельцев по ПТС",
              },
            ],
            "На запчасти": [
              {
                type: "RadioButtonsChoose",
                fieldTitle: "Состояние б/у*",
                data: ["Битый", "Не битый"],
                optionKey: "conditionBU",
                validationMessage: "Укажите состояние б.у.",
              },
              {
                type: "FieldWithInput",
                fieldTitle: "Пробег*",
                optionKey: "mileage",
                after: "км",
                validationMessage: "Укажите пробег",
              },
              {
                type: "RadioButtonsChoose",
                fieldTitle: "Владельцев по ПТС*",
                data: ["1", "2", "3", "4+"],
                optionKey: "vehiclePassportOwners",
                validationMessage: "Укажите владельцев по ПТС",
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
          type: "Description", optionKey: "description", validationMessage: "Укажите описание",
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