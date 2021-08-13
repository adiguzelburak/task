/* eslint-disable no-lone-blocks */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "../Style/products.scss";
import burgerIcon from "../images/burger-icon.svg";
import redMoto from "../images/red-moto.png";
import giftBox from "../images/gift-box.png";
import stationary from "../images/stationary.png";
import greenTick from "../images/green-tick.svg";
import productList from "../productList";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
const Products = () => {
  // states
  const [categorie, setCategorie] = useState("");
  const [filtredCategorie, setFiltredCategorie] = useState(false);
  const [allCategories, setAllCategories] = useState(true);
  const [total, setTotal] = useState(0);
  const [freeShipping, setFreeShipping] = useState(500);

  const changeAllCategorie = () => {
    setFiltredCategorie(false);
    setAllCategories(true);
  };

  const changeFiltredCategorie = (x) => {
    setCategorie(x);
    setFiltredCategorie(true);
    setAllCategories(false);
  };

  const totalPrice = (price) => {
    setTotal(total + price);
  };

  useEffect(() => {
    setFreeShipping(500 - total);
  }, [total]);


  return (
    <div>
      <Navbar freeShipping={freeShipping} total={total} />
      <div className="city-filter">
        ÇiçekSepeti {">"} İstanbul {"> "}
        <label className="city-filter-lbl">ÇiçekSepetiBreadCrumb</label>
        <div className="categories-box">
          <img className="burger-icon" src={burgerIcon}></img>
          <label className="categories-title">Kategoriler</label>
        </div>
        <div className="categories">
          <button
            onClick={() => changeFiltredCategorie("toy")}
            className="categories-button"
          >
            Oyuncak
          </button>
          <button
            onClick={() => changeFiltredCategorie("flowers")}
            className="categories-button"
          >
            Çiçek
          </button>
          <button
            onClick={() => changeFiltredCategorie("accessory")}
            className="categories-button"
          >
            Aksesuar
          </button>
          <button
            onClick={() => changeFiltredCategorie("gift")}
            className="categories-button"
          >
            Hediyelik Eşya
          </button>
          <button
            onClick={() => changeFiltredCategorie("parfume")}
            className="categories-button"
          >
            Parfüm
          </button>
          <button
            onClick={() => changeFiltredCategorie("homeAccessories")}
            className="categories-button"
          >
            Ev Eşyaları
          </button>
          <button
            onClick={() => changeFiltredCategorie("technology")}
            className="categories-button"
          >
            Teknoloji
          </button>
        </div>
      </div>
      <div className="all-categories">
        <img className="green-tick" src={greenTick}></img>
        <label onClick={changeAllCategorie} className="all-categories-label">
          Tüm Kategoriler
        </label>
      </div>
      {filtredCategorie && (
        <div className="all-product-list">
          {productList
            .filter((x) => (x.categories === categorie ? x : ""))
            .map((item) => (
              <div className="card">
                <img
                  src={item.photo}
                  className="card-img-top product-photo"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title product-title">{item.name}</h5>
                  <p className="card-text product-shipping">
                    {item.shipping !== "" ? item.shipping : "-"}
                  </p>
                  <p className="card-text product-price">{item.price}</p>
                  <button
                    onClick={() => totalPrice(item.price)}
                    className="product-button"
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
      {allCategories && (
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
                  {item.shipping !== "" ? item.shipping : "-"}
                </p>
                <p className="card-text product-price">{item.price}</p>
                <button
                  className="product-button"
                  onClick={() => totalPrice(item.price)}
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
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
