import { useState } from "react";

const SearchWrapper = ({ render }) => {
  const [queryString, setQueryString] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="search here..."
        value={queryString}
        onChange={(e) => setQueryString(e.target.value)}
      />
      {render(queryString)}
    </>
  );
};

export default SearchWrapper;
