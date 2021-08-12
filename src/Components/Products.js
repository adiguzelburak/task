/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "../Style/products.scss";
import burgerIcon from "../images/burger-icon.svg";
import productList from "../productList";
import { useState } from "react";
const Products = () => {
  // states
  const [total, setTotal] = useState();

  const handlePrice = (price) => {
    setTotal(price + price);
  };
  console.log(total);
  return (
    <div>
      <div className="city-filter">
        ÇiçekSepeti {">"} İstanbul {"> "}
        <label className="city-filter-lbl">ÇiçekSepetiBreadCrumb</label>
        <div className="categories-box">
          <img className="burger-icon" src={burgerIcon}></img>
          <label className="categories-title">Kategoriler</label>
        </div>
        <div className="categories">
          <div>
            <button className="categories-button">Tüm Kategoriler</button>
          </div>
        </div>
      </div>

      <div className="all-product-list">
        {productList.map((item) => (
          <div className="card">
            <img
              src={item.photo}
              className="card-img-top product-photo"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title product-title">{item.name}</h5>
              <p className="card-text product-shipping">
                {item.shipping !== "" ? item.shipping : ""}
              </p>
              <p className="card-text product-price">{item.price}</p>
              <a
                id="mesut"
                onClick={() => handlePrice(item.price)}
                className="btn btn-primary"
              >
                Sepete Ekle
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
