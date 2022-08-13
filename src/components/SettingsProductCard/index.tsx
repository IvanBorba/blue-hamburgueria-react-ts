import { Product } from "../../types";
import * as Styled from "./styles";
import { EditIcon, TrashIcon } from "../../assets/icons";
import { Dispatch, SetStateAction } from "react";

interface SettingsProductCardProps {
  product: Product;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const SettingsProductCard = ({
  product,
  handleOpenModal,
  handleOpenDeleteModal,
  setProduct,
}: SettingsProductCardProps) => {
  return (
    <Styled.SettingsProductCardContainer>
      <img alt={product.name} src={product.image} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <div>
        <Styled.SettingsProductDeleteButton
          onClick={() => {
            setProduct(product);
            handleOpenDeleteModal();
          }}
        >
          <TrashIcon /> Remover
        </Styled.SettingsProductDeleteButton>
        <Styled.SettingsProductEditButton
          onClick={() => {
            setProduct(product);
            handleOpenModal();
          }}
        >
          <EditIcon /> Editar
        </Styled.SettingsProductEditButton>
      </div>
    </Styled.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;
