/* eslint-disable jsx-a11y/alt-text */
import "../Style/navbar.scss";
import navbarLogo from "../images/logo.svg";
import searchIcon from "../images/search-icon.svg";
import basketIcon from "../images/basket.svg";
import lightning from "../images/lightning.svg";
import { useEffect, useState } from "react";
const Navbar = (props) => {
  const [popup, setPopup] = useState(false);
  const [moreProduct, setMoreProduct] = useState(true);
  const [shipping, setShipping] = useState(false);

  useEffect(() => {
    if (props.freeShipping !== 500) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }, [props.freeShipping]);
  const changePopup = () => {
    setShipping(true);
    setMoreProduct(false);
  };
  return (
    <div>
      <div className="navbar-box">
        <div className="navbar-container">
          <img className="navbar-logo" src={navbarLogo}></img>
          <div className="navbar-basket-mobile">
            {"Toplam: " + props.total + " TL"}
          </div>
        </div>
        <div className="navbar-filter">
          <img className="search-icon" src={searchIcon}></img>
          <input className="search-input" placeholder="Ürün Ara"></input>
          <button className="search-button">Ara</button>
        </div>
        <div className="navbar-basket-box">
          <div className="navbar-basket">
            <img className="navbar-basket-icon" src={basketIcon}></img>
            <button className="basket-label">Sepetim</button>
          </div>
          {popup && (
            <div className="popup">
              {moreProduct && (
                <div className="pop-up-text">
                  {" "}
                  <img src={lightning}></img>{" "}
                  <div>
                    {props.freeShipping < 0
                      ? changePopup()
                      : props.freeShipping.toFixed(2)}{" "}
                    TL
                  </div>{" "}
                  ürün daha ekleyin kargo bedava
                </div>
              )}
              {shipping && <div className="pop-up-text">Kargonuz Bedava</div>}
            </div>
          )}
        </div>
      </div>
      <div className="title-box">
        <h1 className="title-lbl">ÇiçekSepeti</h1>
      </div>
    </div>
  );
};

export default Navbar;
