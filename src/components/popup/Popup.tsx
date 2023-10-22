import styles from "./Popup.module.sass";
import { FC } from "react";

interface PopupProps {
  isPopupActive: boolean;
  popupMessage: string;
  closePopup: () => void
}
const Popup: FC<PopupProps> = ({
  isPopupActive,
  popupMessage,
  closePopup,
}) => {
  return (
    <div className={`${styles.popup} ${isPopupActive ? styles.popup_active : ''}`}>
      <div className={styles.popup__container}>
        <p className={styles.popup__text}>{popupMessage}</p> 
        <div className={`${styles.popup__close} button`} onClick={closePopup}></div> 
      </div> 
    </div>
  );
};

export default Popup;
