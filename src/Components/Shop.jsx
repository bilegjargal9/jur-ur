import React from "react";
import "../Styles/Shop.css";
import Shop_cat from "./Shop_cat";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: null };
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  render() {
    const categories = [
      { id: "new_products", name: "Шинэ Бүтээгдэхүүн" },
      { id: "happy_cake", name: "Аз Жаргалын Бялуу" },
      { id: "brand_cake", name: "Брэнд Бялуу" },
      { id: "bread", name: "Талх, Нарийн Боов" },
      { id: "salat_sandwich", name: "Слат, Сэндвич" },
      { id: "dessert", name: "Дессерт" },
      { id: "drinks", name: "Уух Зүйлс" },
    ];

    return (
      <div className="shop">
        <div className="article-shop">
          <h5 className="pacifico-title">Бүтээгдэхүүн</h5>
          <h5 className="casual-title">Шилдэг борлуулалттай бүтээгдэхүүн</h5>
        </div>
        <div className="article2-shop">
          <h5 className="casual-title">Онцлох бүтээгдэхүүн</h5>
        </div>
        <div className="category-container-shop">
          <div className="category-sidebar-shop">
            <div className="cat-title-shop">
              <div className="casual-title category-sidebar-title-shop">Категори</div>
            </div>

            
            {categories.map((category) => (
              <label key={category.id} className="cat-sidebar-item-shop custom-radio">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={this.state.selectedCategory === category.id}
                  onChange={this.handleCategory}
                  className="custom-radio-input"
                />
                <span className="custom-radio-box"></span>
                {category.name}
              </label>
            ))}
          </div>

          <div className="category-shop">
            <Shop_cat category={this.state.selectedCategory} />
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
