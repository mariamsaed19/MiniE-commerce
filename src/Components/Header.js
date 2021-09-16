import "./Header.scss"
import shopIcon from "../assets/shop_icon.png"
const Header = () => {
  return (
    <div className="header">
      <span className="title">The Furnish </span>
      <span className="shop"> shop </span>
      <span className="collection">collection </span>
      <img  className="icon" src={shopIcon} alt="shooping icon"/>
    </div >
  );
};

export default Header;
