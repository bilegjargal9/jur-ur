import React, { useDebugValue } from "react";
import "../Styles/contact.css";
import Button from "./Button";
import  Map  from "./Map";
import images from "../Components/ImageClass";
class Contact extends React.Component{
    render(){
        return(
            <div className="page-contact">
                <div className="head-contact">
                    <h5 className="pacifico-title">Бид нэг гэр бүл</h5>
                    <h5 className="casual-title">Холбогдох</h5>
                </div>

                <div className="feedback-section-contact">
                    <div className="feedback-box-contact">
                        <p>Санал хүсэлт илгээх</p>
                        <form action="" className="feedback">
                            <input type="text" name="name" placeholder="Таны Нэр" id="name"/>
                            <input type="email" name="email" id="email" placeholder="Имэйл Хаяг"/>
                            <textarea name="question" id="question" placeholder="Асуулт*"></textarea>
                            <Button name={"Илгээх"} position={{left:"82%", top:"92%"}}></Button>
                        </form>
                    </div>
                    <div className="googlemap-contact">
                        <Map location={{geocode:[47.904619010734336, 106.86365002839617], popUp:"Төв Үйлдвэр"}}/>
                    </div>
                </div>




                <div className="meetus-contact">
                    <div className="meetus-item-contact">
                        <img src={images.locationlogo} alt="logo-location"/>
                        <div className="contact-context">
                            <h4>Төв оффис:</h4>
                            <p>Жүр үр Төв салбар - Баянгол дүүрэг, 3-р хороолол /Өргөө кино театрын зүүн талд/</p>
                        </div>
                    </div>
                    <div className="meetus-item-contact">
                    <img src={images.mail} alt="logo-location"/>
                        <div className="contact-context">
                            <h4>Имэйл хаяг:</h4>
                            <p>hr@jurur.mn</p>
                        </div>
                    </div>
                    <div className="meetus-item-contact">
                    <img src={images.locationlogo} alt="logo-location"/>
                        <div className="contact-context">
                            <h4>Төв үйлдвэр:</h4>
                            <p>Жүр үр Төв үйлдвэр - Хан-Уул дүүрэг, 3-р хороо /Говийн үйлдвэрийн баруун хойно/</p>
                        </div>
                    </div>
                </div>

                <div className="article1-contact">
                    <h5 className="casual-title">Хүний нөөцтэй холбогдох</h5>
                </div>

                <div className="hr-container-contact">
                    <div className="hr-contact">
                        <div className="hr-contact-top">
                            <div className="meetus-item-contact">
                            <img src={images.mail} alt="logo-location"/>
                                <div className="contact-context">
                                    <h4>Имэйл хаяг:</h4>
                                    <p>hr@jurur.mn</p>
                                </div>
                            </div>
                            <div className="meetus-item-contact">
                                <img src={images.dial} alt="logo-location"/>
                                    <div className="contact-context">
                                        <h4>Утасны дугаар:</h4>
                                        <p>(976) 7575-7510</p>
                                    </div>
                            </div>
                        </div>
                        <h5>Ажилд орох</h5>
                        <div className="hr-item-contact">
                            <img src={images.minijurur} alt="logo-location"/>
                                <div className="contact-context">
                                    <h4>Төв Үйлдвэр</h4>
                                    <p>jurur.mn</p>
                                </div>
                            <button className="hrButton" onClick={()=>{window.open('https://www.cognitoforms.com/HRJurUr/TovUildverJurUrOnlineAnket/', '_blank', 'noopener,noreferrer')}}>Анкет бөглөх</button>
                        </div>
                        <h6>Бусад салбар</h6>
                        <div className="hr-item-contact">
                            <img src={images.zangia} alt="logo-location"/>
                                <div className="contact-context">
                                    <h4>Зангиа МН</h4>
                                    <p>zangia.mn/company/jururxxk</p>
                                </div>
                            <button className="hrButton" onClick={()=>{window.open("https://www.zangia.mn/company/jururxxk")}}>Ажлын зар харах</button>
                        </div>
                        <div className="hr-item-contact">
                            <img src={images.worki} alt="logo-location"/>
                                <div className="contact-context">
                                    <h4>Worki</h4>
                                    <p>worki.mn/company/Jurur</p>
                                </div>
                            <button className="hrButton" onClick={()=>{window.open("https://worki.mn/company/69694115701326?tab=0")}}>Ажлын зар харах</button>
                        </div>
                        <div className="hr-item-contact">
                            <img src={images.minijurur} alt="logo-location"/>
                                <div className="contact-context">
                                    <h4>Жүр үр HR</h4>
                                    <p>facebook.com/JURURHR</p>
                                </div>
                            <button className="hrButton" onClick={()=>{window.open("https://www.facebook.com/JURURHR")}}>Ажлын зар харах</button>
                        </div>

                    </div>
                    <div className="banner-contact">
                        <img src={images.hrbanner} alt="hr-banner" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;