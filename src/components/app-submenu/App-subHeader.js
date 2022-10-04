import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./App-Submenu.scss";

const AppSubHeader = () => {
    const { toggleStylePositionFixed, isMainPage } = useContext(DataContext);
    return (
        <div
            className={`subheader ${toggleStylePositionFixed && isMainPage === true ? "active" : ""} ${isMainPage === true ? "" : "active2"}`}>
            <div className="container">
                <div className="subheader__inner">
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
    );
}

export default AppSubHeader;