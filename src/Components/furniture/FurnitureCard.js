import "./FurnitureCard.scss";
const FurnitureCard = (props) => {
  const image = require(`../../assets/${props.item.image}`).default
 // console.log(props.item.id)
  return (
    <div
      className="card"
      style={{
        background: props.item.background,
        gridColumn: `span ${props.item.span}`,
      }}
    >
      <div className="f-title"> {props.item.title} </div>
      <img src={image} className="f-img" alt="furniture" />
      <button className="bu"> show more </button>
    </div>
  );
};

export default FurnitureCard;
