import searchIcon from "../../resources/icons/search.svg";
import phoneIcon from "../../resources/icons/phone.svg";
import locationIcon from "../../resources/icons/location.svg";
import { Link } from "react-router-dom";

import "./appHeader.scss";

const AppHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="nav">
                    <div className="header__logo">
                        <h1 className="header__logo-text">Food Park</h1>
                    </div>

                    <div className="header__info">
                        <form>
                            <div className="header__info_form">
                                <img src={locationIcon} alt="location icon" className="header__info_locationIcon" />
                                <input
                                    type="text"
                                    className="header__info_search"
                                    placeholder="Введите адрес доставки" />
                                <img src={searchIcon} alt="search icon" className="header__info_searchIcon" />
                            </div>
                        </form>

                        <div className="header__info_contact">
                            <div className="header__info_phone">
                                <img src={phoneIcon} alt="phone icon" className="header__info_phoneIcon" />
                            </div>
                            <div className="header__info_phoneText">
                                <div className="headTitle">
                                    Контакты:
                                    <br />
                                    <a href="tel:+79175105759" className="phoneText">
                                        +7 (917) 510-57-59
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header__basket">
                        <div className="header__basket_wrapper">
                            <Link to={'/basket'} className="header__basket_text">
                                Корзина
                            </Link>
                            <div className="header__basket_count">
                                <div className="countText">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default AppHeader;