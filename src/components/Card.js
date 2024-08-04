import React from "react";
import Price from "./Price";

function Card({title,content,price}) {
  // let {title,content} = props
  return (
    <div  className="p-2 border rounded shadow-lg text-dark">
      <h1>{title}</h1>
      <img
        className="img-fluid"
        src="https://picsum.photos/seed/picsum/200/300"
      ></img>
      <p>{content}</p>
      <button className="btn btn-info text-white">Click Here<Price price={price}/></button>
    </div>
  );
}

export default Card;
