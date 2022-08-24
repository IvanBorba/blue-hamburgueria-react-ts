import { Product } from "../../types";
import ProductCard from "../ProductCard";
import * as Styled from "./styles";

interface ProductsListProps {
  list: Product[];
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

const ProductsList = ({
  list,
  isFavoritesList,
  handleGetFavorites,
}: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <ProductCard
          isFavoritesList={isFavoritesList}
          handleGetFavorites={handleGetFavorites}
          product={element}
          key={element.id}
        />
      ))}
    </Styled.ProductsListContainer>
  );
};

export default ProductsList;
