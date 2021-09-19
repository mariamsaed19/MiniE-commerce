import "./Carousal.scss"
const Carasoul = (props)=>{
  const items =[];
  for(let i = 1;i<3;i++){
    items.push(<button key={i} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} aria-label={`Slide ${i+1}`}></button>)
  }
  
//images list
return(

 <div id="carouselExampleIndicators" className="carousel slide holder" data-bs-ride="carousel" style={{background:props.background}} >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    {items}
  </div>
  <div className="carousel-inner">
    {props.children}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

);
}

export default Carasoul;