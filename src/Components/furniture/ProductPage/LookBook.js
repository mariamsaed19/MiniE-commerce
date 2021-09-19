import "./LookBook.scss"
const LookBook = () => {
  return (
    <div className="lookbook-holder">
      <div className="lookbook-img">
        <img
          src={require("../../../assets/lookbook.png").default}
          alt="..."
        />
      </div>
      <div className="lookbook-icons">
        <img src={require("../../../assets/fb.png").default} alt="..." />
        <img src={require("../../../assets/twitter.png").default} alt="..." />
        <img src={require("../../../assets/pintrest.png").default} alt="..." />
      </div>
    </div>
  );
};
export default LookBook;
