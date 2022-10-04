import './Modal.scss';
import Close from '../../resurce/img/icons/close.svg';

import React from "react";
import { createPortal } from "react-dom";

export const ModalEmpty = ({children, open, close}) => {
    if (!open) return null;
  return createPortal(
    <>
      <div className="modal logout-modal">
        <div className="modal__inner logout-modal__inner">
          <div className="modal__content logout-modal__content">
            <button className="close__btn logout_close-btn" onClick={close}>
              <img src={Close} alt="" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </>,

    document.getElementById("portal")
  );
};
