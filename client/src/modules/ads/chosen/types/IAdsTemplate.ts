export type TAdsFieldTypes = 
"FieldWithInput" | "RadioButtonsChoose" | "Description" | 
"File" | "VideoLink" | "Contacts" | 
"SelectField" | "ColorChoose" | "CheckboxList" | 
"Additional" | "AutoNumber" | "CarBody" | 
"PriceWithPicker" | "SwitchButton" | "Map"

export type TAdsField = {
  type: TAdsFieldTypes,
  fieldTitle?: string,
  optionKey: string,
  validationMessage?: string,
  data?: any,
  optional?: {
    [key: string]: {
      type: TAdsFieldTypes,
      fieldTitle?: string,
      optionKey: string,
      validationMessage?: string,
      data?: any,
      tip?: {
        type: any
        // type: tipTypes
      },
      after?: string,
    }[]
  }
  tip?: {
    type: any
    // type: tipTypes
  },
  after?: string,
}

export interface IAdsTemplate {
  title: string,
  fields: TAdsField[]
}