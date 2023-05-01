import { 
  Description, FieldWithInput, 
  SelectField, File, 
  ColorChoose, VideoLink, 
  AutoNumber, RadioButtonsChoose, 
  CheckboxList, Contacts, PriceWithPicker, 
  Additional, CarBody, SwitchButton, MapAds,
} from "../components/parts/fields";

export const useGenFields = (
  form: any, 
  setFunction: any, 
  validationErrors: any, 
  setForm: any,
) => {

  const genDescription = () => {
    return (
      <Description
        form={form}
        setFunction={setFunction}
        validationErrors={validationErrors}
      />
    );
  };

  const genMap = (e: any) => {
    return (
      <MapAds 
        validationErrors={validationErrors}
        setFunction={setFunction}
        optionKey={e.optionKey}
      />
    );
  };

  const genSwitchButton = (e: any) => {
    return (
      <SwitchButton
        fieldTitle={e.fieldTitle}
        optionKey={e.optionKey}
        setFunction={setFunction}
      />
    );
  };

  const genPriceWithPicker = (e: any, i: number) => {
    return (
      <PriceWithPicker 
        key={i}
        fieldTitle={e.fieldTitle}
        optionKey={e.optionKey}
        setFunction={setFunction}
        value={form[e.optionKey]}
        after={e?.after}
        tip={e?.tip}
        validate={{validationErrors, validationMessage: e.validationMessage}}
      />
    );
  };

  const genFieldWithInput = (e: any, i: number) => {
    return (  
      <FieldWithInput
        key={i}
        fieldTitle={e.fieldTitle}
        optionKey={e.optionKey}
        setFunction={setFunction}
        value={form[e.optionKey]}
        after={e?.after}
        tip={e?.tip}
        validate={{validationErrors, validationMessage: e.validationMessage}}
      />
    );
  };

  const genSelectField = (e: any, i: number) => {
    return (
      <SelectField
        key={i}
        data={e.data}
        fieldTitle={e.fieldTitle}
        optionKey={e.optionKey}
        setFunction={setFunction}
        tip={e?.tip}
        validate={{validationErrors, validationMessage: e.validationMessage}}
      />
    );
  };

  const genFile = () => {
    return (
      <File
        setFunction={setFunction}
        validationErrors={validationErrors}
        value={form.photo}
      />
    );
  };

  const genColorChoose = (e: any) => {
    return (
      <ColorChoose
        activeColor={form[e.optionKey]}
        setFunction={setFunction}
        validationErrors={validationErrors}
      />
    );
  };

  const genAdditional = (e: any) => {
    return (
      <Additional 
        data={e.data} 
        setForm={setForm}
      />);
  };

  const genVideoLink = (e: any) => {
    return (
      <VideoLink
        optionKey={e.optionKey}
        setFunction={setFunction}
        value={form.video}
      />
    );
  };

  const genAutoNumber = (e: any) => {
    return (
      <AutoNumber
        autoNumber={form[e.optionKey]}
        optionKey={"governmentNumber"}
        setFunction={setFunction}
      />
    );
  };

  const genRadioButtonsChoose = (e: any, i: number) => {
    return (
      <RadioButtonsChoose
        key={i}
        data={e.data}
        fieldTitle={e.fieldTitle}
        optionKey={e.optionKey}
        setFunction={setFunction}
        value={form[e.optionKey]}
        tip={e.tip}
        validate={{validationErrors, validationMessage: e.validationMessage}}
      />
    );
  };

  const genCheckboxList = (e: any) => {
    return (
      <CheckboxList
        data={e.data}
        fieldTitle={e.fieldTitle}
        optionKey={e.optionKey}
        setForm={setForm}
      />
    );
  };

  const genCarBody = () => {
    return (
      <CarBody
        form={form}
        setFunction={setFunction}
      />
    );
  };

  const genContacts = () => {
    return (
      <Contacts
        setForm={setForm}
      />
    );
  };

  return {
    genDescription, genFieldWithInput,
    genSelectField, genFile,
    genColorChoose, genAdditional,
    genVideoLink, genAutoNumber,
    genRadioButtonsChoose, genCheckboxList,
    genCarBody, genContacts, genPriceWithPicker,
    genSwitchButton, genMap,
  };
};