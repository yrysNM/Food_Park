import './App-About.scss';

import React from 'react';
import Look from '../../resurce/img/icons/look.svg';
import Flash from '../../resurce/img/icons/flash.svg';
import Chef from '../../resurce/img/icons/chef.svg';

const AppAbout = () => {
  return (
    <>
        <div className="about">
            <div className="container">
                <div className="about__inner">
                    <div className="about__content">
                        <h1 className="about__title">НАШЕ КАФЕ</h1>

                        <div className="about__info">
                            <p className='about__subtitle'>
                                Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                            </p>

                            <button className="button">ПОСМОТРЕТЬ МЕНЮ</button>
                        </div>
                    </div>

                    <div className="about__text">
                        <div className="about__block">
                            <div className="about__icon">
                                <img src={Look} alt="" />
                            </div>
                            <div className="about__feedback">Свежайшие продукты</div>
                        </div>

                        <div className="about__block">
                            <div className="about__icon">
                                <img src={Flash} alt="" />
                            </div>
                            <div className="about__feedback">Быстрая доставка</div>
                        </div>

                        <div className="about__block">
                            <div className="about__icon">
                                <img src={Chef} alt="" />
                            </div>
                            <div className="about__feedback">Лучшие повора</div>
                        </div>

                        <div className="about__block">
                            <div className="about__icon">
                                <img src={Look} alt="" />
                            </div>
                            <div className="about__feedback">Свежайшие продукты</div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
    </>
  );
}

export default AppAbout;
