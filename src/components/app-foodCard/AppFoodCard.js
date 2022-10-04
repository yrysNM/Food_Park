import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import AppFoods from "../app-foods/AppFoods";
import AppContact from "../app-contact/AppContact";
import AppFooter from "../app-footer/App-Footer";
import backPageArrow from "../../resources/icons/pageBackArrow.svg";
import buyBasketIcon from "../../resources/icons/basketCardFood.svg";
import "./appFoodCard.scss";

const AppFoodCard = () => {
    const { data, foodPageId } = useContext(DataContext);
    const [foodData, setFoodData] = useState({});

    useEffect(() => {
        data.forEach(item => {
            if (item.id === parseInt(foodPageId)) {
                setFoodData(item);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [foodPageId]);

    return (
        <>

            <div className="foodCard">
                <div className="container">

                    <div className="foodCard__backPage">
                        <div className="foodCard__backPage_arrowBack">
                            <img src={backPageArrow} alt="back arrow icon" />
                        </div>

                        <div className="foodCard__backPage_text">
                            Вернуться назад
                        </div>
                    </div>

                    <div className="foodCard__wrapper">
                        <div className="foodCard__wrapper_img">
                            <img src={foodData.imgUrl} alt="food img" />
                        </div>

                        <div className="foodCard__wrapper_info">
                            <div className="foodCard__wrapper_headText">
                                {foodData.foodName}
                            </div>

                            <div className="foodCard__wrapper_descr">
                                {foodData.foodDescr}
                            </div>

                            <div className="foodCard__wrapper_widthInfo">
                                Вес: {foodData.foodWidth}
                            </div>
                            <div
                                className="foodCard__wrapper_price">
                                <div className="foodCard__wrapper_basket">
                                    <div className="foodCard__wrapper_text">
                                        В корзину
                                    </div>
                                    <div className="foodCard__wrapper_priceBasketIcon">
                                        <img src={buyBasketIcon} alt="icon basket" />
                                    </div>
                                </div>
                                <div className="price">{foodData.foodPrice}</div>
                            </div>
                            <div className="foodCard__wrapper_btInfo">
                                <div className="foodCard__wrapper_titles">
                                    <div className="foodCard__wrapper_btText">
                                        Белки
                                    </div>
                                    <div className="foodCard__wrapper_btText">
                                        Жиры
                                    </div>
                                    <div className="foodCard__wrapper_btText">
                                        Углеводы
                                    </div>
                                    <div className="foodCard__wrapper_btText">
                                        Ккал
                                    </div>
                                    <div className="foodCard__wrapper_btText">
                                        Вес
                                    </div>
                                </div>

                                <div className="foodCard__wrapper_infoFoods">
                                    <div className="foodCard__wrapper_infoFoodText">
                                        17.23
                                    </div>
                                    <div className="foodCard__wrapper_infoFoodText">
                                        7.63
                                    </div>
                                    <div className="foodCard__wrapper_infoFoodText">
                                        22.35
                                    </div>
                                    <div className="foodCard__wrapper_infoFoodText">
                                        234
                                    </div>
                                    <div className="foodCard__wrapper_infoFoodText">
                                        210г
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                    </div>
                </div>
            </div>

            <AppFoods foodsData={data} titleHeadText={"С ЭТИМ ТОВАРОМ ПОКУПАЮТ"} />
            <AppContact />
            <AppFooter />
        </>
    );
}

export default AppFoodCard;