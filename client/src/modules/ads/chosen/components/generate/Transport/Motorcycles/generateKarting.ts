import { IAdsTemplate } from "../../../../types/IAdsTemplate";

export const generateKarting = (): IAdsTemplate[] => {
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
        title: "Регистрационные данные",
        fields: [
          {
            type: "FieldWithInput",
            fieldTitle: "VIN или номер рамы",
            optionKey: "VIN",
            tip: {
              type: "VIN(номер кузова)",
            },
          },
        ],
      },
      {
        title: "История эксплуатации и состояние",
        fields: [
          {
            type: "RadioButtonsChoose",
            fieldTitle: "Состояние*",
            data: ["Новое", "Б/у", "На запчасти"],
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
            type: "Description", 
            optionKey: "description", 
            validationMessage: "Укажите описание",
          },
          {
            type: "File", 
            optionKey: "photo", 
            validationMessage: "Выберите хотя бы 1 фото",
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