import food1 from "../../resources/img/foods/food1.png";
import buyBasketIcon from "../../resources/icons/buy.svg";
import "./appFoods.scss";

const AppFoods = ({ foodsData }) => {
    return (
        <section className="foods">
            <div className="title">
                <div className="title-headText">
                    ХОЛОДНЫЕ ЗАКУСКИ
                </div>

            </div>
            <div className="foods__wrapper">
                {foodsData.map((food, i) => {
                    return (
                        <div key={i} className="foods__wrapper_block">
                            <div className="foods__wrapper_img">
                                <img src={food.imgUrl} alt="food 1" />
                            </div>

                            <div className="foods__wrapper_descrs">
                                <div className="foods__wrapper_info">
                                    <div className="descrHeadText">
                                        {food.foodName}
                                    </div>
                                    <div className="foodWidth">
                                        Вес: {food.foodWidth}
                                    </div>
                                </div>

                                <div className="foods__wrapper_text">
                                    {food.foodDescr.slice(0, 30)}...
                                </div>

                                <div className="foods__wrapper_price">
                                    <div className="price">{food.foodPrice}</div>
                                    <button className="btn btn-basket">
                                        В корзину
                                        <span className="iconBasket">
                                            <img src={buyBasketIcon} alt="icon basket" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default AppFoods;