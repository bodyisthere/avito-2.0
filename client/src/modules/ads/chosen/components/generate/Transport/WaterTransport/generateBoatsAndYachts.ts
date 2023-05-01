import { yearGenerate } from "../../../../utils/yearGenerate";
import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { boatsAndYachtsBrands, boatsAndYachtsCategoires, boatsAndYachtsMaterials, boatsAndYachtsMotors, boatsAndYachtsTypes } from "./data/boatsAndYachts";

export const generateBoatsAndYachts = (): IAdsTemplate[] => {
  return (
    [
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
            fieldTitle: "Марка*",
            optionKey: "brand",
            data: boatsAndYachtsBrands,
            validationMessage: "Укажите марку",
          },
          {
            type: "SelectField",
            fieldTitle: "Год выпуска*",
            optionKey: "yearOfIssue",
            data: yearGenerate(1905, 2023),
            validationMessage: "Укажите год выпуска",
          },
          {
            type: "SelectField",
            fieldTitle: "Тип судна*",
            optionKey: "type",
            data: boatsAndYachtsTypes,
            validationMessage: "Укажите тип судна",
            optional: {
              "Катер": [
                {
                  type: "SelectField",
                  fieldTitle: "Категория*",
                  optionKey: "categoryOfBoat",
                  data: boatsAndYachtsCategoires,
                  validationMessage: "Укажите категорию судна",
                },
                {
                  type: "SelectField",
                  fieldTitle: "Тип мотора*",
                  optionKey: "motor",
                  data: boatsAndYachtsMotors,
                  validationMessage: "Укажите тип мотора",
                },
                {
                  type: "RadioButtonsChoose",
                  fieldTitle: "Прицеп в комплекте*",
                  data: ["Нет", "Да"],
                  optionKey: "trailerIncluded",
                  validationMessage: "Укажите наличие прицепа",
                },
              ],
            },
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Длина*",
            optionKey: "length",
            after: "м",
            validationMessage: "Укажите длину",
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Ширина*",
            optionKey: "width",
            after: "м",
            validationMessage: "Укажите ширину",
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Осадка",
            optionKey: "draft",
            after: "м",
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Максимально пассажиров*",
            optionKey: "maxPassengers",
            after: "чел",
            validationMessage: "Укажите максимальное кол-во пассажиров",
          },
          {
            type: "SelectField",
            fieldTitle: "Материал корпуса*",
            optionKey: "material",
            data: boatsAndYachtsMaterials,
            validationMessage: "Укажите материал корпуса",
          },
        ],
      },
      {
        title: "История эксплаутации и состояние",
        fields: [
          {
            type: "RadioButtonsChoose",
            fieldTitle: "Доступность*",
            data: ["В наличии", "Под заказ"],
            optionKey: "availability",
            validationMessage: "Укажите доступность",
          },
          {
            type: "RadioButtonsChoose",
            fieldTitle: "Состояние*",
            data: ["Новое", "Б/У"],
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
    ]
  );
};