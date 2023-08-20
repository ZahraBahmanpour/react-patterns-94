import { useRef } from "react";
import { useGetProductsQuery } from "../features/product/productApiSlice";
import useClickOutside from "../hooks/useClickOutside";
import usePagination from "../hooks/usePagination";
import ProductItem from "./ProductItem";

const Products = () => {
  const [page, toNextPage, toPreviousPage] = usePagination();
  const divRef = useRef(null);
  useClickOutside(divRef, () => alert("Clicked Outside!"));
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetProductsQuery(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.status}</div>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
      <div ref={divRef}>
        <button onClick={() => toNextPage()}>Next</button>
        <button onClick={() => toPreviousPage()}>Previous</button>
      </div>
    </>
  );
};

export default Products;
// export default withLoader(Products, useGetProductsQuery);
// export const ProductsWithLoader = withLoader(Products, useGetProductsQuery);
