import { autoBrands } from "./data/autoBrands";
import { autoAdditional } from "./data/autoAdditional";
import { IAdsTemplate } from "../../../../types/IAdsTemplate";

export const generateAutoRun = (): IAdsTemplate[] => {
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
          {
            type: "SelectField",
            fieldTitle: "Вид объявления*",
            optionKey: "typeOfAds",
            data: ["Продаю личный автомобиль", "Автомобиль приобретён на продажу"],
            validationMessage: "Укажите вид объявления",
          },
        ],
      },
      {
        title: "Внешний вид",
        fields: [
          {
            type: "File", 
            optionKey: "photo", 
            validationMessage: "Выберите хотя бы 1 фото",
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
            validationMessage: "Укажите VIN",
          },
          {
            type: "AutoNumber",
            optionKey: "governmentNumber",
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
            type: "RadioButtonsChoose",
            fieldTitle: "Состояние*",
            data: ["Не битый", "Битый"],
            optionKey: "condition",
            validationMessage: "Укажите состояние автомобиля",
            tip: {
              type: "Состояние машины",
            },
          },
          {
            type: "FieldWithInput",
            fieldTitle: "Пробег*",
            optionKey: "mileage",
            after: "км",
            validationMessage: "Укажите пробег",
          },
          {
            type: "SelectField",
            fieldTitle: "ПТС",
            optionKey: "vehiclePassport",
            data: ["Оригинал", "Дубликат", "Электронный"],
            tip: {
              type: "ПТС машины",
            },
          },
          {
            type: "RadioButtonsChoose",
            fieldTitle: "Владельцев ПТС*",
            data: ["1", "2", "3", "4+"],
            optionKey: "vehiclePassportOwners",
            validationMessage: "Укажите количество владельцев ПТС",
          },
          {
            type: "CheckboxList",
            fieldTitle: "Данные о ТО",
            data: ["Есть сервисная книжка", "Обслуживался у дилера", "На гарантии"],
            optionKey: "inspectionData",
          },
        ],
      },
      {
        title: "Состояние кузова",
        fields: [
          {
            type: "CarBody",
            optionKey: "carBody",
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
            type: "Description", 
            optionKey: "description", 
            validationMessage: "Укажите описание",
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