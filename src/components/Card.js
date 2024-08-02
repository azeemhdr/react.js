import React from "react";

function Card(props) {
  return (
    <div  className="p-2 border rounded shadow-lg text-dark">
      <h1>{props.title}</h1>
      <img
        className="img-fluid"
        src="https://picsum.photos/seed/picsum/200/300"
      ></img>
      <p>{props.content}</p>
      <button className="btn btn-info text-white">Click Here</button>
    </div>
  );
}

export default Card;
