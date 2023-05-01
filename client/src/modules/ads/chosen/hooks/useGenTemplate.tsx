//импорт внешних пакетов

//импорт стилей
import standart from "../styles/ads.module.scss";

//импорт типов
import { IAdsTemplate } from "../types/IAdsTemplate";

//импорт функционала
import { useGenFields } from "./useGenFields";
import { fieldsNames } from "../data/fieldsNames.data";

//импорт компонентов

export const useGenTemplate = (template: IAdsTemplate[], form: any, setFunction: any, validationErrors: any, setForm: any) => {
  const { 
    genDescription, genFieldWithInput,
    genSelectField, genFile,
    genColorChoose, genAdditional,
    genVideoLink, genAutoNumber,
    genRadioButtonsChoose, genCheckboxList,
    genCarBody, genContacts, genPriceWithPicker,
    genSwitchButton, genMap,
  } = useGenFields(form, setFunction, validationErrors, setForm);

  const optionalGeneration = (optionKey: string, optionals: any) => {
    //optionKey - плавающее значение даты - 1
    //optionals - конкретные значения даты - от 1 до ...
    let result = null;
    for(const key in optionals) {
      if(key === form[optionKey]) {
        result = optionals[key];
      }
    }
    return result;
  };

  const isHaveOptions = (owner: any, optionName: string) => {
    let result = false;
    for(const key in owner.optional) {
      if(key === optionName) return result = true;
    }
    return result;
  };

  const generateTemplate = () => {
    return template.map((el: any, index: number) => {
      return (
        <div key={index}>
          <p className={standart.title}>{el.title}</p>
          {
            el.fields.map((e: any, i: number) => {
              return (
                <div key={i}>
                  {
                    e.type === fieldsNames.description
                    &&
                    genDescription()
                  }
                  {
                    e.type === fieldsNames.map
                    &&
                    genMap(e)
                  }
                  {
                    e.type === fieldsNames.switchButton
                    &&
                    genSwitchButton(e)
                  }
                  {
                    e.type === fieldsNames.priceWithPicker
                    &&
                    genPriceWithPicker(e, i)
                  }
                  {
                    e.type === fieldsNames.input
                    &&
                    genFieldWithInput(e,i)
                  }
                  {
                    e.type === fieldsNames.select
                      ?
                      e.hasOwnProperty("optional")
                        ?
                        <>
                          {genSelectField(e, i)}
                          {
                            form
                          && 
                          form[e.optionKey] 
                          && 
                          isHaveOptions(e, form[e.optionKey])
                              ?
                              optionalGeneration(e.optionKey, e.optional).map((o: any, io: number) => {
                                if(o.type === fieldsNames.input) {
                                  return genFieldWithInput(o, io);
                                } 
                                if(o.type === fieldsNames.select) {
                                  return genSelectField(o, io);
                                }
                                if(o.type === fieldsNames.radio) {
                                  return genRadioButtonsChoose(o, io);
                                }
                                return "";
                              })
                              :
                              ""
                          }
                        </>
                        :
                        genSelectField(e, i)
                      :
                      ""
                  }
                  {
                    e.type === fieldsNames.file
                    &&
                    genFile()
                  }
                  {
                    e.type === fieldsNames.color
                    &&
                    genColorChoose(e)
                  }
                  {
                    e.type === fieldsNames.additional
                    &&
                    genAdditional(e)
                  }
                  {
                    e.type === fieldsNames.video
                    &&
                    genVideoLink(e)
                  }
                  {
                    e.type === fieldsNames.autoNumber
                    &&
                    genAutoNumber(e)
                  }
                  {
                    e.type === fieldsNames.radio
                      ?
                      e.hasOwnProperty("optional")
                        ?
                        <>
                          {genRadioButtonsChoose(e, i)}
                          {
                            form
                          &&
                          form[e.optionKey]
                          &&
                          isHaveOptions(e, form[e.optionKey])
                              ?
                              optionalGeneration(e.optionKey, e.optional).map((o: any, io: number) => {
                                if(o.type === fieldsNames.input) {
                                  return genFieldWithInput(o, io);
                                } 
                                if(o.type === fieldsNames.select) {
                                  return genSelectField(o, io);
                                }
                                if(o.type === fieldsNames.radio) {
                                  return genRadioButtonsChoose(o, io);
                                }
                                return "";
                              })
                              :
                              ""
                          }
                        </>
                        :
                        genRadioButtonsChoose(e, i)
                      :
                      ""
                  }
                  {
                    e.type === fieldsNames.list
                    &&
                    genCheckboxList(e)
                  }
                  {
                    e.type === fieldsNames.carBody
                    &&
                    genCarBody()
                  }
                  {
                    e.type === fieldsNames.contacts
                    &&
                    genContacts()
                  }
                </div>
              );
            })
          }
        </div>
      );
    });
  };


  return (
    generateTemplate
  );
};