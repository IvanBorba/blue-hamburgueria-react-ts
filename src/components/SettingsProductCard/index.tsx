import { Product } from "../../types";
import * as Styled from "./styles";
import { EditIcon } from "../../assets/icons";

interface SettingsProductCardProps {
  product: Product;
}

const SettingsProductCard = ({ product }: SettingsProductCardProps) => {
  return (
    <Styled.SettingsProductCardContainer>
      <img alt={product.name} src={product.image} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <Styled.SettingsProductCardButton>
        <EditIcon /> Editar prato
      </Styled.SettingsProductCardButton>
    </Styled.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;
