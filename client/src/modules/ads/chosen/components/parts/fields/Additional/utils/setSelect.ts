export const setSelect = ( e: any, setForm: React.Dispatch<React.SetStateAction<any>>, optionKey: string ) => {
  setForm((prev: any) => {
    if(e === "-Не выбрано-") {
      prev.additional[optionKey] = null;
      return prev;
    }
    prev.additional[optionKey] = e;
    return prev;
  });
};