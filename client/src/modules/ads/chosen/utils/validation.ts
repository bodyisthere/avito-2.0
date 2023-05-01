import { IAdsTemplate, TAdsField, TAdsFieldTypes } from "../types/IAdsTemplate";

interface IValidationFields {
  type: TAdsFieldTypes, 
  optionKey: string, 
  optional?: {
    [key: string] : {
      type: TAdsFieldTypes, 
      optionKey: string
    }[]
  }
}

//чтобы было читаемо и из - за непридумываемых названий для полей иерархия такая:
//atom > core > nucleon :)

const findOptionalFields = (core: TAdsField) => {
  const localResult: IValidationFields = {
    type: core.type,
    optionKey: core.optionKey ? core.optionKey : "",
    optional: {},
  };

  for(const key in core.optional) {
    core.optional[key].forEach((nucleon: TAdsField) => {
      if(!localResult.optional) return;

      if(nucleon.hasOwnProperty("validationMessage")) {
        const body = {
          type: nucleon.type, 
          optionKey: nucleon.optionKey ? nucleon.optionKey : "",
        };
        
        if(localResult.optional.hasOwnProperty(key)) return localResult.optional[key].push(body);
        return localResult.optional[key] = [body];
      }
    });
  }
  return localResult;
};

const findValidationFields = (template: IAdsTemplate[]) => {
  const result: IValidationFields[] = [];

  template.forEach((atom) => {
    atom.fields.forEach((core) => {
      if(core.hasOwnProperty("optional")) return result.push(findOptionalFields(core));
      if(core.hasOwnProperty("validationMessage")) {
        result.push({
          type: core.type,
          optionKey: core.optionKey ? core.optionKey : "",
        });
      }
    });
  });

  return result;
};

export const validationCreate = (template: IAdsTemplate[], form: any ) => {
  const validationFields: IValidationFields[] = findValidationFields(template);
  const errors: string[] = [];

  validationFields.forEach(el => {
    if(el.optional) {
      for(const key in el.optional) {
        if(form[el.optionKey] === key) {
          el.optional[key].forEach(e => {
            if(e.type === "SelectField") {
              if(!form[e.optionKey] || form[e.optionKey] === "-Не выбрано-") return errors.push(e.optionKey);
              return;
            }
            if(!form[e.optionKey]) return errors.push(e.optionKey);
          });
          return;
        }
        return;
      }
      return;
    }
    if(el.type === "SelectField") {
      if(!form[el.optionKey] || form[el.optionKey] === "-Не выбрано-") errors.push(el.optionKey);
    }
    if(!form[el.optionKey]) return errors.push(el.optionKey);
  });

  if(errors.length > 0) window.scrollTo(0, 0);
  return errors;
}; 
