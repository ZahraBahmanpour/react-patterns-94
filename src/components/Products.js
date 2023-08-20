import { useGetProductsQuery } from "../features/product/productApiSlice";
import ProductItem from "./ProductItem";
import withLoader from "./withLoader";

const Products = ({ data: products }) => {
  // const { data: products, isLoading, isError, error } = useGetProductsQuery();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>{error.status}</div>;
  // }

  return products.map((product) => (
    <ProductItem key={product.id} {...product} />
  ));
};

export default withLoader(Products, useGetProductsQuery);
// export const ProductsWithLoader = withLoader(Products, useGetProductsQuery);
