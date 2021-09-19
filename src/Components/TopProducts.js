import { Fragment } from "react";
import { useContext } from "react";
import FurnitureContext from "../context/furniture-context";
import "./Top.scss";
const TopProducts = () => {
  const ctx = useContext(FurnitureContext);
  const items = [];
  for (let i = 1; i < 3; i++) {
    items.push(<div className="carousel-item" key={i}>
    <div>
      <img
        src={require(`../assets/${ctx.top[i].image}`).default}
        className="d-block w-100 top-img"
        alt="..."
      />
      <div className="top-holder">
        <div className="product-type"> {ctx.top[i].type}</div>
        <div className="product-name top-name"> {ctx.top[i].title}</div>
        <div className="product-price"> {ctx.top[i].price} </div>
        <button className="product-buy top-buy"> Buy </button>
      </div>
    </div>
  </div>);
  }
  return (
      <Fragment>
    <div className="carousel-item active">
      <div>
        <img
          src={require(`../assets/${ctx.top[0].image}`).default}
          className="d-block w-100 top-img"
          alt="..."
        />
        <div className="top-holder">
          <div className="product-type"> {ctx.top[0].type}</div>
          <div className="product-name top-name"> {ctx.top[0].title}</div>
          <div className="product-price"> {ctx.top[0].price} </div>
          <button className="product-buy top-buy"> Buy </button>
        </div>
      </div>
    </div>
    {items}
    </Fragment>
  );
};

export default TopProducts;
