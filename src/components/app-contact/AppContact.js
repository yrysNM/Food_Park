import locationIcon from "../../resources/icons/contact/location.svg";
import messageIcon from "../../resources/icons/contact/message.svg";
import facebookIcon from "../../resources/icons/social/facebook.svg";
import vkIcon from "../../resources/icons/social/vkontacte.svg";
import youtubeIcon from "../../resources/icons/social/youtube.svg";
import instagramIcon from "../../resources/icons/social/instagram.svg";
import "./appContact.scss";

const AppContact = () => {
    return (
        <section className="contact">
            <div className="contact__map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.9926349846129!2d76.66816836102092!3d43.20748865786909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38834f7675d8a6c3%3A0x7b7d14aec270c056!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQodGD0LvQtdC50LzQsNC9INCU0LXQvNC40YDQtdC70Y8!5e0!3m2!1sru!2skz!4v1664295058739!5m2!1sru!2skz" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="container">
                <div className="contact__info">

                    <h2 className="contact__info_headText">КОНТАКТЫ</h2>

                    <div className="contact__info_address">
                        <div className="contact__info_data">
                            <img src={locationIcon} alt="location icon" />
                            <div className="dataContact">
                                <span className="dataContact_headText">
                                    Наш адрес:
                                </span>
                                МО, городской округ Красногорск, село Ильинкое,
                                Экспериментальная улица, 10
                            </div>
                        </div>
                        <div className="contact__info_data">
                            <img src={messageIcon} alt="location icon" />
                            <div className="dataContact">
                                <span className="dataContact_headText">
                                    Наша почта:
                                </span>
                                auto.wash@gmail.com
                            </div>
                        </div>
                    </div>

                    <div className="contact__info_additionally">
                        <button className="btn btn-contact">ЗАБРОНИРОВАТЬ СТОЛ</button>

                        <div className="phoneInfo">
                            <a href="tel:+79175105759" className="telLink">+7 (917) 510-57-59</a>

                            <span>Звоните или оставляйте заявку</span>
                        </div>
                    </div>

                    <div className="contact__info_social">
                        <div className="contact__info_socialHeadText">Мы в соц сетях:</div>
                        <div className="socialIcons">
                            <img src={facebookIcon} alt="facebook icon" />
                            <img src={vkIcon} alt="vk icon" />
                            <img src={youtubeIcon} alt="youtube icon" />
                            <img src={instagramIcon} alt="instagram icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AppContact;