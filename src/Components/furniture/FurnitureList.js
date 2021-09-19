import FurnitureCard from "./FurnitureCard";
import { useHistory } from "react-router-dom";
import "./FurnitureList.scss";
import Button from "../Buttons/Button";
import { useContext } from "react";
import FurnitureContext from "../../context/furniture-context";

const FurnitureList = () => {
  let history = useHistory();
  const ctx = useContext(FurnitureContext);
  function handleClick(item) {
    history.push("/product");
    ctx.setCurrentProduct(item);
  }
  return (
    <div className="container">
      <div className="listcontainer">
        {ctx.dummy_furniture.map((item) => {
          return <FurnitureCard key={item.id} item={item} onClick={handleClick.bind(null,item)} />;
        })}
      </div>
      <Button text= "View more" background="#F5F5F5"/>
    </div>
  );
};
export default FurnitureList;
