import './Modal.scss';
import Close from '../../resurce/img/icons/close.svg';

import React from "react";
import { createPortal } from "react-dom";
import { Design } from './ModalDesign';

export const ModalEmpty = ({children, open, close}) => {
    if (!open) return null;
  return createPortal(
     <>
       <Design children={children} close={close} Close={Close}/>
     </>,

    document.getElementById("portal")
  );
};


export const ModalError = ({children, open, close}) => {
  if (!open) return null;
return createPortal(
  <>
    <Design children={children} close={close} Close={Close}/>
  </>,

  document.getElementById("portal")
);
};