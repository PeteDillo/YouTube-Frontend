import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
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
