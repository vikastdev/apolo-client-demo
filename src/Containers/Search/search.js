import React from "react";
import "./search.css";
const SearchBar = (props) => {
  return (
    <form>
      <input type="search" placeholder="Enter country code" />
    </form>
  );
};

export default SearchBar