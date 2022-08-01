import { Product } from "../../types";
import * as Styled from "./styles";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Styled.CardContainer>
      <img alt={product.name} src={product.image} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </Styled.CardContainer>
  );
};

export default ProductCard;
