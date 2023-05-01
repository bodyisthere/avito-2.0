export const setCheckbox = ( e: any, setForm: React.Dispatch<React.SetStateAction<any>>, optionKey: string ) => {
  setForm((prev: any) => {
    const prevData = prev.additional[optionKey];
    if(prevData === null) prev.additional[optionKey] = [e];
    if(prevData?.includes(e)) prev.additional[optionKey] = prevData.filter((el: any) => el !== e);
    if(!prevData?.includes(e)) prev.additional[optionKey] = prevData ? [...prevData, e] : [e];
    return prev;
  });
};