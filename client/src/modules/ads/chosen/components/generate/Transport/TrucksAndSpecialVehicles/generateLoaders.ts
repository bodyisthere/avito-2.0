import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { yearGenerate } from "../../../../utils/yearGenerate";

import { loadersBrands } from "./data/loadersBrands";

export const generateLoaders = (): IAdsTemplate[] => {
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
          data: loadersBrands,
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