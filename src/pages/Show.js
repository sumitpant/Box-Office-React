import React, { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom";
import Cast from "../components/show/Cast";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import ShowMainData from "../components/show/ShowMainData";
import { ApiGet } from "../misc/config";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        isLoading: false,
        show: action.show,
        error: null,
      };
    }
    case "FETCH_FAILED": {
      return { ...prevState, isLoading: false, error: action.error };
    }
    default:
      return prevState;
  }
};
const initialState = {
  show: null,
  isLoading: true,
  error: null,
};

const Show = (props) => {
  // const[Show,setShow]=useState(null)
  // const[isLoading,setIsLoading]= useState(true)
  // const [error, setError] = useState(null)
  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { id } = useParams();
  // const id2=props.match.params.id

  useEffect(() => {
    let isMounted = true;
    ApiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((results) => {
        setTimeout(() => {
          if (isMounted) {
            dispatch({
              type: "FETCH_SUCCESS",
              show: results,
            });
          }
        }, 2000);
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({
            type: "FETCH_FAILED",
            error: err.message,
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  //console.log(state)
  if (isLoading) {
    return <div>Data is Being loaded</div>;
  }
  if (error) {
    return <div>Error Occured</div>;
  }
  return (
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <div>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>
      <div>
        <Seasons seasons={show._embedded.seasons} />
      </div>
      <div>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
};

export default Show;
