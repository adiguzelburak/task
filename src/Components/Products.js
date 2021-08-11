/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "../Style/products.scss";
import burgerIcon from "../images/burger-icon.svg";
import productList from "../productList";
const Products = () => {
  return (
    // <div className="city-filter">
    //    ÇiçekSepeti {">"} İstanbul {"> "}
    //   <label className="city-filter-lbl">ÇiçekSepetiBreadCrumb</label>
    //   <div className="categories-box">
    //     <img className="burger-icon" src={burgerIcon}></img>
    //     <label className="categories-title">Kategoriler</label>
    //   </div>
    //   <div className="categories">
    //    <div>
    //       <button className="categories-button">
    //         Tüm Kategoriler
    //       </button>
    //     </div>
    //  </div>
    //   <div className="card">
    //   <img style="product-photo"/>
    //   <div className="card-body">
    //     <h5 className="card-title product-title">Card title</h5>
    //     <p className="card-text product-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //     <a href="#" className="btn btn-primary">
    //       Go somewhere
    //     </a>
    //   </div>
    // </div>

    <div className="all-product-list">
      {productList.map((e) => (
        <div className="card">
          <img
            src={e.photo}
            className="card-img-top product-photo"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title product-title">
              {e.name}
            </h5>
            <p className="card-text product-shipping">
              {e.shipping !== "" ? e.shipping : ""}
            </p>
            <p className="card-text product-price">{e.price}</p>
            <a href="#" className="btn btn-primary">
              Sepete Ekle
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
