import { useGetProductsQuery } from "../features/product/productApiSlice";
import ProductItem from "./ProductItem";

const Products = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return products.map((product) => (
    <ProductItem key={product.id} {...product} />
  ));
};

export default Products;
