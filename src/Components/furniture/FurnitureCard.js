import ShowButton from "../Buttons/ShowButton";
import "./FurnitureCard.scss";
const FurnitureCard = (props) => {
  const image = require(`../../assets/${props.item.image}`).default
  return (
    <div
      className="card"
      style={{
        background: props.item.background,
        gridColumn: `span ${props.item.span}`,
      }}
    >
      <div className="f-title"> {props.item.title} </div>
      <img src={image} className="f-img" alt="furniture" style={{width : props.item.span === 1 ?"292px": "600px"}} />
      <ShowButton onClick={props.onClick}/>
    </div>
  );
};

export default FurnitureCard;
