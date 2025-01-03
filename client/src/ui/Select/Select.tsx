import React, { FC } from "react";

import styles from "./Select.module.scss";

interface ISelect {
  options: string[]
  onChange: any
  selected? : string
}

export const Select: FC<ISelect> = ( { options, onChange, selected } ) => {
  return (
    <select className={styles["select"]} onChange={(e: any) => onChange(e.target.value)} value={selected}>
      {options.map((el, index): React.ReactNode => {
        return <option value={el} key={index}>{el}</option>;
      })}
    </select>
  );
};