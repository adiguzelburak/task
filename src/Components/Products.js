/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "../Style/products.scss";
import burgerIcon from "../images/burger-icon.svg";
import redMoto from "../images/red-moto.png";
import giftBox from "../images/gift-box.png";
import stationary from "../images/stationary.png";
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
          <button className="categories-button">Oyuncak</button>
          <button className="categories-button">Çiçek</button>
          <button className="categories-button">Aksesuar</button>
          <button className="categories-button">Hediyelik Eşya</button>
          <button className="categories-button">Parfüm</button>
          <button className="categories-button">Ev Eşyaları</button>
          <button className="categories-button">Teknoloji</button>
        </div>
      </div>
      <div>
        <label className="all-categories">Tüm Kategoriler</label>
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
      <hr />
      <div className="offers">
        <div className="offer-box-red">
          <img className="offer-img" src={redMoto}></img>
          <div>
            <div className="offer-text">
              75 TL Üzerine Teslimat Ücreti Bizden
            </div>
            <button className="offer-button">Detaylı Bilgi</button>
          </div>
        </div>
        <div className="offer-box-blue">
          <img className="offer-img" src={giftBox}></img>
          <div>
            <div className="offer-text">
              Hediye Kategorisi için Sepette %15 İndirim
            </div>
            <button className="offer-button">Hediye Ürünleri</button>
          </div>
        </div>
        <div className="offer-box-green">
          <img className="offer-img" src={stationary}></img>
          <div>
            <div className="offer-text">
              Kırtasiye Kategorisi için Sepette %15 İndirim
            </div>
            <button className="offer-button">Detaylı Bilgi</button>
          </div>
        </div>
        <div className="offer-box"></div>
        <div className="offer-box"></div>
      </div>
    </div>
  );
};

export default Products;
