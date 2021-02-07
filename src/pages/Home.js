import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/Home.css";
import { ApiGet } from "../misc/config";
import ActorGrid from "../components/actor/ActorGrid";
import ShowGrid from "../components/show/ShowGrid";
const Home = () => {
  const [Search, setSearch] = useState("");
  const [results, setresults] = useState(null);
  const [searchOptions, setsearchOptions] = useState("shows");

  const isOption = searchOptions === "shows";
 
  const clickbtn = (ev) => {
    ApiGet(`/search/${searchOptions}?q=${Search}`).then((data) => {
      console.log(data);
      setresults(data);
    });
  };
  const changebtn = (ev) => {
    setSearch(ev.target.value);
  };
  const keydown = (ev) => {
    //13 is the keyvalue for enter key press
    if (ev.keyCode === 13) {
      clickbtn();
    }
  };
  const onRadioChange = (ev) => {
    setsearchOptions(ev.target.value);
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  return (
    <MainPageLayout>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search..."
          onKeyDown={keydown}
          onChange={changebtn}
          value={Search}
          id="searchbox"
          // style={{position:"sticky",top:"0"} }
        />
        <IconButton onClick={clickbtn}>
          <SearchIcon style={{ color: "red" }} />
        </IconButton>
      </div>
      <div className="options__search">
        <label htmlFor="shows">Shows</label>
        <input
          type="radio"
          id="shows"
          checked={isOption}
          value="shows"
          onChange={onRadioChange}
        />
        <label htmlFor="actors">Actors</label>
        <input
          type="radio"
          id="actors"
          value="people"
          checked={!isOption}
          onChange={onRadioChange}
        />
      </div>
      <div className="search__results">{renderResults()}</div>
    </MainPageLayout>
  );
};

export default Home;
