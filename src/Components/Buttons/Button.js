import "./Button.scss"
const Button = (props) => {
  return (
    <button
      className="customBtn"
      style={{ background: props.background }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
