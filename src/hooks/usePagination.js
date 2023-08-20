import { useState } from "react";

const usePagination = (defaultValue = 1) => {
  const [page, setPage] = useState(defaultValue);

  const toNextPage = () => {
    console.log(page);
    setPage(page + 1);
  };

  const toPreviousPage = () => {
    setPage(page - 1);
  };

  return [page, toNextPage, toPreviousPage];
};

export default usePagination;
