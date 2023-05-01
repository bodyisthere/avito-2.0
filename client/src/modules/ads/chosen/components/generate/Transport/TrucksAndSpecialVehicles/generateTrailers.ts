import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { yearGenerate } from "../../../../utils/yearGenerate";

import { trailersBrandsFull, trailersBrandsSemi } from "./data/trailersBrands";
import { craneArmBrands } from "./data/trucksBrands";

export const generateTrailers = (): IAdsTemplate[] => {
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
          fieldTitle: "Тип техники*",
          optionKey: "brand",
          data: ["Прицеп", "Полуприцеп"],
          validationMessage: "Укажите тип техники",
          optional: {
            "Прицеп": [
              {
                type: "SelectField",
                fieldTitle: "Марка*",
                optionKey: "brand",
                data: trailersBrandsFull,
                validationMessage: "Укажите марку",
              },
            ],
            "Полуприцеп": [
              {
                type: "SelectField",
                fieldTitle: "Марка*",
                optionKey: "brand",
                data: trailersBrandsSemi,
                validationMessage: "Укажите марку",
              },
            ],
          },
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
          fieldTitle: "Длина прицепа",
          optionKey: "trailerLength",
          after: "мм",
        },
        {
          type: "FieldWithInput",
          fieldTitle: "Объём прицепа",
          optionKey: "trailerVolume",
          after: "м3",
        },
        {
          type: "SelectField",
          fieldTitle: "Тип тормозов",
          data: ["Барабанные", "Дисковые", "Отсутствуют"],
          optionKey: "brakeType",
        },
        {
          type: "SelectField",
          fieldTitle: "Количество осей",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          optionKey: "numberOfAxles",
        },
        {
          type: "SelectField",
          fieldTitle: "Тип подвески",
          data: ["Балансирная", "Гидравлическая", "Пневматическая", "Полурессорная", "Рессорная"],
          optionKey: "suspensionType",
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
                fieldTitle: "Моточасы",
                optionKey: "motoHours",
                after: "ч",
              },
            ],
            "На запчасти": [
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