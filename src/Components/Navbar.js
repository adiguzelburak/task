/* eslint-disable jsx-a11y/alt-text */
import "../Style/navbar.scss";
import navbarLogo from "../images/logo.svg";
import searchIcon from "../images/search-icon.svg";
import basketIcon from "../images/basket.svg";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-box">
        <div className="navbar-container">
          <img className="navbar-logo" src={navbarLogo}></img>
          <div className="navbar-basket-mobile"></div>
        </div>
        <div className="navbar-filter">
          <img className="search-icon" src={searchIcon}></img>
          <input className="search-input" placeholder="Ürün Ara"></input>
          <button className="search-button">Ara</button>
        </div>
        <div className="navbar-basket">
          <img className="navbar-basket-icon" src={basketIcon}></img>
          <button className="basket-label">Sepetim</button>
        </div>
      </div>
      <div className="title-box">
        <h1 className="title-lbl">ÇiçekSepeti</h1>
      </div>
    </div>
  );
};

export default Navbar;
