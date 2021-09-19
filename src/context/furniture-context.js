import React from "react";
import { useState } from "react";
const top=[
  {
    id: "h3",
    background: "#F5F5F5",
    title: "The mine",
    type:"Working chair",
    span: 1,
    image: "h3.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$180",
  },
  {
    id: "h4",
    background: "#F5F5F5",
    title: "Ingrid",
    type:"Working chair",
    span: 1,
    image: "h4.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$120",
  },
  {
    id: "h6",
    background: "#EBD9D9",
    title: "Leifarne",
    type:"Dining chair",
    span: 2,
    image: "h6.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$280",
  }
]
;
const dummy_furniture = [
  {
    id: "h4",
    background: "#F5F5F5",
    title: "Ingrid",
    type:"dining chair",
    span: 1,
    image: "h4.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$180",
  },
  {
    id: "ch1",
    background: "#F5F5F5",
    title: "Shell",
    type:"dining chair",
    span: 1,
    image: "ch1.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$180",
  },
  {
    id: "h6",
    background: "#ADD4FF",
    title: "Leifarne",
    type:"dining chair",
    span: 1,
    image: "h6.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$280",
  },
  {
    id: "co1",
    background: "#EBD9D9",
    title: "Gronlid",
    type:"dining chair",
    span: 2,
    image: "co1.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$180",
  },
  {
    id: "ch2",
    background: "#F5F5F5",
    title: "Ekibol",
    type:"dining chair",
    span: 1,
    image: "ch2.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$180",
  },
  {
    id: "h5",
    background: "#F5F5F5",
    title: "Lallerod",
    type:"dining chair",
    span: 1,
    image: "h5.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$180",
  },
  {
    id: "co2",
    background: "#E6E2F0",
    title: "Vejmon",
    type:"dining chair",
    span: 2,
    image: "co2.png",
    info: {
      intro:
        "Simple, timeless design that’s still going strong after 40 years in our stores. It’s loved by all ages so we made a grown-up size and a children’s size.",
      dim: "52 x 50 x 88 cm. ",
      material: ["Polypropylene plastic", "Aluminium", "Solid birch"],
      toKnow: "Wipe clean with a cloth dampened in a mild cleaner.",
    },
    price: "$180",
  },
];
const FurnitureContext = React.createContext({
  currentProduct: {},
  setCurrentProduct: () => {},
  dummy_furniture: [],
  top:[]
});

export const FurnitureProvider = (props) => {
  const [currentProduct, setCurrentProduct] = useState({});
  return (
    <FurnitureContext.Provider
      value={{
        currentProduct,
        setCurrentProduct,
        dummy_furniture,
        top
      }}
    >
      {props.children}
    </FurnitureContext.Provider>
  );
};

export default FurnitureContext;
