import "./App-Basket.scss";

import React from "react";
import Food from "../../resurce/img/menu.jpg";
import Remove from "../../resurce/img/icons/remove.svg";

const AppBasket = () => {
  return (
    <>
      <div className="basket">
        <div className="container">
          <div className="basket__inner">
            <div className="basket__data">
              <div className="data">
                <div className="basket__inf">
                  <img src={Food} alt="" width={"200"} />

                  <div className="basket__content">
                    <h5 className="basket_title">ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ</h5>
                    <p className="basket__subtitle">
                      Кальмары, мидии, креветки, сыр маасдам, красный лук, микс
                      оливок, базилик, соус песто
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
                      Кальмары, мидии, креветки, сыр маасдам, красный лук, микс
                      оливок, базилик, соус песто
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
                      Кальмары, мидии, креветки, сыр маасдам, красный лук, микс
                      оливок, базилик, соус песто
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
            </div>
            <div className="basket__data-title">ДОБАВИТЬ К ЗАКАЗУ</div>

            <div className="basket__data add">
                <div className="data__add">
                    <img src={Food} alt="" width={"200"}/>

                    <div className="add__content">
                        <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
                        <div className="add__btn">
                        Добавить
                        <button className="basket__des">
                            +
                        </button>
                        </div>
                        <span className="add__pirce">1640 ₽</span>
                    </div>
                </div>

                <div className="data__add">
                    <img src={Food} alt="" width={"200"}/>

                    <div className="add__content">
                        <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
                        <div className="add__btn">
                        Добавить
                        <button className="basket__des">
                            +
                        </button>
                        </div>
                        <span className="add__pirce">1640 ₽</span>
                    </div>
                </div>

                <div className="data__add">
                    <img src={Food} alt="" width={"200"}/>

                    <div className="add__content">
                        <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
                        <div className="add__btn">
                        Добавить
                        <button className="basket__des">
                            +
                        </button>
                        </div>
                        <span className="add__pirce">1640 ₽</span>
                    </div>
                </div>

                <div className="data__add">
                    <img src={Food} alt="" width={"200"}/>

                    <div className="add__content">
                        <h5 className="add__content-title">КВАС АНАНАСОВЫЙ</h5>
                        <div className="add__btn">
                        Добавить
                        <button className="basket__des">
                            +
                        </button>
                        </div>
                        <span className="add__pirce">1640 ₽</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBasket;
