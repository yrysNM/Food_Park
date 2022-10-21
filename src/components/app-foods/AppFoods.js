import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";
import useFoodService from "../../services/foodServices";
import buyBasketIcon from "../../resources/icons/buy.svg";
import minusIcon from "../../resources/icons/minus.svg";
import plusIcon from "../../resources/icons/plus.svg";

import "swiper/css";
import "swiper/css/pagination";
import "./appFoods.scss";

const AppFoods = ({ foodsData, titleHeadText }) => {
    const [toggleBlocks, setToggleBlocks] = useState(false);
    const [indexFoodChange, setIndexFoodChange] = useState(null);
    const [data, setData] = useState([]);
    const basketBlock = useRef();
    const addRemoveBlock = useRef();
    const { getMenuSuggest } = useFoodService();

    const mouseOver = (indexFood) => {
        setToggleBlocks(false);
        setIndexFoodChange(indexFood);
    }

    const mouseUp = (indexFood) => {
        setToggleBlocks(true);
        setIndexFoodChange(indexFood);
    }

    useEffect(() => {
        getMenuSuggest().then(res => setData([...data, ...res]));
    }, [])

    return (
        <section className="foods">
            <div className="container">

                <div className="title">
                    <h2 className="title-headText">
                        {titleHeadText}
                    </h2>

                </div>
            </div>
            <div className="foods__wrapper" style={{ borderBottom: `${(titleHeadText === "Мясные блюда") ? "none" : "1px solid #504d4d"}` }}>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">

                    {foodsData.map((food) => {
                        return (
                            <SwiperSlide key={food.id} >
                                <Link to={`/food/${food.id}`}>

                                    <div className="foods__wrapper_block" onMouseOver={() => mouseUp(food.id)} onMouseOut={() => mouseOver(food.id)}>
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
                                                {food.foodDescr}
                                            </div>

                                            {indexFoodChange === food.id ?
                                                <Viewer
                                                    toggleBlocks={toggleBlocks}
                                                    basketBlock={basketBlock}
                                                    addRemoveBlock={addRemoveBlock}
                                                    food={food} /> :
                                                <>
                                                    <div
                                                        className="foods__wrapper_price"
                                                        ref={basketBlock}
                                                    >
                                                        <div className="price">{food.foodPrice}</div>
                                                        <button className="btn btn-basket">
                                                            В корзину
                                                            <span className="iconBasket">
                                                                <img src={buyBasketIcon} alt="icon basket" />
                                                            </span>
                                                        </button>
                                                    </div>

                                                    <div
                                                        className="foods__wrapper_addRemove"
                                                        ref={addRemoveBlock}
                                                    >
                                                        <button className="btn btn-minus">
                                                            <img src={minusIcon} alt="minus icon" />
                                                        </button>
                                                        <span>{food.foodPrice}</span>
                                                        <button className="btn btn-plus">
                                                            <img src={plusIcon} alt="plus icon" />
                                                        </button>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
}


const Viewer = ({ toggleBlocks, basketBlock, addRemoveBlock, food }) => {
    return (
        <>
            <div
                className="foods__wrapper_price"
                ref={basketBlock}
                style={{ opacity: `${toggleBlocks ? "0" : "1"}`, visibility: `${toggleBlocks ? "hidden" : "visible"}` }} >
                <div className="price">{food.foodPrice}</div>
                <button className="btn btn-basket">
                    В корзину
                    <span className="iconBasket">
                        <img src={buyBasketIcon} alt="icon basket" />
                    </span>
                </button>
            </div>

            <div
                className="foods__wrapper_addRemove"
                ref={addRemoveBlock}
                style={{ opacity: `${toggleBlocks ? "1" : "0"}`, visibility: `${toggleBlocks ? "visible" : "hidden"}` }}>
                <button className="btn btn-minus">
                    <img src={minusIcon} alt="minus icon" />
                </button>
                <span>{food.foodPrice}</span>
                <button className="btn btn-plus">
                    <img src={plusIcon} alt="plus icon" />
                </button>
            </div>
        </>
    );
}

export default AppFoods;