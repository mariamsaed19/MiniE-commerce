import "./InfoPage.scss";
import ProductInfo from "./ProductInfo";
import Carousal from "../../Carousal";
import { useContext } from "react";
import FurnitureContext from "../../../context/furniture-context";
const InfoPage = () => {
  const ctx = useContext(FurnitureContext);
  const items = [];
  for (let i = 0; i<3; i++) {
    items.push(
      <div class="carousel-item" key= {i}>
        <div className="product-holder">
          <img
            className="product-img"
            src={require(`../../../assets/${ctx.currentProduct.image}`).default}
            class="d-block w-100"
            alt="..."
          />
          <div className="product-type"> {ctx.currentProduct.type}</div>
          <div className="product-name"> {ctx.currentProduct.title} </div>
          <button className="product-buy"> Buy </button>
          <div className="product-price"> {ctx.currentProduct.price} </div>
        </div>
      </div>
    );
  }
  //background= {ctx.currentProduct.background}
  return (
    <div className="page-container">
      <Carousal style={{background:ctx.currentProduct.background}}>
        <div class="carousel-item active">
          <div className="product-holder">
            <img
              className="product-img"
              src={require(`../../../assets/${ctx.currentProduct.image}`).default}
              class="d-block w-100"
              alt="..."
            />
          <div className="product-type"> {ctx.currentProduct.type}</div>
          <div className="product-name"> {ctx.currentProduct.title} </div>
          <button className="product-buy"> Buy </button>
          <div className="product-price"> {ctx.currentProduct.price} </div>
          </div>
        </div>
        {items}
      </Carousal>
      <ProductInfo />
    </div>
  );
};

export default InfoPage;
