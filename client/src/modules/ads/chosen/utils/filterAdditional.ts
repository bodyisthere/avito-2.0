type TExtendField = {
  select: null | string | number, 
  checkbox: null | string[] | number[],
}

type TAdditional = {
  [key: string]: TExtendField | string | string[] | number | number[] | null
}

type TFilterAdditional = (additional: TAdditional) => TAdditional;

export const filterAdditional: TFilterAdditional = (additional) => {
  const result: TAdditional = {};

  for(const key in additional) {
    const item = additional[key];

    if(item !== null) {
      if(Array.isArray(item) && item.length) {
        result[key] = item;
      };
  
      if(typeof item === "object") {
        if("checkbox" in item) {
          if(item.checkbox?.length !== 0 && item.checkbox !== null) {
            result[key] = item;
          }
        }
      };
  
      if(typeof item !== "object") {
        result[key] = item;
      };
    };

  };
  
  return result;
};