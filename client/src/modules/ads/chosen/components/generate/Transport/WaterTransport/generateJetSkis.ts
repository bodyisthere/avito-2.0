import { IAdsTemplate } from "../../../../types/IAdsTemplate";
import { jetSkisBrands } from "./data/jetSkis";
import { yearGenerate } from "../../../../utils/yearGenerate";

export const generateJetSkis = (): IAdsTemplate[] => {
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
            data: jetSkisBrands,
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
            fieldTitle: "Тип*",
            optionKey: "type",
            data: ["Спортивные", "Туристические"],
            validationMessage: "Укажите тип",
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Максимально пассажиров*",
            optionKey: "maxPassengers",
            validationMessage: "Укажите максимальное кол-во пассажиров",
            after: "чел",
          },
          {
            type: "RadioButtonsChoose",
            fieldTitle: "Прицеп в комплекте*",
            data: ["Нет", "Да"],
            optionKey: "trailerIncluded",
            validationMessage: "Укажите наличие прицепа",
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Мощность*",
            optionKey: "power",
            validationMessage: "Укажите мощность",
            after: "л.с.",
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Объем двигателя",
            optionKey: "power",
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