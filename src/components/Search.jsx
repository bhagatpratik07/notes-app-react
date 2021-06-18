import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ searchText }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => searchText(event.target.value)}
      />
    </div>
  );
};

export default Search;
