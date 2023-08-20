import { useGetProductsQuery } from "../features/product/productApiSlice";
import ProductItem from "./ProductItem";

const Products = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.status}</div>;
  }

  return products.map((product) => (
    <ProductItem key={product.id} {...product} />
  ));
};

export default Products;
