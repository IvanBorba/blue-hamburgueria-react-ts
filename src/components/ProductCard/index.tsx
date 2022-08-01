import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <img alt={product.name} src={product.image} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
