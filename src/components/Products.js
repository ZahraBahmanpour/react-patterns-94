import { useGetProductsQuery } from "../features/product/productApiSlice";
import ProductItem from "./ProductItem";
import withLoader from "./withLoader";
import SearchWrapper from "./Wrapper";

const Products = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.status}</div>;
  }

  // return products.map((product) => (
  //   <ProductItem key={product.id} {...product} />
  // ));

  return (
    <SearchWrapper
      render={(queryString) => {
        const filteredProducts = products.filter((p) =>
          p.name.includes(queryString)
        );
        return filteredProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ));
      }}
    />
  );
};

export default Products;
// export default withLoader(Products, useGetProductsQuery);
// export const ProductsWithLoader = withLoader(Products, useGetProductsQuery);
