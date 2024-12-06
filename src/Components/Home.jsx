import React from 'react';
import '../Styles/home.css';
import banner from '../images/banner.png';
import hero from '../images/hero.jpg';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item5 from '../images/item5.jpg';
import item6 from '../images/item6.jpg';
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

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="banner-home">
          <img className="banner" src={banner} alt="Banner" />
          <div className="heroshop-home">

            <img src={hero} alt="Hero" />
            <h2>Шоколадтай жигнэмэг</h2>
            <p>Шоколад, Алмонд самартай жигнэмэг</p>
            <button>Цааш үзэх</button>
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
            <button>Цааш үзэх</button>
          </div>
          <div className="_002A">
            <img src={jimstei} alt="jimstei" />
            <div className="info">
              <h3>Шинэ бүтээгдэхүүн</h3>
              <p>Бор жигнэмэг юм шиг байна</p>
            </div>
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
              <h3>Шинэ бүтээгдэхүүн</h3>
              <p>Бор жигнэмэг юм шиг байна</p>
              <button>Цааш үзэх</button>
            </div>
          </div>
        </div>

        <div className="heads-home">
          <h1>Бест селлер</h1>
          <h2>Бүтээгдэхүүний төрөл</h2>
        </div>

        <div className="bestseller-home">
          {[item1, item2, item3, jimstei, item5, item6].map((item, idx) => (
            <div className="item" key={idx}>
              <img className="bestshop" src={item} alt={`Item ${idx + 1}`} />
              <h2>Бүтээгдэхүүн {idx + 1}</h2>
            </div>
          ))}
        </div>

        <div className="banner2-home">
          <div className="zurag1-home">
            <img src={bagts} alt="Bagts" />
            <h3>Нимбэгтэй тарт + Нимбэгтэй пирог</h3>
            <button>Цааш үзэх</button>
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
            <h1>Halloween special...</h1>
            <button>Цааш үзэх</button>
          </div>
        </div>

        <div className="heads-home">
          <h1>Бидэнтэй нэгдэх</h1>
          <h2>Нөхөрсөг хамт олон таныг хүлээж байна</h2>
        </div>

        <div className="banner2-home">
          {[hr1, hr2].map((img, idx) => (
            <div className={`zurag${idx + 5}-home`} key={idx}>
              <img src={img} alt={`HR ${idx + 1}`} />
              <button onClick={() => window.open("https://jurur.mn", "_blank", "noopener,noreferrer")}>
                Анкет бөглөх
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
