import React from 'react';
import Basket from '../../resurce/img/icons/basket.svg'

export const ModalBasketChildren = ({close}) => {
  return (
    <>
      <div className="modal__content">
        <img src={Basket} alt="" />
        <h1 className="modal__title">КОРЗИНА ПУСТАЯ</h1>
      </div>

      <div className="modal__button">
        <button className="buttons" onClick={close}>Посмотреть меню</button>
      </div>
    </>
  );
}

