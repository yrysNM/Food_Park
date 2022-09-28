import "./App-Footer.scss";
import Arrow from "../../resurce/img/icons/arrow.svg";

import React, { useEffect } from "react";

const AppFooter = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div
              className="arrow__top"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <img src={Arrow} alt="" />
            </div>

            <div className="footer__content">
              <div className="footer__logo">LOGOS</div>

              <div className="footer__content-links">
                <div>
                  <a href="/" className="content__link">
                    Пользовательское соглашение
                  </a>
                </div>
                <div>
                  <a href="/" className="content__link">
                    Карта сайта
                  </a>
                </div>
                <div>
                  <a href="/" className="content__link">
                    Политика конфиденциальности
                  </a>
                </div>
              </div>
            </div>

            <div className="footer__links">
              <a href="/" className="footer__link-nav">
                О ресторане
              </a>
              <a href="/" className="footer__link-nav">
                Условия доставки
              </a>
              <a href="/" className="footer__link-nav">
                Возврат товара
              </a>
              <a href="/" className="footer__link-nav">
                Акции
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AppFooter;
