import { useEffect, useState } from "react";
import { changeQuery } from "../../data";

import "./SearchBar.scss";

const SearchBar = ({ handleSubmit }) => {
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    changeQuery(searchField);
  }, [searchField]);

  const handleChange = (evt) => {
    setSearchField(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search-bar"
        type="text"
        name="search"
        placeholder="Search Images..."
        onChange={handleChange}
        value={searchField}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
