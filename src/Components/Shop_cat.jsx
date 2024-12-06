import React from "react";
import { ProductModels } from "../modelData/products";
import { findImage } from "../images/imageExport";
import { Navigate } from "react-router-dom";
import LoadingGif from "../Styles/Magnify@1x-1.0s-200px-200px (1).gif";

class Shop_cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      navigateTo: null,
      category: this.props.category,
      isLoading: false,
      isNavigating: false, 
    };
    this.categoryHandler = this.categoryHandler.bind(this);
  }

  fetchProducts(category) {
    this.setState({ isLoading: true });
    setTimeout(() => {
      if (category) {
        const products = ProductModels.categoryProducts(category);
        this.setState({ products, isLoading: false });
      } else {
        this.setState({ products: [], isLoading: false });
      }
    }, 500);
  }

  componentDidMount() {
    this.fetchProducts(this.props.category);
  }

  categoryHandler(event) {
    const category = event.currentTarget.dataset.category;
    this.setState({ category }, () => {
      this.fetchProducts(category);
    });
  }

  componentDidUpdate(prevProps) {
    
    if (prevProps.category !== this.props.category) {
      this.setState({ category: this.props.category });
      this.fetchProducts(this.props.category);
    }
  }

  toItemInfo = (productId) => {
    this.setState({ isNavigating: true });
    setTimeout(() => {
      this.setState({ navigateTo: `/item/${productId}` });
    }, 1000); 
  };

  render() {
    const { isLoading, isNavigating, navigateTo, category, products } = this.state;

    if (navigateTo) {
      return <Navigate to={navigateTo} />;
    }

    if (isNavigating) {
      return (
        <div className="loading-page">
          <img src={LoadingGif} alt="Loading..." />
          <p>Ачааллаж байна...</p>
        </div>
      );
    }

    return (
      <div className="category-shop">
        {isLoading ? (
          <div className="loading-item-shop">
            <img src={LoadingGif} alt="Loading..." />
            <p>Ачааллаж байна...</p>
          </div>
        ) : (
          <div className="cat-item-container">
            {!category
              ? [
                  <div
                    className="category-item-shop"
                    data-category="new_products"
                    onClick={this.categoryHandler}
                  >
                    <img
                      src={findImage(ProductModels.categoryProducts("new_products")[0]?.picture_path)}
                    />
                    <p className="category-item-title-shop">Шинэ Бүтээгдэхүүн</p>
                  </div>,
                  <div
                    className="category-item-shop"
                    data-category="happy_cake"
                    onClick={this.categoryHandler}
                  >
                    <img
                      src={findImage(ProductModels.categoryProducts("happy_cake")[0]?.picture_path)}
                    />
                    <p className="category-item-title-shop">Аз Жаргалын Бялуу</p>
                  </div>,
                  <div
                    className="category-item-shop"
                    data-category="brand_cake"
                    onClick={this.categoryHandler}
                  >
                    <img
                      src={findImage(ProductModels.categoryProducts("brand_cake")[0]?.picture_path)}
                    />
                    <p className="category-item-title-shop">Брэнд Бялуу</p>
                  </div>,
                  <div
                    className="category-item-shop"
                    data-category="bread"
                    onClick={this.categoryHandler}
                  >
                    <img
                      src={findImage(ProductModels.categoryProducts("bread")[0]?.picture_path)}
                    />
                    <p className="category-item-title-shop">Талх, Нарийн Боов</p>
                  </div>,
                  <div
                    className="category-item-shop"
                    data-category="salat_sandwich"
                    onClick={this.categoryHandler}
                  >
                    <img
                      src={findImage(ProductModels.categoryProducts("salat_sandwich")[0]?.picture_path)}
                    />
                    <p className="category-item-title-shop">Слат, Сэндвич</p>
                  </div>,
                  <div
                    className="category-item-shop"
                    data-category="dessert"
                    onClick={this.categoryHandler}
                  >
                    <img
                      src={findImage(ProductModels.categoryProducts("dessert")[0]?.picture_path)}
                    />
                    <p className="category-item-title-shop">Дессерт</p>
                  </div>,
                  <div
                    className="category-item-shop"
                    data-category="drinks"
                    onClick={this.categoryHandler}
                  >
                    <img
                      src={findImage(ProductModels.categoryProducts("drinks")[0]?.picture_path)}
                    />
                    <p className="category-item-title-shop">Уух Зүйлс</p>
                  </div>,
                ]
              : products.map((product) => (
                  <div
                    className="category-item-shop"
                    key={product._id}
                    onClick={() => this.toItemInfo(product._id)}
                  >
                    <img src={findImage(product.picture_path)} alt={product.name} />
                    <div className="category-item-title-shop">{product.name}</div>
                  </div>
                ))}
          </div>
        )}
      </div>
    );
  }
}

export default Shop_cat;
