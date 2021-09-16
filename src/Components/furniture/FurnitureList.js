import { Fragment } from "react";
import FurnitureCard from "./FurnitureCard";
import "./FurnitureList.scss"
const dummy_furniture =[
    {
        id: "h4",
        background: "#F5F5F5",
        title:"Ingrid",
        span:1,
        image: "h4.png",

    },
    {
        id: "ch1",
        background: "#F5F5F5",
        title:"Shell",
        span:1,
        image: "ch1.png",

    },
    {
        id: "h6",
        background: "#ADD4FF",
        title:"Leifarne",
        span:1,
        image: "h6.png",

    },
    {
        id: "co1",
        background: "#EBD9D9",
        title:"Gronlid",
        span:2,
        image: "co1.png",

    },
    {
        id: "ch2",
        background: "#F5F5F5",
        title:"Ekibol",
        span:1,
        image: "ch2.png",

    },
    {
        id: "h5",
        background: "#F5F5F5",
        title:"Lallerod",
        span:1,
        image: "h5.png",

    },
    {
        id: "co2",
        background: "#E6E2F0",
        title:"Vejmon",
        span:2,
        image: "co2.png",

    }


]
const FurnitureList = () =>{
    return(
        <Fragment>
            <div className="container"> 
            
            {dummy_furniture.map(item => {
               return <FurnitureCard key= {item.id} item = {item}/>
            })}
            </div>
            <button> show more </button>
        </Fragment>
    );
}
export default FurnitureList;