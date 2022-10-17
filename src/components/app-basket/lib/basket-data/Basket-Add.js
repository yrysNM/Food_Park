import React from "react";
import Remove from "../../../resurce/img/icons/remove.svg";
import Food from "../../../resurce/img/menu.jpg";

const BasketAdd = () => {
  return (
    <>
      <div className="data">
        <div className="basket__inf">
          <img src={Food} alt="" width={"200"} />

          <div className="basket__content">
            <h5 className="basket_title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h5>
            <p className="basket__subtitle">
              Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок,
              базилик, соус песто
            </p>
          </div>
        </div>

        <div className="basket__up">
          <button className="basket__des">+</button>
          <span className="span">1</span>
          <button className="basket__des">-</button>
        </div>

        <div className="price">1640 ₽</div>

        <div className="basket__remove">
          <button className="basket__des">
            <img src={Remove} alt="" />
          </button>
        </div>
      </div>

      <div className="data">
        <div className="basket__inf">
          <img src={Food} alt="" width={"200"} />

          <div className="basket__content">
            <h5 className="basket_title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h5>
            <p className="basket__subtitle">
              Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок,
              базилик, соус песто
            </p>
          </div>
        </div>

        <div className="basket__up">
          <button className="basket__des">+</button>
          <span className="span">1</span>
          <button className="basket__des">-</button>
        </div>

        <div className="price">1640 ₽</div>

        <div className="basket__remove">
          <button className="basket__des">
            <img src={Remove} alt="" />
          </button>
        </div>
      </div>

      <div className="data">
        <div className="basket__inf">
          <img src={Food} alt="" width={"200"} />

          <div className="basket__content">
            <h5 className="basket_title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h5>
            <p className="basket__subtitle">
              Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок,
              базилик, соус песто
            </p>
          </div>
        </div>

        <div className="basket__up">
          <button className="basket__des">+</button>
          <span className="span">1</span>
          <button className="basket__des">-</button>
        </div>

        <div className="price">1640 ₽</div>

        <div className="basket__remove">
          <button className="basket__des">
            <img src={Remove} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketAdd;
