import React from "react";

const BasketOrderFinish = () => {
  return (
    <>
      <div className="order__data">
        <h3 className="order__price">
          Итого: <span>500 ₽</span>
        </h3>
        <p className="order__procent">
          До бесплатной доставки не хватет: <span>100 ₽</span>
        </p>
        <p className="">Минимальная сума заказа 1500 ₽</p>
      </div>

      <div className="order__btn">
        <button className="order__btn-do">Оформить заказ</button>
      </div>
    </>
  );
};

export default BasketOrderFinish;
