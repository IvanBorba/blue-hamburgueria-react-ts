import { Product } from "../../types";
import ProductCard from "../ProductCard";
import * as Styled from "./styles";

interface ProductsListProps {
  list: Product[];
}

const ProductsList = ({ list }: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <ProductCard product={element} key={element.id} />
      ))}
    </Styled.ProductsListContainer>
  );
};

export default ProductsList;
