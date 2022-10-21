import { useState } from "react";
import clock1 from "../../resources/icons/clock.svg";
import "./appOrderProcessing.scss";


const AppOrderProcessing = () => {
    const [dataInput, setDataInput] = useState({
        userName: "",
        userPhone: ""
    });

    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        const target = e.target;
        setDataInput(dataInput => ({ ...dataInput, [target.name]: target.value, }));
    }

    const inc = () => {
        setCount(count => (count += 1));
    }

    const dec = () => {
        setCount(count => count > 0 ? count -= 1 : count);
    }

    return (
        <>

            <div className="orderFood">
                <div className="orderFood__pageRegular">
                    <div className="orderFood__pageRegular_arrow">
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.6967C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.46967 5.46967ZM1.5 5.25L1 5.25L1 6.75L1.5 6.75L1.5 5.25Z" fill="white" />
                        </svg>
                    </div>
                    <div className="orderFood__pageRegular_text">
                        в корзину
                    </div>
                </div>

                <div className="title">
                    <h2 className="title-headText">Оформление заказа</h2>
                </div>

                <div className="orderFood__form">
                    <div className="orderFood__form_wrapper">
                        <div className="orderFood__form_headText">
                            1. Контактная информация
                        </div>

                        <form className="form">
                            <div className="form-wrapper">
                                <div className="form-container">
                                    <label className="form-label">
                                        <input
                                            type="text"
                                            name="userName"
                                            className={`form-input ${dataInput.userName ? "form-input_active" : ""}`}
                                            required
                                            value={dataInput.userName}
                                            onChange={handleChange} />
                                        <span className="form-label_span">
                                            Имя
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-container">
                                    <label className="form-label">
                                        <input
                                            type="number"
                                            name="userPhone"
                                            className={`form-input ${dataInput.userPhone ? "form-input_active" : ""}`}
                                            required
                                            value={dataInput.userPhone}
                                            onChange={handleChange} />
                                        <span className="form-label_span">
                                            Телефон
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="orderFood__form">
                    <div className="orderFood__form_wrapper">
                        <div className="orderFood__form_headText">
                            2. Доставка
                        </div>

                        <div className="orderFood__headInfo">
                            <div className="orderFood__btns">
                                <button className="btn btn-form">Доставка</button>
                                <button className="btn btn-form btn-form_hidden">Самовывоз</button>
                            </div>

                            <div className="orderFood__addressTime">
                                <img src={clock1} alt="clock1" />
                                <div className="timeText">
                                    Доставим через  1 час 30 минут
                                </div>
                            </div>
                        </div>

                        <h3 className="orderFood__form_title">Адрес доставки</h3>

                        <form className="form mt22">
                            <div className="form-wrapper form-wrapper2">
                                <div className="form-container2 w70">
                                    <label className="form-label">
                                        <input
                                            type="text"
                                            name="userAddress"
                                            className={`form-input`}
                                            required
                                        />
                                        <span className="form-label_span">
                                            Укажите улицу
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>
                                <div className=" form-container2 w25">
                                    <label className="form-label">
                                        <input
                                            type="number"
                                            name="userNumberHome"
                                            className={`form-input`}
                                            required
                                        />
                                        <span className="form-label_span">
                                            Номер дома
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form-container2 w40">
                                    <label className="form-label">
                                        <input
                                            type="text"
                                            name="userNumberHome"
                                            className={`form-input`}
                                        />
                                        <span className="form-label_span">
                                            № квартиры/офиса
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>

                                <div className="form-container2 w40">
                                    <label className="form-label">
                                        <input
                                            type="text"
                                            name="userNumberHome"
                                            className={`form-input`}
                                        />
                                        <span className="form-label_span">
                                            Подъезд
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>

                                <div className="form-container2 w40">
                                    <label className="form-label">
                                        <input
                                            type="text"
                                            name="userNumberHome"
                                            className={`form-input`}
                                        />
                                        <span className="form-label_span">
                                            Этаж
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>

                                <div className="form-container2 w100">
                                    <label className="form-label">
                                        <input
                                            type="text"
                                            name="userNumberHome"
                                            className={`form-input`}
                                        />
                                        <span className="form-label_span">
                                            Комментарий
                                            <span className="requiredSymbol">*</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="orderFood__form">
                    <div className="orderFood__form_wrapper">
                        <div className="orderFood__form_headText">
                            3. Оплатить
                        </div>

                        <div className="orderFood__headInfo ft">
                            <div className="orderFood__btns">
                                <button className="btn btn-form btn-form_hidden  brR">Оплата онлайн</button>
                                <button className="btn btn-form btn-form_hidden brB">Курьеру картой</button>
                                <button className="btn btn-form brL">Наличными</button>
                            </div>
                        </div>
                        <div className="orderFood_surContainer ft" style={{ marginTop: "36px" }}>
                            <div className="orderFood_surB">
                                Сдача с
                            </div>
                        </div>

                    </div>
                </div>


                <div className="orderFood__form">
                    <div className="orderFood__form_wrapper">
                        <div className="orderFood__form_headText">
                            4. Когда доставить
                        </div>

                        <div className="orderFood__headInfo">
                            <div className="orderFood__btns">
                                <button className="btn btn-form btn-form_hidden brR">В ближайшее время</button>
                                <button className="btn btn-form brL">Ко времени</button>
                            </div>

                            <form className="form">
                                <div className="form-wrapper">
                                    <label className="form-label">
                                        <input
                                            type="datetime-local"
                                            name="timeOrder"
                                            value={new Date().toISOString().substring(0, new Date().toISOString().length - 1)}
                                            onChange={() => { }}
                                            className={`form-input`} />
                                        <span className="form-label_spanTime">
                                            Укажите время
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>

                        <div className="orderFood_surContainer ft">
                            <div className="orderFood_bg">
                                <div className="orderFood__surB">
                                    Кол-во персон
                                </div>
                                <div className="orderFood__count">
                                    <span className="cDown" onClick={dec}>-</span>
                                    <span className="cNumber">{count}</span>
                                    <span className="cUp" style={{ fontSize: "15px" }} onClick={inc}>+</span>
                                </div>
                            </div>
                        </div>

                        <h3 className="orderFood__form_title">Хотите мы позвоним?</h3>

                        <form className="form mt22">
                            <div className="form-wrapper" style={{ flexDirection: "column", alignItems: "flex-start" }}>
                                <div className="form-container" style={{ padding: 0, paddingTop: "0rem" }}>
                                    <label className="form-label radioCon">
                                        <input
                                            type="radio"
                                            name="notCallRadio"
                                            className={`form-input_radio`}
                                        />
                                        <span className="form-label_spanRadio">
                                            Не перезванивать
                                        </span>
                                    </label>
                                </div>

                                <div className="form-container" style={{ padding: 0, paddingTop: "2rem" }}>
                                    <label className="form-label radioCon">
                                        <input
                                            type="radio"
                                            name="notCallRadio"
                                            className={`form-input_radio`}
                                        />
                                        <span className="form-label_spanRadio">
                                            Потребуется звонок оператора
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="orderFood__form" style={{ marginBottom: 90, paddingBottom: 31 }}>
                    <form className="form" style={{ marginTop: 0 }}>
                        <div className="form-wrapper">
                            <div className="form-container">
                                <label className="form-label radioCon">
                                    <input
                                        type="checkbox"
                                        name="userAgree"
                                        className={`form-input_checkbox`} />
                                    <span className="form-label_spanCheckBox">
                                        Я согласен на обработку моих перс. данных в соответствии с <span>Условиями</span>
                                    </span>
                                </label>
                            </div>

                            <button className="btn btn-submit">Оформить заказ</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AppOrderProcessing;