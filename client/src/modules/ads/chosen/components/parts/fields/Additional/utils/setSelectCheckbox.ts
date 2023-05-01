export const setSelectCheckbox = ( 
  e: any, 
  setForm: React.Dispatch<React.SetStateAction<any>>, 
  optionKey: string, 
  type: "select" | "checkbox",
) => {
  if(type === "select") {
    setForm((prev: any) => {
      if(e === "-Не выбрано-") {
        prev.additional[optionKey].select = null;
        return prev;
      }
      prev.additional[optionKey].select = e;
      return prev;
    });
    return;
  }
  if(type === "checkbox") {
    setForm((prev: any) => {
      const prevData = prev.additional[optionKey].checkbox;
      if(prevData === null) {
        prev.additional[optionKey].checkbox = [e];
        return prev;
      } 
      if(prevData?.includes(e)) {
        prev.additional[optionKey].checkbox = prevData.filter((el: any) => el !== e);
      } else {
        prev.additional[optionKey].checkbox = prevData ? [...prevData, e] : [e];
      }
      return prev;
    }); 
  }
};