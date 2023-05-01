import { IAdsTemplate } from "../types/IAdsTemplate";

export const createForm = (
  template: IAdsTemplate[],
  categoryTags: string[],
  custom?: {[key: string]: any},
) => {
  const form: any = {};

  template.forEach((atom) => {
    atom.fields.forEach(core => {
      if(core.hasOwnProperty("optional")) {
        for(const key in core.optional) {
          core.optional[key].forEach(nucleon => {
            form[nucleon.optionKey] = null;
          });
        }
      }
      form[core.optionKey] = null;
    });
  });

  for(const key in custom) {
    form[key] = custom[key];
  }

  form.tags = categoryTags;

  return form;
};