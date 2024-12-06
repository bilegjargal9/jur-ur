import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { ProductModels } from "../modelData/products";
import { findImage } from "../images/imageExport"; 
import '../Styles/iteminfo.css';

const ItemInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const product = ProductModels.productModel(id);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
  const [priceChanging, setPriceChanging] = useState(false);

  const suggestion = () => {
    const products = ProductModels.categoryProducts(product.category);
    return products.filter(p => p._id !== product._id).sort().slice(0, 4);
  };

  const handleSizeSelection = (index) => {
    setPriceChanging(true);
    setSelectedSizeIndex(index);
    setTimeout(() => setPriceChanging(false), 300);
  };

  const handleNavigate = (productId) => {
    setTimeout(() => {
      navigate(`/item/${productId}`); 
    }, 100); 
  };

  const suggestedProducts = suggestion();

  return (
    <div className="page-iteminfo">
      <div className="info-container-iteminfo">
        <img src={findImage(product.picture_path)} alt={product.name} />
        <div className="description-container-iteminfo">
          <div className="item-title-iteminfo">{product.name}</div>
          <div className={`item-price-iteminfo ${priceChanging ? "changing" : ""}`}>
            ₮ {selectedSizeIndex !== null ? product.price[selectedSizeIndex] : product.price[0]}
          </div>
          <div className="item-description-iteminfo">{product.description}</div>
          <div className="item-order-iteminfo">Захиалгын код: {product.order_code}</div>
          <div className="size-container-item">
            {product.size.map((size, index) => (
              <div
                key={index}
                className={`item-size-iteminfo ${selectedSizeIndex === index ? "selected" : ""}`}
                onClick={() => handleSizeSelection(index)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="casual-title">Санал болгох бүтээгдэхүүн</div>
      <div className="suggested-items">
        {suggestedProducts.map((prod, index) => (
          <div key={index} className="category-item-shop" onClick={() => handleNavigate(prod._id)}>
            <img src={findImage(prod.picture_path)} alt={prod.name} />
            <p className="category-item-title-shop">{prod.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemInfo;
