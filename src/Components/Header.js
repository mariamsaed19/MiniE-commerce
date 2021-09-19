import { useHistory } from "react-router";
import "./Header.scss";
import shopIcon from "../assets/shop_icon.png";
const Header = () => {
  let history = useHistory();
  const handleclick = () => {
    history.push("/");
  };
  return (
    <div className="header">
      <span className="title" onClick={handleclick}>
        The Furnish
      </span>
      <span className="shop"> shop </span>
      <span className="collection">collection </span>
      <img className="icon" src={shopIcon} alt="shooping icon" />
    </div>
  );
};

export default Header;
