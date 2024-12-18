import React from 'react';
import '../Styles/home.css';
import banner from '../images/banner.png';
import hero from '../images/hero.jpg';
import alag from '../images/alag.png';
import jimstei from '../images/jimstei.png';
import byluu from '../images/byluu.png';
import keks from '../images/Keks.png';
import cup from '../images/cup.png';
import bagts from '../images/bagts.png';
import branch from '../images/branch.jpg';
import best3 from '../images/best3.png';
import halloween from '../images/halloween.png';
import hr1 from '../images/hr1.jpg';
import hr2 from '../images/hr2.jpg';
import Shop_cat from './Shop_cat';
import { useNavigate } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate(path) {
    const { navigate } = this.props;
    navigate(path);
  }

  render() {
    return (
      <div className="home">
        <div className="banner-home">
          <img className="banner" src={banner} alt="Banner" />
          <div className="heroshop-home">
            <img src={hero} alt="Hero" />
            <h2>Шоколадтай жигнэмэг</h2>
            <p>Шоколад, Алмонд самартай жигнэмэг</p>
            <button onClick={() => this.handleNavigate('/item/36')}>Цааш үзэх</button>
          </div>
        </div>

        <div className="head-home">
          <h1>Амтлаг, Чанартай, Үргэлж шинэ</h1>
          <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

        <div className="category-home">
          <div className="_001A">
            <img src={alag} alt="Alag" />
            <div className="info">
              <h3>Шинэ бүтээгдэхүүн</h3>
              <p>Бор жигнэмэг юм шиг байна</p>
            </div>
            <button onClick={() => this.handleNavigate('/item/35')}>Цааш үзэх</button>
          </div>
          <div className="_002A">
            <img src={jimstei} alt="Jimstei" />
          </div>
          <div className="_003A">
            <img src={byluu} alt="Byluu" />
          </div>
          <div className="_004A">
            <img src={keks} alt="Keks" />
          </div>
          <div className="_005A">
            <img src={cup} alt="Cup" />
            <div className="info1">
              <h3>Төрөл бүрийн бүтээгдэхүүн</h3>
              <p>Таны амтанд тохирно</p>
              <button onClick={() => this.handleNavigate('/products')}>Цааш үзэх</button>
            </div>
          </div>
        </div>

        <div className="heads-home">
          <h1>Бест селлер</h1>
          <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

        <div className="bestseller-home">
          <Shop_cat category="new_products" />
        </div>

        <div className="banner2-home">
          <div className="zurag1-home">
            <img src={bagts} alt="Bagts" />
            <h3>Нимбэгтэй тарт + Нимбэгтэй пирог</h3>
            <button onClick={() => this.handleNavigate('item/26')}>Цааш үзэх</button>
          </div>
          <div className="zurag2-home">
            <img src={branch} alt="Branch" />
          </div>
        </div>

        <div className="banner2-home">
          <div className="zurag3-home">
            <img src={best3} alt="Best" />
          </div>
          <div className="zurag4-home">
            <img src={halloween} alt="Halloween" />
            <h1>Halloween Special...</h1>
            <button onClick={() => this.handleNavigate('/item/18')}>Цааш үзэх</button>
          </div>
        </div>

        <div className="heads-home">
          <h1>Бидэнтэй нэгдэх</h1>
          <h2 className="spe">Нөхөрсөг хамт олон таныг хүлээж байна</h2>
        </div>

        <div className="banner2-home">
          {[hr1, hr2].map((img, idx) => (
            <div className={`zurag${idx + 5}-home`} key={idx}>
              <img src={img} alt={`HR ${idx + 1}`} />
              <button onClick={() => window.open('https://jurur.mn', '_blank', 'noopener,noreferrer')}>
                Анкет бөглөх
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default function WrapperHome() {
  const navigate = useNavigate();
  return <Home navigate={navigate} />;
}
