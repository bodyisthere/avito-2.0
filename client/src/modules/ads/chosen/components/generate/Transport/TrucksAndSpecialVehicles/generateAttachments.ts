import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { yearGenerate } from "../../../../utils/yearGenerate";

import { attachmentsBrands } from "./data/attachmentsBrands";

export const generateAttachments = (): IAdsTemplate[] => {
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
      title: "Технические характеристики",
      fields: [
        {
          type: "SelectField",
          fieldTitle: "Тип оборудования*",
          optionKey: "typeOfEquipment",
          data: attachmentsBrands,
          validationMessage: "Укажите тип оборудования",
        },
        {
          type: "SelectField",
          fieldTitle: "Год выпуска*",
          data: yearGenerate(1905, 2023),
          optionKey: "yearOfIssue",
          validationMessage: "Укажите год выпуска",
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