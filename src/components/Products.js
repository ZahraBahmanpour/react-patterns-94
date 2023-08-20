import { useGetProductsQuery } from "../features/product/productApiSlice";
import usePagination from "../hooks/usePagination";
import ProductItem from "./ProductItem";

const Products = () => {
  const [page, toNextPage, toPreviousPage] = usePagination();
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
      <button onClick={() => toNextPage()}>Next</button>
      <button onClick={() => toPreviousPage()}>Previous</button>
    </>
  );
};

export default Products;
// export default withLoader(Products, useGetProductsQuery);
// export const ProductsWithLoader = withLoader(Products, useGetProductsQuery);
