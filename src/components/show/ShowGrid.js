import React from "react";
import ShowCard from "./ShowCard";
import NOTFOUND from "../../images/not-found.png";
// import {FlexGrid} from '../StyledComponent'
import '../../styles/Grid.css'

const ShowGrid = ({ data }) => {
  return (
    <div className="grid">
    
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : NOTFOUND}
          summary={show.summary}
        />
      ))}
    
    </div>
  );
};

export default ShowGrid;
