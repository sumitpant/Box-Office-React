import React from "react";
import ActorCard from "./ActorCard";
import NOTFOUND from "../../images/not-found.png";

const ActorGrid = ({ data }) => {
  return (
    <div className="grid">
      {data.map(({ person }) => {
        return (
          <ActorCard
            key={person.id}
            name={person.name}
            country={person.country ? person.country : null}
            birthday={person.birthday}
            deathday={person.deathday}
            gender={person.gender}
            image={person.image ? person.image.medium : NOTFOUND}
          />
        );
      })}
    </div>
  );
};

export default ActorGrid;
