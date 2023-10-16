import styles from "./SelectLanguage.module.sass";
import { FC } from "react";
import { useState, MouseEvent } from "react";

const SelectLanguage: FC = () => {
    const [toggleOpen, setToggleOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Eng");

  const clickOnSelect = () => {
    setToggleOpen(!toggleOpen);
  };

  //* change items from current to chosen and
  const clickOnSelectItem = (e: MouseEvent<HTMLElement>) => {
    const prevValue = selectedValue;
    const nextValue = (e.target as HTMLInputElement).textContent || "";
    setToggleOpen(false);
    setSelectedValue(nextValue);
    setTimeout(() => {
      (e.target as HTMLInputElement).textContent = prevValue;
    }, 1000);
  };
  return (
    <div className={`${styles.select}`}>
    <div onClick={clickOnSelect} className={styles.select__header}>
      <span className={styles.select__current}>{selectedValue}</span>
      <div className={styles.select__icon}></div>
    </div>
    <div
      className={`${styles.select__body} ${
        toggleOpen ? styles.select__body_active : ""
      }`}
    >
      <div onClick={clickOnSelectItem} className={styles.select__item}>
        Rus
      </div>
      <div onClick={clickOnSelectItem} className={styles.select__item}>
        Fra
      </div>
      <div onClick={clickOnSelectItem} className={styles.select__item}>
        Deu
      </div>
    </div>
  </div>
 )
};

export default SelectLanguage;
