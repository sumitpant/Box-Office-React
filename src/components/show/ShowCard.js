import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Card.css'

const ShowCard = ({ id, image, name, summary }) => {
  console.log(id)
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No Description";
  return (
    <div className="card">
      <div className="card-head">
        <img src={image} alt="show" height="200px" />
      </div>
      
      <div className="card-body">
          <h3 style={{color:"red"}}>{name}</h3>
          <p>{summaryAsText}</p>
          <div className="sub-body">
          <Link to={`/show/${id}`} style={{margin:"10px"}}>Read More</Link>
          <button className="btn-star" type="button">Star </button>
          </div>
         
      </div>
    </div>
  );
};

export default ShowCard;
