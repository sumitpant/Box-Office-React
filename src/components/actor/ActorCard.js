import React from "react";

import '../../styles/Card.css'
const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  console.log(country)
  return (
    <div className="card">
      <div className="card-head">
        <img src={image} alt="actor" />
      </div>
      <h3 style={{color:"red"}}>
        {name}
        {gender ? `(${gender})` : null}
      </h3>
      
      <p>{country ? `Comes from ${country.name}` : "No country known"}</p>
      {birthday ? <p>Born{birthday}</p> : null}
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
