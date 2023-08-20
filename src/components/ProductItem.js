const ProductItem = ({ name, brand, quantity }) => {
  return (
    <div style={{ borderBottom: "1px solid lightgray" }}>
      <h2>{name}</h2>
      <p>{brand}</p>
      <p>{quantity}</p>
    </div>
  );
};

export default ProductItem;
