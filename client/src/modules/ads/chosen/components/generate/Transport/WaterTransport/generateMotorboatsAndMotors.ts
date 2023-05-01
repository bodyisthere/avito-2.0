import { IAdsTemplate } from "../../../../types/IAdsTemplate";

import { motorboatsBrands, motorsBrands, typesOfBottom } from "./data/motorboatsAndMotors";

import { yearGenerate } from "../../../../utils/yearGenerate";

export const generateMotorboatsAndMotors = (): IAdsTemplate[] => {
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
            fieldTitle: "Тип*",
            optionKey: "type",
            data: ["Лодка ПВХ(надувная)", "Лодка RIB(комбинированная)", "Лодка с жестким корпусом", "Лодочный мотор"],
            optional: {
              "Лодка ПВХ(надувная)": [
                {
                  type: "SelectField",
                  fieldTitle: "Марка*",
                  optionKey: "brand",
                  data: motorboatsBrands,
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
                  type: "SelectField",
                  fieldTitle: "Тип дна*",
                  optionKey: "typeOfBottom",
                  data: typesOfBottom,
                  validationMessage: "Укажите тип дна",
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
                  fieldTitle: "Высота транца",
                  optionKey: "transomHeight",
                  after: "мм",
                },
                {
                  type: "FieldWithInput",
                  fieldTitle: "Вес лодки",
                  optionKey: "weight",
                  after: "кг",
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
                  fieldTitle: "Максимальная мощность мотора*",
                  optionKey: "power",
                  after: "л.с.",
                  validationMessage: "Укажите мощность мотора",
                },
                {
                  type: "RadioButtonsChoose",
                  fieldTitle: "Прицеп в комплекте*",
                  data: ["Нет", "Да"],
                  optionKey: "trailerIncluded",
                  validationMessage: "Укажите наличие прицепа",
                },
                {
                  type: "RadioButtonsChoose",
                  fieldTitle: "Мотор в комплекте*",
                  data: ["Нет", "Да"],
                  optionKey: "motorIncluded",
                  validationMessage: "Укажите наличие мотора",
                },
              ],
              "Лодка RIB(комбинированная)": [
                {
                  type: "SelectField",
                  fieldTitle: "Марка*",
                  optionKey: "brand",
                  data: motorboatsBrands,
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
                  type: "SelectField",
                  fieldTitle: "Тип дна*",
                  optionKey: "typeOfBottom",
                  data: typesOfBottom,
                  validationMessage: "Укажите тип дна",
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
                  fieldTitle: "Высота транца",
                  optionKey: "transomHeight",
                  after: "мм",
                },
                {
                  type: "FieldWithInput",
                  fieldTitle: "Вес лодки",
                  optionKey: "boatWeight",
                  after: "кг",
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
                  fieldTitle: "Максимальная мощность мотора*",
                  optionKey: "power",
                  after: "л.с.",
                  validationMessage: "Укажите мощность мотора",
                },
                {
                  type: "RadioButtonsChoose",
                  fieldTitle: "Прицеп в комплекте*",
                  data: ["Нет", "Да"],
                  optionKey: "trailerIncluded",
                  validationMessage: "Укажите наличие прицепа",
                },
                {
                  type: "RadioButtonsChoose",
                  fieldTitle: "Мотор в комплекте*",
                  data: ["Нет", "Да"],
                  optionKey: "motorIncluded",
                  validationMessage: "Укажите наличие мотора",
                },
              ],
              "Лодка с жестким корпусом": [
                {
                  type: "SelectField",
                  fieldTitle: "Марка*",
                  optionKey: "brand",
                  data: motorboatsBrands,
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
                  fieldTitle: "Высота транца",
                  optionKey: "transomHeight",
                  after: "мм",
                },
                {
                  type: "FieldWithInput",
                  fieldTitle: "Вес лодки",
                  optionKey: "weight",
                  after: "кг",
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
                  fieldTitle: "Максимальная мощность мотора*",
                  optionKey: "power",
                  after: "л.с.",
                  validationMessage: "Укажите мощность мотора",
                },
                {
                  type: "RadioButtonsChoose",
                  fieldTitle: "Прицеп в комплекте*",
                  data: ["Нет", "Да"],
                  optionKey: "trailerIncluded",
                  validationMessage: "Укажите наличие прицепа",
                },
                {
                  type: "RadioButtonsChoose",
                  fieldTitle: "Мотор в комплекте*",
                  data: ["Нет", "Да"],
                  optionKey: "motorIncluded",
                  validationMessage: "Укажите наличие мотора",
                },
              ],
              "Лодочный мотор": [
                {
                  type: "SelectField",
                  fieldTitle: "Марка*",
                  optionKey: "brand",
                  data: motorsBrands,
                  validationMessage: "Укажите марку мотора",
                },
                {
                  type: "SelectField",
                  fieldTitle: "Год выпуска*",
                  data: yearGenerate(1905, 2023),
                  optionKey: "yearOfIssue",
                  validationMessage: "Укажите год выпуска",
                },
                {
                  type: "SelectField",
                  fieldTitle: "Тип мотора*",
                  data: ["Бензин", "Дизель", "Электро", "Болотоход", "Водомёт"],
                  optionKey: "typeOfMotor",
                  validationMessage: "Укажите тип мотора",
                },
                {
                  type: "FieldWithInput",
                  fieldTitle: "Максимальная мощность мотора*",
                  optionKey: "power",
                  after: "л.с.",
                  validationMessage: "Укажите мощность мотора",
                },
                {
                  type: "FieldWithInput",
                  fieldTitle: "Длина ноги",
                  optionKey: "legLength",
                  after: "мм",
                },
                {
                  type: "FieldWithInput",
                  fieldTitle: "Вес мотора",
                  optionKey: "weight",
                  after: "кг",
                },
                {
                  type: "SelectField",
                  fieldTitle: "Управление",
                  data: ["Дистанционное", "Румпельное", "Румпельно-дистанционное"],
                  optionKey: "control",
                },
                {
                  type: "SelectField",
                  fieldTitle: "Запуск двигателя",
                  data: ["Ручной", "Электростартер", "Ручной и электростартер"],
                  optionKey: "engineStarting",
                },
              ],
            },
            validationMessage: "Укажите тип",
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