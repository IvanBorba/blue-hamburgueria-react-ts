import { Product } from "../../types";
import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";
import { Dispatch, SetStateAction } from "react";

interface SettingsProductCardProps {
  product: Product;
  handleOpenModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const SettingsProductCard = ({
  product,
  handleOpenModal,
  setProduct,
}: SettingsProductCardProps) => {
  return (
    <Styled.SettingsProductCardContainer>
      <img alt={product.name} src={product.image} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <Styled.SettingsProductCardButton
        onClick={() => {
          setProduct(product);
          handleOpenModal();
        }}
      >
        <EditIcon /> Editar prato
      </Styled.SettingsProductCardButton>
    </Styled.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;
