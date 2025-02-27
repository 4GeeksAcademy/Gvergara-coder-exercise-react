import React from "react";

export const Card = function (props) {
  return (
    <div className="card col" style={{ width: "18rem" }}>
      <img src={props.img} 
      className="card-img-top" alt="https://fastly.picsum.photos/id/1069/500/500.jpg?hmac=m8Rv5UtHpq43AgjhnFv9eL8ByirOIdB6GJYmq9r7kBU" />
      <div className="card-body">
        <h5 className="card-title">{props.tittle}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary" id="my-button">Go somewhere</a>
      </div>
    </div>
  )
}