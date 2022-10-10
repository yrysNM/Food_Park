import AppContact from "../app-contact/AppContact";
import food1 from "../../resources/img/foodPromotion/food1.png";
import food2 from "../../resources/img/foodPromotion/food2.png";
import food3 from "../../resources/img/foodPromotion/food3.png";
import "./appFoodPromotion.scss";

const AppFoodPromotion = () => {
    return (
        <>
            <section className="food__promotion">
                <div className="container">
                    <div className="title">
                        <h2 className="title-headText">
                            АКЦИи
                        </h2>
                    </div>
                </div>

                <div className="food__promotion_blocks">
                    <Viewer imgUrl={food1} headText={"Без мяса? Здесь!"} />
                    <Viewer imgUrl={food2} headText={"Выгодное комбо c напитками"} />
                    <Viewer imgUrl={food3} headText={"Сырный бортик"} />
                    <Viewer imgUrl={food2} headText={"Выгодное комбо c напитками"} />
                    <Viewer imgUrl={food1} headText={"Без мяса? Здесь!"} />
                    <Viewer imgUrl={food3} headText={"Сырный бортик"} />
                    <Viewer imgUrl={food1} headText={"Без мяса? Здесь!"} />
                    <Viewer imgUrl={food3} headText={"Сырный бортик"} />
                    <Viewer imgUrl={food2} headText={"Выгодное комбо c напитками"} />
                </div>
            </section>
            <AppContact />
        </>
    );
}

const Viewer = ({ imgUrl, headText }) => {
    return (
        <div className="food__promotion_con">
            <div className="food__promotion_wrapper">
                <div className="food__promotion_img">
                    <img src={imgUrl} alt="food1 img" />
                </div>
                <div className="food__promotion_info">
                    <div className="food__promotion_headText">
                        {headText}
                    </div>
                    <div className="food__promotion_descr">
                        Самое время попробовать «Сырную» пиццу, «Маргариту»,
                        пиццу «Овощи и грибы», Пасту Четыре сыра, Томатный
                        суп с гренками, Грибной Стартер, Рулетики с сыром,
                        Картофель из печи, Картофельные оладьи или Греческий
                        салат. Выберите свой вкус!
                    </div>

                    <div className="food__promotion_date">
                        до 31 июля.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFoodPromotion;