import React from 'react';
import './App-Submenu.scss'

const AppSubmenu = () => {
  return (
    <>
      <main className="main">
        <div className="container">
            <div className="main__inner">
                <div className="main__title">
                    Доставка ВКУСНЕЙШИХ 
                    <br />БЛЮд за 60 минут
                </div>

                <div className="main__btn">
                    <button className="btn">Ещё не пробовал ?</button>
                </div>
            </div>
        </div>
        <div className="background"></div>
      </main>

      <div className="header">
        <div className="container">
            <div className="header__inner">
                <nav className="nav">
                    <a href="/" className="nav__link active">Холодные закуски</a>
                    <a href="/" className="nav__link">Горячие закуски</a>
                    <a href="/" className="nav__link">Мясные блюда</a>
                    <a href="/" className="nav__link">Супы</a>
                    <a href="/" className="nav__link">Рыбные блюда</a>
                    <a href="/" className="nav__link">Гриль меню</a>
                    <a href="/" className="nav__link">Фирменные блюда</a>
                    <a href="/" className="nav__link">Напитки</a>
                </nav>
            </div>
        </div>
      </div>
    </>
  );
}

export default AppSubmenu;
