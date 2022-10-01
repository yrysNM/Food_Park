import React from 'react';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import AppSubHeader from './App-subHeader';
import './App-Submenu.scss'

const AppSubmenu = () => {
  const { isMainPage, isMainPageCheckFunc } = useContext(DataContext);
  const { pathname } = useLocation();

  useEffect(() => {
    isMainPageCheckFunc();
  }, [pathname]);

  return (
    <>
      {!isMainPage ?
        <AppSubHeader /> :
        <>
          <Viewer />
          <AppSubHeader />
        </>
      }
    </>
  );
}

const Viewer = () => {
  return (
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
  );
}

export default AppSubmenu;
