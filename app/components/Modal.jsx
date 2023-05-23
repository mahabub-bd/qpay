import React from "react";
import styles from "../styles/style";
import { RiCloseLine } from "react-icons/ri";
const Modal = ({ setIsopen }) => {
  return (
    <>
      <div className="dark-BG" onClick={() => setIsopen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className={`${styles.heading3}`}>Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsopen(false)}>
            <RiCloseLine className="mb-[-3px]" />
          </button>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsopen(false)}>
                Delete
              </button>
              <button className="cancelBtn" onClick={() => setIsopen(false)}>
               cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
