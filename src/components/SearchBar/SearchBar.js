import React, { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const { setSearchResults } = props
  //TODO: for some reason this is not working so the API key is hardcoded at the moment

  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const getSearchResults = async () => {
      try {
        let response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?key=" +
            'AIzaSyDvQsvH6JjEOuSjtAvP2TdLt1DW4y4uBIU' +
            "&type=video&part=snippet&maxResults=10&q=" +
            searchTerm
        );
        setSearchResults(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    getSearchResults();
    setSearchTerm("");
  }
  return (
    <form className="row" onSubmit={handleSubmit}>
      <div>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          data-toggle="popover"
          title="Search"
          data-content="Search"
          trigger="hover"
        ></button>
      </div>
    </form>
  );
};

export default SearchBar;

