import { IAdsTemplate } from "../../../../types/IAdsTemplate";
import { autoBrands } from "./data/autoBrands";
import { autoAdditional } from "./data/autoAdditional";

export const generateAutoNew = (): IAdsTemplate[] => {
  return (
    [
      {
        title: "Информация об объявлении",
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
            fieldTitle: "VIN или номер кузова*",
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
            data: autoBrands,
            validationMessage: "Укажите марку автомобиля",
          },
        ],
      },
      {
        title: "История эксплуатации и состояние",
        fields: [
          {
            type: "SelectField",
            fieldTitle: "ПТС",
            optionKey: "vehiclePassport",
            data: ["Оригинал", "Дубликат", "Электронный"],
            validationMessage: "Укажите ПТС автомобиля",
            tip: {
              type: "ПТС машины",
            },
          },
          {
            type: "CheckboxList",
            fieldTitle: "Данные о ТО",
            data: ["Есть сервисная книжка", "Обслуживался у диллера", "На гарантии"],
            optionKey: "inspectionData",
          },
        ],
      },
      {
        title: "Дополнительные опции",
        fields: [
          {
            type: "Additional",
            data: autoAdditional,
            optionKey: "additional",
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
        title: "Описание",
        fields: [
          {
            type: "Description", optionKey: "description", validationMessage: "Укажите описание",
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Цена*",
            optionKey: "price",
            validationMessage: "Укажите цену",
            after: "₽",
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