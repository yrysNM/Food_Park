import React from "react";
import Food from "../../../../resurce/img/menu.jpg";

const BasketOtherAdd = () => {
  return (
    <>
      <div className="data__add">
        <img src={Food} alt="" width={"200"} />

        <div className="add__content">
          <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
          <div className="add__btn">
            Добавить
            <button className="basket__des">+</button>
          </div>
          <span className="add__pirce">1640 ₽</span>
        </div>
      </div>

      <div className="data__add">
        <img src={Food} alt="" width={"200"} />

        <div className="add__content">
          <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
          <div className="add__btn">
            Добавить
            <button className="basket__des">+</button>
          </div>
          <span className="add__pirce">1640 ₽</span>
        </div>
      </div>

      <div className="data__add">
        <img src={Food} alt="" width={"200"} />

        <div className="add__content">
          <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
          <div className="add__btn">
            Добавить
            <button className="basket__des">+</button>
          </div>
          <span className="add__pirce">1640 ₽</span>
        </div>
      </div>

      <div className="data__add">
        <img src={Food} alt="" width={"200"} />

        <div className="add__content">
          <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
          <div className="add__btn">
            Добавить
            <button className="basket__des">+</button>
          </div>
          <span className="add__pirce">1640 ₽</span>
        </div>
      </div>
    </>
  );
};

export default BasketOtherAdd;
