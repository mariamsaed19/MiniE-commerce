import LookBook from "./LookBook";
import FurnitureContext from "../../../context/furniture-context";
import { useContext } from "react";
import "./ProductInfo.scss";
const ProductInfo = () => {
  const ctx = useContext(FurnitureContext);
  return (
    <div className="info-holder">
      <div className="intro">
        <h4> Intro </h4>
        <p>{ctx.currentProduct.info.intro}</p>
      </div>
      <div className="description-holder">
        <h4>Product Information </h4>
        <h2> Dimensions</h2>
        <text>{ctx.currentProduct.info.dim}</text>
        <hr className="divider-line" />
        <h2> Materials</h2>
        <text>
          <ul>
            {ctx.currentProduct.info.material.map((item) => {
              return <li key={Math.random()}> {item} </li>;
            })}
          </ul>
        </text>
        <hr className="divider-line" />
        <h2> Good to Know</h2>
        <text> {ctx.currentProduct.info.toKnow}</text>
        <hr className="divider-line" />
      </div>
      <LookBook />
    </div>
  );
};

export default ProductInfo;
