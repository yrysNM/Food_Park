import "./App-Basket.scss";

import React from "react";
import BasketAdd from "./lib/basket-data/Basket-Add";
import BasketOtherAdd from "./lib/basket-data/Basket-Other-Add";
import BasketOrderFinish from "./lib/basket-data/Basket-Order-Finish";

const AppBasket = () => {
  return (
    <>
      <div className="basket">
        <div className="container">
          <div className="basket__inner">

            <div className="basket__number">
              КОРЗИНА
              <span> (в корзине 3 товара)</span>
            </div>

            <div className="basket__data">
              <BasketAdd />
            </div>

            <div className="basket__data-title">ДОБАВИТЬ К ЗАКАЗУ</div>

            <div className="basket__data add">
              <BasketOtherAdd />
            </div>

            <div className="order">
              <BasketOrderFinish />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBasket;
