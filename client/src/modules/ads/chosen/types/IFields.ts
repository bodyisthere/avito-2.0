type TAdditionalContent = Array<"select" | "checkbox">;
type activeColor = "Белый" | "Серебрянный" | "Серый" | "Чёрный" | "Коричневый" | "Золотой" | "Бежевый" | "Красный" | "Бордовый" | "Оранжевый" | "Жёлтый" | "Зелёный" | "Голубой" | "Синий" | "Фиолетовый" | "Пурпурный" | "Розовый" | null
export type tipTypes = "VIN(номер кузова)" | "Состояние машины" | "ПТС машины" | "НДС" | "Цена";

export interface IAdditional {
  setForm: any
  data: {
    title: string
    content: TAdditionalContent
    keyField: string
    selectData?: string[]
    checkboxData?: string[]
  }[]
}

export interface IAdditionalItem {
  setForm: any
  keyField: string
  
  title: string
  content: TAdditionalContent
  selectData?: string[]
  checkboxData?: string[]
}

export interface IAutoNumber {
  setFunction: (optionKey: string, value: any) => void
  optionKey: string
  autoNumber: {main: string, region: number} | null
}

export interface ICheckboxList {
  //заголовок слева
  fieldTitle: string
  //дата для чекбокса
  data: string[]
  //ключ установки даты
  optionKey: string
  setForm: any
  //инфа о валидации
  validate?: {
    validationErrors: string[],
    validationMessage: string,
  }
}


export interface IColorChoose {
  activeColor: activeColor,
  setFunction: (key: string, value: any) => void
  validationErrors: string[]
}

export interface IContacts {
  setForm: any
}

export interface IFieldWithInput {
  //мера длины
  after?: string
  //значение инпута
  value: string | number
  //заголовок слева
  fieldTitle: string
  //ключ установки даты
  optionKey: string
  setFunction: (key: string, value: any) => void
  //инфа о валидации
  validate?: {
    validationErrors: string[],
    validationMessage: string,
  }
  tip?: {
    type: tipTypes,
  }
}

export interface IFile {
  value: string[]
  setFunction: (key: string, value: any) => void
  validationErrors: string[]
}

export interface IMapAds {
  setFunction: (key: string, value: any) => void
  optionKey: string
  validationErrors: string[]
}

export interface IPriceWithPicker {
  //мера длины
  after?: string
  //значение инпута
  value: string | number
  //заголовок слева
  fieldTitle: string
  //ключ установки даты
  optionKey: string
  setFunction: (key: string, value: any) => void
  //инфа о валидации
  validate?: {
    validationErrors: string[],
    validationMessage: string,
  }
  tip?: {
    type: tipTypes,
  }
}

export interface IRadioButtonChoose {
  //заголовок слева
  fieldTitle: string
  //дата для кнопок
  data: string[]
  //ключ установки даты
  optionKey: string
  setFunction: (key: string, value: boolean) => void
  //инфа о валидации
  validate?: {
    validationErrors: string[],
    validationMessage: string,
  }
  //выбранный элемент
  value: any
  tip?: {
    type: tipTypes,
  }
}

export interface ISelectField {
  //заголовок слева
  fieldTitle: string
  //ключ установки даты
  optionKey: string
  setFunction: (key: string, value: boolean) => void
  //дата для селекта
  data: string[]
  //инфа о валидации
  validate?: {
    validationErrors: string[],
    validationMessage: string,
  }
  tip?: {
    type: tipTypes,
  }
  selected?: any
}

export interface ISwitchButton {
    //заголовок слева
    fieldTitle: string
    //ключ установки даты
    optionKey: string
    setFunction: (key: string, value: boolean) => void
    //инфа о валидации
    validate?: {
      validationErrors: string[],
      validationMessage: string,
    }
}

export interface IVideoLink {
  value: string | null
  setFunction: (key: string, value: any) => void
  optionKey: string
}
